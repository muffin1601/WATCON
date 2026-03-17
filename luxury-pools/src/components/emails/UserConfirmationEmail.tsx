import * as React from 'react';

interface UserConfirmationEmailProps {
  name: string;
}

export const UserConfirmationEmail: React.FC<Readonly<UserConfirmationEmailProps>> = ({
  name,
}) => (
  <div style={{
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    backgroundColor: '#050505',
    padding: '60px 20px',
    color: '#ffffff'
  }}>
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#0a0a0a',
      padding: '50px',
      borderRadius: '2px',
      border: '1px solid #1a1a1a',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p style={{ 
          fontSize: '11px', 
          letterSpacing: '5px', 
          margin: '0 0 20px 0', 
          color: '#bdb595', 
          textTransform: 'uppercase',
          fontWeight: '500'
        }}>WATCON INTERNATIONAL</p>
        <h1 style={{ 
          fontSize: '32px', 
          margin: '0', 
          fontWeight: '300', 
          fontStyle: 'italic',
          letterSpacing: '-0.5px'
        }}>Dear {name},</h1>
      </div>
      
      <p style={{ 
        fontSize: '16px', 
        lineHeight: '1.8', 
        color: '#a0a0a0', 
        marginBottom: '30px',
        textAlign: 'center',
        fontWeight: '300'
      }}>
        Thank you for your interest in our bespoke aquatic environments. We have received your enquiry and our design specialists are already reviewing your vision.
      </p>

      <div style={{ 
        padding: '30px', 
        backgroundColor: '#0f0f0f', 
        border: '1px solid #151515',
        marginBottom: '40px', 
        textAlign: 'center' 
      }}>
        <p style={{ 
          margin: '0', 
          fontSize: '14px', 
          color: '#bdb595', 
          fontStyle: 'italic',
          lineHeight: '1.6'
        }}>
          A consultant will reach out to you within the next 24 business hours to discuss your project in detail.
        </p>
      </div>

      <p style={{ 
        fontSize: '15px', 
        lineHeight: '1.8', 
        color: '#888', 
        marginBottom: '40px',
        textAlign: 'center'
      }}>
        In the meantime, feel free to explore our recent <a href="https://watcon.co.in/portfolio" style={{ color: '#bdb595', textDecoration: 'none', borderBottom: '1px solid rgba(189, 181, 149, 0.3)' }}>portfolio</a> for inspiration.
      </p>

      <div style={{ 
        borderTop: '1px solid #1a1a1a', 
        paddingTop: '40px', 
        textAlign: 'center' 
      }}>
        <p style={{ margin: '0 0 10px 0', fontSize: '10px', color: '#555', letterSpacing: '2px', textTransform: 'uppercase' }}>WATCON INTERNATIONAL</p>
        <p style={{ margin: '0', fontSize: '12px', color: '#444' }}>New Delhi • India</p>
        <p style={{ margin: '15px 0 0 0', fontSize: '12px', color: '#bdb595' }}>+91 99998 39999</p>
      </div>
    </div>
  </div>
);
