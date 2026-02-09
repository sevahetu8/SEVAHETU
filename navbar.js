class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
       :host {
  display: block;
  width: 100%;
}
 
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background: #fff;
  position: relative;
}
 
.logo {
  flex-shrink: 0;
}
 
.logo-image {
  height: 36px;
}
 
.nav-links {
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
}
 
.nav-links li a {
  text-decoration: none;
  color: #111;
  font-weight: 500;
}
 
/* MOBILE */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
}
 
@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }
 
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #fff;
    flex-direction: column;
    padding: 16px 20px;
    display: none;
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    z-index: 999;
  }
 
  .nav-links.active {
    display: flex;
  }
}
</style>
      <nav class="navbar" part="navbar">
        <div class="logo">
          <img src="./images/logo.jpg" class="logo-image" />
        <button class="mobile-menu-btn" id="mobileMenuBtn">
          <i data-feather="menu"></i>
        </button>
        </div>     
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

