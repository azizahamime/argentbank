import React from "react";

import { editUser } from "../Redux/reducers/userReducer";
import { useDispatch } from "react-redux";

export default function EditProfil(user){
  const dispatch =useDispatch();
  const CancelFunction =(e)=>{
    e.preventDefault();
    dispatch (editUser(false));

  }
  return (
    <h1>
      Welcome back<br />
      <form>
        <div className="data">
          <input type="text" placeholder={user.firstName} id="first"/>
          <input type="text" placeholder={user.lastName} id="last"/>
        </div>
        <div className="buttons">
          <button className="edit-button">Save</button>
          <button className="edit-button" onClick={CancelFunction}>Cancel</button>
        </div>              
                
      </form>
    </h1>
  );
}