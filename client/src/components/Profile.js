import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import adminAvatar from "../images/admin.png"
import userAvatar from "../images/user.png"

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (

    <div className="col-md-12">
      <div className="card card-container">
          <img
          src={currentUser.role==="admin" ? adminAvatar : userAvatar}
          alt="profile-img"
          className="profile-img-card"
        /> 
    
        
    {/* <div className="container"> */}
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> 
        </h3>
      </header>
      <p>
          <strong>Surname:</strong> {currentUser.surname}
      </p>
      
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      
      <p>
          <strong>Role: </strong> {currentUser.role}
      </p>
    </div>

    
</div>

  );
};

export default Profile;