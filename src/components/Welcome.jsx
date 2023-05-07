import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { GetUser } from "../Redux/Api";
import { selectUser, editUser, edit } from "../Redux/reducers/userReducer";

export default function Welcome () {
  const user = useSelector(selectUser);
  const {error, isLoading}= GetUser();
  const dispatch = useDispatch();
  error && <span> il y a une erreur</span>;

  const editNameFunction =(e)=>{
    dispatch (editUser(true));

  }
  const CancelFunction =(e)=>{
    e.preventDefault();
    dispatch (editUser(false));

  }

  return (
    <>
      {isLoading ? (
        <span> chargement !!!</span>
      ):(
        <div className="header">
          { edit ? (
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
          ):(
            <>
              <h1>
                Welcome back<br />
                <span>
                  {user.firstName} {user.lastName}
                </span>
                
              </h1>
              <button className="edit-button" onClick={editNameFunction}> 
                Edit Name
              </button> 

            </>
            
                      
          )}
       
        </div>
      )};
    
    </>
    
  );
}