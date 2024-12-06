import React from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'; 

function Contact() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {/* Link do WhatsApp */}
        <li style={{ marginBottom: '20px' }}>
          <a
            href="https://wa.me/5547992806411" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <FaWhatsapp size={60} style={{ color: '#25D366' }} />
          </a>
        </li>
        {/* Link do LinkedIn */}
        <li style={{ marginBottom: '20px' }}>
          <a
            href="https://www.linkedin.com/in/erica-ribeiro-b83764236/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <FaLinkedin size={60} style={{ color: '#0077B5' }} />
          </a>
        </li>
        {/* Link do GitHub */}
        <li style={{ marginBottom: '20px' }}>
          <a
            href="https://github.com/ericaregina" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <FaGithub size={60} style={{ color: '#000' }} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
