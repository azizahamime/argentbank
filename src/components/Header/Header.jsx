import React from "react";
import { Link } from "react-router-dom";
import argentBankLogo from "../../assets/argentBankLogo.png";

export default function Header() {
  return (
    <nav className="main-nav">
      <Link to='/' className="main-nav-logo" >
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to='/login' className="main-nav-item" >
          <i className="fa fa-user-circle nav-signin-icon"></i>
          Sign In
        </Link>        
      </div>
    </nav>
  );
}