class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .logo {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .logo-image {
          height: 140px;
          width: auto;
        }
.nav-links {
          display: flex;
          list-style: none;
        }
        .nav-links li {
          margin: 0 1rem;
        }
        .nav-links a {
          text-decoration: none;
          color: #334155;
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-links a:hover {
          color: #2563eb;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #334155;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: white;
            padding: 1rem;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
          
          .nav-links.active {
            display: flex;
          }
          
          .nav-links li {
            margin: 0.5rem 0;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
</style>
      <nav class="navbar" part="navbar">
        <div class="logo">
          <img src="./images/logo.jpg" class="logo-image" />
        <button class="mobile-menu-btn" id="mobileMenuBtn">
          <i data-feather="menu"></i>
        </button>
        <ul class="nav-links" id="navLinks">
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="https://wa.me/917982600602" target="_blank" rel="noopener noreferrer">
  Contact
</a></li>
          <li><a href="#">App - Coming Soon</a></li>
        </ul>
      </nav>
`;
    
    // Add event listeners after content is rendered
    setTimeout(() => {
      const mobileMenuBtn = this.shadowRoot.getElementById('mobileMenuBtn');
      const navLinks = this.shadowRoot.getElementById('navLinks');
      
      if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
          navLinks.classList.toggle('active');
          const menuIcon = mobileMenuBtn.querySelector('[data-feather]');
          if (navLinks.classList.contains('active')) {
            menuIcon.setAttribute('data-feather', 'x');
          } else {
            menuIcon.setAttribute('data-feather', 'menu');
          }
          feather.replace();
        });
      }
      // Initialize feather icons
      feather.replace();
    }, 0);
  }
}

customElements.define('custom-navbar', CustomNavbar);

