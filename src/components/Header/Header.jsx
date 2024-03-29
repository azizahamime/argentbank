import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import argentBankLogo from "../../assets/argentBankLogo.png";
import { selectToken, selectUser} from "../../Redux/reducers/userReducer";
import userIcon from "../../assets/user.svg"
import logOutIcon from "../../assets/sign-out.svg"
//import signInIcon from "../../assets/sign-in.svg"
import { logout } from "../../Redux/reducers/userReducer";
import { GetUser } from "../../Redux/Api";


export default function Header() {
  const token = useSelector(selectToken)
  const user = useSelector(selectUser);
  const {error, isLoading}= GetUser();
  error && <span> il y a une erreur</span>;
  const dispatch =useDispatch()
  const navigate = useNavigate()

  const handelLogout =()=>{
    dispatch(logout(token))
    navigate('/login')
  }

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
      {token ? (
        <div className="userInfos flex">
          {isLoading ? (
            <span> chargement !!</span> 
          ):(
            <Link to="/profil" className="main-nav-item name flex">
              <img src={userIcon} alt="user" className="icon"/>
                {user.firstName}
            </Link>
          )}
          <button onClick={handelLogout} className="main-nav-item logoutButton flex">
            <img src={logOutIcon} alt="logout" className="icon"/>
            Sign Out
          </button>
        </div>
      ):(
        <div className="userInfos">
          <Link to='/login' className="main-nav-item flex" >
            <img src={userIcon} alt="login" className="nav-signin-icon icon"/> 
            Sign In
          </Link>        
        </div>
    
      )}
    </nav> 
  );
}
