import { Typography } from "@mui/material";
import React from "react";

const Intro = () => {
  return (
    <body>
    <Typography variant="h1">
      <h1>About Me</h1>
    </Typography>
    <Typography variant="body2" component={'span'}>
        <p>
          Thank you for visiting my page! I am currently attending a Software
          Engineering BootCamp at Per Scholas with an anticipated graduation
          date of February 2023. 
        </p>
        <br />
        <p>
          <span style={{fontWeight: "bold"}}>My professional experience includes:</span>
          <br />
          <ul >
            <li>Teaching: College and Elementary Education</li>
            <li>Marketing</li>
            <li>Product Support and Integration</li>
            <li>Education Technology</li>
          </ul>
        </p>
      <div>
        <p>
          I am seeking a software engineering position in Education Technology.
          Throughout my career, I have been able to view this industry from
          various lenses that allow me to understand how users engage with
          technology and what use cases are important. The bulk of my experience
          includes supporting schools from a central office level within a
          charter school network. Additionally, I have experience in software
          implementation with various districts across the country. Lastly, I've
          also been on the ground level working with students and faculty,
          making me well-versed in multiple areas of Education Technology.  ​
          I'm highly passionate about education equity and helping with
          improving student outcomes. I would love to continue using my
          knowledge to make quality-of-life changes for the education sector as
          a Software Engineer. 
        </p>
      </div>
    </Typography>
    </body>
  );
};

export default Intro;
