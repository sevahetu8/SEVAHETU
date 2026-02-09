class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        
        .footer {
          background-color: #1e293b;
          color: white;
          padding: 3rem 2rem 2rem;
          margin-top: 3rem;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .footer-section h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }
        
        .footer-section p,
        .footer-section li {
          color: #cbd5e1;
          line-height: 1.6;
        }
        
        .footer-section ul {
          list-style: none;
          padding: 0;
        }
        
        .footer-section li {
          margin-bottom: 0.5rem;
        }
        
        .footer-section a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .footer-section a:hover {
          color: #ffffff;
        }
        
        .copyright {
          text-align: center;
          padding-top: 2rem;
          margin-top: 2rem;
          border-top: 1px solid #334155;
          color: #94a3b8;
          font-size: 0.875rem;
        }
        
        @media (max-width: 768px) {
          .footer {
            padding: 2rem 1rem;
          }
        }
      </style>
      
      <footer class="footer" part="footer">
        <div class="footer-content">
          <div class="footer-section">
            <h3>About US</h3>
            <p>Sevahetu is a registered MSME under Government of India.
</p> <p>Udyam Registration Number:
 UDYAM-DL-04-0071224.</p>
          </div>
          
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
          <div class="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li>Email: helpsevahetu@gmail.com</li>
              <li>Phone: +917835005044</li>
              <li>Address: Delhi, India</li>
            </ul>
          </div>
        </div>
        <div class="footer-section">
  <h3>Social Media</h3>
 
  <div class="social-icons">
    <a href="https://www.facebook.com/profile.php?id=61583264020622" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z"/>
      </svg>
    </a>
 
    <a href="https://x.com/sevahetu" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.2 2H21l-6.6 7.5L22 22h-6.8l-5.3-6.9L3.8 22H1l7.1-8.1L2 2h7l4.8 6.3L18.2 2z"/>
      </svg>
    </a>
    <a href="https://www.instagram.com/sevahetu"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Instagram">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.5-2.3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.3-.5 1.3-.1 1.7-.1 4.9-.1zM12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.7a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
  </svg>
</a>
<a href="https://www.youtube.com/@sevahetu"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="YouTube">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a2.99 2.99 0 0 0-2.104-2.115C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.394.571A2.99 2.99 0 0 0 .502 6.186 31.12 31.12 0 0 0 0 12a31.12 31.12 0 0 0 .502 5.814 2.99 2.99 0 0 0 2.104 2.115C4.495 20.5 12 20.5 12 20.5s7.505 0 9.394-.571a2.99 2.99 0 0 0 2.104-2.115A31.12 31.12 0 0 0 24 12a31.12 31.12 0 0 0-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z"/>
  </svg>
</a>
 <a href="https://www.linkedin.com/company/sevahetu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.8 3.6-1.8 3.8 0 4.5 2.5 4.5 5.7V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21H9z"/>
      </svg>
    </a>
  </div>
</div>
<!-- Footer bottom (NEW & SEPARATE) -->
<div class="footer-bottom">
  <div class="footer-bottom-inner">
    <p>&copy; 2026 Sevahetu. All rights reserved. </p>
  </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
