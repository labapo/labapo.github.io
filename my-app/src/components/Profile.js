import React from "react";
import headshot from "../images/headshot.png";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import ProfileBar from "./ProfileBar/ProfileBar";

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
      <div>
        <ProfileBar />
      </div>
    </div>
  );
};

export default Profile;
