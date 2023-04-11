import Card from "react-bootstrap/Card";
import Placeholder from "../../images/Kirk.jpg";
import { Avatar } from "@mui/material";

function Kirk() {
  return (
    <div>
      <Card>
        <Card.Header className="fw-bold">
          Kirk Anderson
          <Card.Subtitle className="fw-light text-muted">
            Director of Academic and Business Systems
            <br />
            Manager at Denver School of Science and Technology
          </Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Avatar
            alt="Kirk"
            src={Placeholder}
            sx={{ width: 150, height: 150 }}
            className="avatar-card"
          />
          <Card.Title>Exceptional Persistence and Tenacity</Card.Title>
          <Card.Text>
            I would recommend Lorivie Abapo for any position in education
            technology or any related fields that involve problem-solving. When
            Lorivie and I worked together, she consistently demonstrated
            exceptional persistence and tenacity in tackling tough problems. Her
            greatest strength was her ability to stick with a problem until it
            was resolved, no matter how complex or challenging it may have
            seemed. Her knowledge of education technology systems and excellent
            communication skills allowed her to work through and resolve issues
            for both faculty and students. Lorivie's dedication, hard work, and
            willingness to go the extra mile made her a valuable asset to our
            team. She would be an asset to any organization she works for.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Kirk;
