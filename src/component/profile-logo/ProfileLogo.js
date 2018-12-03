import React from 'react'
import './ProfileLogo.scss'
import profileDefault from '../../profile_default.png'

const ProfileLogo = ({ photoUrl }) => {
  return <div className="profile-logo">
    <div className="circle">
      <img src={photoUrl || profileDefault} alt=''/>
    </div>
  </div>
};
/*
  <div className="sqaure">
      <div className="circle">
 */
export default ProfileLogo;