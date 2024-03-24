import Link from "next/link";
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
                <Link href="/" className="footer__link">
                  Home
                </Link>
              </li>
              <li className="footer__list-item">
                <Link href="/about" className="footer__link">
                  About Us
                </Link>
              </li>
              <li className="footer__list-item">
                <Link href="/contact" className="footer__link">
                  Contact Us
                </Link>
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
