import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import AbapoResume from "../AbapoResume.pdf";
import EducationTable from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience"

export default function Resume() {
  return (
    <body>
      <Button href={AbapoResume} download>
        Download Resume
      </Button>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Professional Summary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Education Technology professional with a background in teaching,
            product support and integration, and project management. Seeking an
            opportunity as a Software Engineer to support the education and
            non-profit sector in mission-driven work. Strengths include
            technical troubleshooting, cross-team collaboration, and customer
            service. Highly passionate about education equity and helping with
            positive student outcomes. MERN Stack Certification is expected in
            February 2023.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6">Education</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <EducationTable />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6">Experience</Typography>
        </AccordionSummary>
        <AccordionDetails variant="body1">
          <ResumeExperience />
          {/* EDUCATION TECHNOLOGY INTEGRATIONS SPECIALIST March 2021 – June 2022
          American Reading Company Managed projects related to the development
          of new ed-tech integrations, maintenance, and product upgrades
          Assisted customers to resolve issues with integrations between digital
          products and their ed-tech platforms such as Clever and ClassLink
          Consulted district technologists during pre-implementation calls
          Created interactive dashboards to identify the needs of customers and
          created training articles to address knowledge gaps Maintained vendor
          relations
          <br />
          EDUCATION TECHNOLOGY COORDINATOR Oct. 2018 – Feb. 2021 Denver School
          of Science and Technology Partnered with schools to ensure that
          student data—including schedules, grades, and transcripts—meets a high
          bar of excellence for data integrity and efficient systematization
          Managed Zendesk tickets queue and provide in-school and remote support
          to teachers, faculty, and students Collaborated with academic and
          software team, school leadership, and central office leadership to
          implement an assessment platform, Edulastic, to 15 schools in 2 school
          districts
          <br />
          MARKETING ASSISTANT June 2017 – Oct. 2018 Macmillan Audio Created and
          edited content for Macmillan Audio blog using Wordpress, increasing
          web traffic by 22% Developed system of tracking marketing initiatives
          and maintaining budgets for over 450 titles Created landing pages,
          scripts for podcasts, and copy for email marketing campaigns
          <br />
          SCIENCE LEAD TEACHER Apr. 2014 – Dec. 2016 Success Academy Charter
          School Analyzed and tracked data to push 100% of 4th-grade students to
          pass the NYS Science Exam with the highest possible score of a 4
          Collaborated across grade teams about interventions and strategies to
          support learning by analyzing data to inform goals and objectives
          Planned, organized, and altered lesson plans for multiple grades,
          learning objectives, and differentiated instruction */}
        </AccordionDetails>
      </Accordion>
    </body>
  );
}
