"use client";
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div
        className={active ? "overlay" : ""}
        onClick={() => setActive(false)}
      ></div>
      <nav className="nav__container">
        <div className="logo">
          <Image
            src="/logo-transparent.png"
            width={200}
            height={120}
            alt="logo"
          />
        </div>

        <ul className={active ? "nav-links nav-active" : "nav-links"}>
          <li className={active ? "link link-active" : "link"}>
            <a href="#">Home</a>
          </li>

          <li className={active ? "link link-active" : "link"}>
            <a href="#">About</a>
          </li>

          <li className={active ? "link link-active" : "link"}>
            <a href="#">Contact Us</a>
          </li>
        </ul>

        <div className="burger" onClick={() => setActive(!active)}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
