import React from 'react'

import '../home/home.css'

const LandingPage = () => {
  return (
    <div>
      <header>
        <nav>
          <h1>Salaahkaar</h1>
          <ul id="navli">
            <li><a className="homered" href="index.html">HOME</a></li>
            <li><a className="homeblack" href="Dashboard.html">LEGAL SERVICES</a></li>
            <li><a className="homeblack" href="aboutus.html">ABOUT US</a></li>
            <li><a className="homeblack" href="contact.html">CONTACT</a></li>
            <li><a className="homeblack" href="evenidk.html">LOG IN</a></li>
          </ul>
        </nav>
      </header>

      <div className="divider"></div>
      <div id="divimg">
        {/* You can add an image here */}
      </div>

      <div style={{ marginTop: '175px' }}>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '30px', textAlign: 'center' }}>Your One Stop Solution</p>
      </div>

      <section className="platform-wrapper">
        <h1>Build the best <span>platform</span> for your team</h1>
        <div className="platform">
          <a className="platform-payroll" href="#">
            <div className="platform-payroll-text">
              <div className="platform-payroll-icon">
                {/* You can add an icon here */}
              </div>
              <h2>Payroll</h2>
              <p>When everything flows through payroll, everything stays in sync</p>
            </div>
            <div className="platform-payroll-bg"></div>
          </a>

          {/* Other platform segments */}
        </div>
      </section>

      <footer className="footer-with-form">
        <div className="left-container">
          <div className="title">Footer with Form</div>
          <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo cum ratione aspernatur dignissimos nisi rerum libero explicabo, minima pariatur.</div>
        </div>
        <form action="/post" method="POST">
          <div className="title">Connect with Us</div>
          <div className="horizontal-container">
            <label htmlFor="name">Name</label>
            <input type="text" required />
          </div>
          <div className="horizontal-container">
            <label htmlFor="email">Email</label>
            <input type="email" required />
          </div>
          <div className="horizontal-container">
            <label htmlFor="message">Message</label>
            <textarea name="message" cols="23" rows="3"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </footer>

      <footer className="footer-with-social">
        <div className="title">Footer with Social</div>
        <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatem aspernatur! Nesciunt beatae voluptatem id voluptatum ut eos dolores a quasi, deleniti, quos accusantium fuga dolore quaerat tempore architecto neque?</div>
        <div className="social">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-google"></ion-icon>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
