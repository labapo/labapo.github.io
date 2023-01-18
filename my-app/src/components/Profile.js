import React from 'react';
import headshot from '../images/headshot.jpg';
import { Avatar } from '@mui/material';

function Profile() {
  return (
    <div>
        <Avatar 
        alt="Lorivie Abapo" 
        src={headshot} 
        sx={{
          width: 250, height: 250
          }}/>
    <h1>Lorivie Abapo</h1>
    </div>
  )
}

export default Profile;