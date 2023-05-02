import { Typography } from "@mui/material";
import React from "react";

const Intro = () => {
  return (
    <body>
      <Typography variant="h3">
        <h4>About Me</h4>
      </Typography>
      <Typography variant="body2" component={"span"}>
        <p>
          Thank you for visiting my page! I currently completed a Software
          Engineering Boot Camp at{" "}
          <a href="https://perscholas.org/courses/software-engineer/software-engineer/">
            Per Scholas
          </a>{" "}
          in conjunction with{" "}
          <a href="https://www.activatework.org/">Activate Work</a> in February
          2023. 
        </p>
        <br />
        <p>
          <span style={{ fontWeight: "bold" }}>
            My professional experience includes:
          </span>
          <br />
          <ul>
            <li>Teaching: College and Elementary Education</li>
            <li>Marketing</li>
            <li>Product Support and Integration</li>
            <li>Education Technology</li>
          </ul>
        </p>
        <div>
          <p>
            I am seeking an entry-level software engineering position. The bulk
            of my experience includes working in education by means of teaching,
            supporting schools from a central office level, and supporting
            schools from a vendor perspective. Additionally, I have experience
            in software implementation with various districts across the
            country. I've also been on the ground level working with
            students and faculty, making me well-versed in multiple areas of
            Education Technology.  ​ I'm highly passionate about education
            equity and helping with improving student outcomes. I would love to
            continue using my knowledge to make quality-of-life changes for
            users as a Software Engineer. 
          </p>
        </div>
      </Typography>
    </body>
  );
};

export default Intro;
