import React from 'react'
import './ProfileLogo.scss'
import profileDefault from '../../profile_default.png'

const ProfileLogo = ({ photoUrl }) => {
  return <div className="profile-logo">
    <img src={photoUrl || profileDefault} alt=''/>
  </div>
};

export default ProfileLogo;