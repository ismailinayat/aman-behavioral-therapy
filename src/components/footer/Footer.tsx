import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer__logo-box">
          <img
            src="/logo-transparent.png"
            alt="Websoft Logo"
            className="footer__logo"
          />
        </div>

        <div className="footer__row">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Home
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  About Us
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Contact Us
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__copyright">
            <p className="footer__copyright--text">
              Aman Behavioral Therapy.
              <br />
              @2024 Aman Behavioral Therapy.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
