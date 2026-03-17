import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { AdminEnquiryEmail } from '@/components/emails/AdminEnquiryEmail';
import { UserConfirmationEmail } from '@/components/emails/UserConfirmationEmail';
import { render } from '@react-email/render';
import * as React from 'react';

// Use a getter for the Resend instance to avoid issues if API key is missing during early import
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not defined in environment variables');
  }
  return new Resend(apiKey);
};

export async function POST(req: NextRequest) {
  console.log('--- Resend API Route Triggered ---');
  
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is missing from environment variables');
    return NextResponse.json({ error: 'Mail server configuration missing' }, { status: 500 });
  }

  try {
    const body = await req.json();
    const { name, email, message, pageSource } = body;

    console.log('Form data received:', { name, email, source: pageSource });

    if (!name || !email) {
      console.warn('Missing name or email in request');
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const resend = getResend();

    // 1. Prepare and Send email to Admin
    console.log('Rendering Admin Email HTML...');
    const adminHtml = await render(
      React.createElement(AdminEnquiryEmail, { 
        name, 
        email, 
        message, 
        pageSource 
      })
    );

    console.log('Attempting to send admin email to report@watcon.net...');
    const adminResponse = await resend.emails.send({
      from: 'Watcon Enquiry <enquiry@watcon.co.in>', 
      to: ['report@watcon.net'], 
      subject: `New Enquiry from ${name}`,
      html: adminHtml,
    });

    if (adminResponse.error) {
      console.error('Resend Admin Email Error:', adminResponse.error);
      return NextResponse.json({ 
        error: adminResponse.error.message,
        details: adminResponse.error 
      }, { status: 400 });
    }

    console.log('Admin email sent successfully ID:', adminResponse.data?.id);

    // 2. Prepare and Send confirmation email to User
    console.log('Rendering User Confirmation HTML...');
    const userHtml = await render(
      React.createElement(UserConfirmationEmail, { name })
    );

    console.log(`Attempting to send confirmation to ${email}...`);
    const userResponse = await resend.emails.send({
      from: 'Watcon International <enquiry@watcon.co.in>', 
      to: [email],
      subject: 'Thank you for your enquiry | Watcon International',
      html: userHtml,
    });

    if (userResponse.error) {
      console.error('Resend User Email Error:', userResponse.error);
    } else {
      console.log('User confirmation sent successfully ID:', userResponse.data?.id);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Enquiry processed successfully',
      adminId: adminResponse.data?.id,
      userId: userResponse.data?.id
    });

  } catch (error: any) {
    console.error('CRITICAL API ERROR:', error);
    return NextResponse.json(
      { 
        error: error.message || 'Internal Server Error',
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
