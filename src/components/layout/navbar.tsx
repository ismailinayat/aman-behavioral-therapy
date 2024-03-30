"use client";
import Image from "next/image";
import Link from "next/link";
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
          <Link href="/">
            <Image
              src="/logo-transparent.png"
              width={200}
              height={120}
              alt="logo"
            />
          </Link>
        </div>

        <ul className={active ? "nav-links nav-active" : "nav-links"}>
          <li className={active ? "link link-active" : "link"}>
            <Link href="/">Home</Link>
          </li>

          <li className={active ? "link link-active" : "link"}>
            <Link href="/services">Our Services</Link>
          </li>

          <li className={active ? "link link-active" : "link"}>
            <Link href="/about">About Us</Link>
          </li>

          <li className={active ? "link link-active" : "link"}>
            <Link href="/contact">Contact Us</Link>
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
