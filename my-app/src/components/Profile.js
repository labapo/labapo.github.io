import React from "react";
import headshot from "../images/headshot.jpg";
import { Avatar } from "@mui/material";
import Button from '@mui/material/Button';

export const Profile = () => {
  return (
    <div>
      <Avatar
        alt="Lorivie Abapo"
        src={headshot}
        sx={{
          width: 250,
          height: 250,
        }}
      />
      <h1>Lorivie Abapo</h1>
      <div className="social">
        <Button variant="contained" href="https://www.linkedin.com/in/lorivieabapo/">
          LinkedIn
        </Button>
        <Button variant="contained" href="https://github.com/labapo?tab=repositories">
          GitHub
        </Button>
        <Button variant="contained" href="mailto:labapo@gmail.com">
          Email Me!
        </Button>
      </div>
    </div>
  );
};

export default Profile;
