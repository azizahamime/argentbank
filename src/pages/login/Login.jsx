import React, { useState } from "react";
import { useDispatch} from "react-redux";

import { login } from "../../Redux/reducers/userReducer";
import { useNavigate} from "react-router-dom";
import {Connection} from "../../Redux/Api";
import userIcon from "../../assets/user.svg"


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()  
  

  const handledSubmit = (e) => {
    e.preventDefault()
    Connection(email, password)
    .then((token) => {
      localStorage.setItem("token", token);
      dispatch(login(token));
      console.log("success");
      navigate("/profil")        
    })
    .catch((error) => {
      const form = document.querySelector(".sign-in-content");
      const errorDiv = document.createElement("div");      
      errorDiv.classList.add('error');     
      form.prepend(errorDiv);
      errorDiv.innerHTML = error.message;
      
    })
  }
  
  return (
    <main className="main bg-dark login-main">
      <section className="sign-in-content" >
        <img src={userIcon} alt="user" className="sign-in-icon"/>
          <h1>Sign In</h1>
        
        <form onSubmit={(e) => handledSubmit(e)}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              onClick={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button type="submit" className="sign-in-button"  >
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}