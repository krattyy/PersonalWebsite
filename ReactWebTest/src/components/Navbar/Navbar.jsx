import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a>
          <Link to="/" id="mainNav">
            KrattyDEV
          </Link>
        </a>
        <div className="sagicin">
          <a>
            <Link to="/hakkimda" id="hakkimda">
              Hakkımda
            </Link>
          </a>
          <a>
            <Link to="/portfolyo" id="yaptiklarim">
              Portfolyo
            </Link>
          </a>
          <a>
            <Link to="/iletisim" id="iletisim">
              İletişim
            </Link>
          </a>
        </div>
      </nav>
    </>
  );
}
