import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    UserService.getUserProfile()
      .then(response => {
        setUserProfile(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <div id="userProfile">
      <h2>User Profile</h2>
      <div>
        <label>Name: </label> {userProfile.name}
      </div>
      <div>
        <label>Email: </label> {userProfile.email}
      </div>
      <div>
        <label>AI-NFTs Owned: </label> {userProfile.aiNFTsOwned}
      </div>
      <div>
        <label>AI-NFT Interaction History: </label> {userProfile.aiNFTInteractionHistory}
      </div>
    </div>
  );
};

export default UserProfile;