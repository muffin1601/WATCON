import * as React from 'react';

interface AdminEnquiryEmailProps {
  name: string;
  email: string;
  message?: string;
  pageSource?: string;
}

export const AdminEnquiryEmail: React.FC<Readonly<AdminEnquiryEmailProps>> = ({
  name,
  email,
  message,
  pageSource,
}) => (
  <div style={{
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#f6f6f6',
    padding: '40px 20px',
    color: '#1a1a1a'
  }}>
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '4px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      border: '1px solid #eeeeee'
    }}>
      <div style={{ borderLeft: '4px solid #bdb595', paddingLeft: '20px', marginBottom: '30px' }}>
        <h1 style={{
          fontSize: '22px',
          fontWeight: '600',
          margin: '0',
          color: '#000000',
          letterSpacing: '-0.5px'
        }}>
          New Lead: Luxury Pool Enquiry
        </h1>
        <p style={{ margin: '5px 0 0 0', fontSize: '13px', color: '#888' }}>
          Received from watcon.co.in
        </p>
      </div>
      
      <div style={{ display: 'grid', gap: '20px' }}>
        <div style={{ padding: '15px', backgroundColor: '#fafafa', borderRadius: '4px' }}>
          <p style={{ margin: '0 0 5px 0', fontSize: '11px', color: '#999', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>Client Name</p>
          <p style={{ margin: '0', fontSize: '16px', color: '#000' }}>{name}</p>
        </div>

        <div style={{ padding: '15px', backgroundColor: '#fafafa', borderRadius: '4px' }}>
          <p style={{ margin: '0 0 5px 0', fontSize: '11px', color: '#999', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>Email Address</p>
          <p style={{ margin: '0', fontSize: '16px', color: '#bdb595', fontWeight: '500' }}>{email}</p>
        </div>

        {message && (
          <div style={{ padding: '15px', backgroundColor: '#fafafa', borderRadius: '4px' }}>
            <p style={{ margin: '0 0 5px 0', fontSize: '11px', color: '#999', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>Project Vision / Message</p>
            <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.6', color: '#333' }}>{message}</p>
          </div>
        )}

        {pageSource && (
          <div style={{ marginTop: '10px' }}>
            <p style={{ margin: '0', fontSize: '12px', color: '#aaa', fontStyle: 'italic' }}>
              Enquiry Source: {pageSource}
            </p>
          </div>
        )}
      </div>

      <div style={{ marginTop: '40px', borderTop: '1px solid #eeeeee', paddingTop: '20px', textAlign: 'center' }}>
        <a href={`mailto:${email}`} style={{
          display: 'inline-block',
          backgroundColor: '#000',
          color: '#fff',
          padding: '12px 25px',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: '500',
          borderRadius: '2px'
        }}>
          Reply to Client
        </a>
      </div>
    </div>
  </div>
);
