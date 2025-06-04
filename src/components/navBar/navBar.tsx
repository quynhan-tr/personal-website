"use client"

import React from "react";
import "./navBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-section navbar-left">
        <a href="#motion" className="nav-btn">MORE</a>
        <a href="#about" className="nav-btn">ABOUT</a>
      </div>
      <div className="navbar-section navbar-center">
        <span className="navbar-title">AnTran</span>
      </div>
      <div className="navbar-section navbar-right">
        <a href="https://github.com/quynhan-tr" target="_blank" rel="noopener noreferrer" className="nav-btn">GITHUB</a>
        <a href="https://www.linkedin.com/in/quynhan05/" target="_blank" rel="noopener noreferrer" className="nav-btn">LINKEDIN</a>
        <a href="mailto:a37tran@uwaterloo.ca" className="nav-btn">EMAIL</a>
      </div>
    </nav>
  );
}

