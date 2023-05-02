import React from "react";
//import components
import { Contents } from "./components/Contents";
import Profile from "./components/Profile";
import { Stack, Box } from "@mui/material";
import background from "./images/background.png";

const App = () => {
  return (
    <>
      <Stack direction={{sm: "column", md: "row"}} spacing={2}  alignItems="center">
        <Box
          sx={{
            height: "vh",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            textAlign: "center",
            alignContent: "center",
            justifyContent: "center",
            margin: "3em",
          }}
          className="profile-container"
        >
          <Profile />
        </Box>
        <Box
          sx={{
            height: "vh",
            border: "2px solid grey",
            alignItems: "center",
            textAlign: "center",
            alignContent: "center",
            justifyContent: "center",
            backgroundColor: "#6D7175",
            margin: "3em",
            padding: "10px",
            backgroundImage: `url(${background})`,
          }}
          className="contents-container"
        >
          <Contents />
        </Box>
      </Stack>
    </>
  );
};

export default App;


