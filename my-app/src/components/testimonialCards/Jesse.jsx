import Card from "react-bootstrap/Card";
import Jesse from "../../images/Jesse.jpg";
import { Avatar } from "@mui/material";

function jesse() {
  return (
    <div>
      <Card>
        <Card.Header className="fw-bold">
          Jesse Tyler
            <Card.Subtitle className="fw-light text-muted">
            Digital Support Specialist
            <br />
              Co-Worker at American Reading Company
            </Card.Subtitle>
         
        </Card.Header>
        <Card.Body>
          <Avatar
            alt="Contact"
            src={Jesse}
            sx={{ width: 150, height: 150 }}
            className="avatar-card"
          />
          <Card.Title>Lorivie is literally the best</Card.Title>
          <Card.Text>
            Without exaggeration, Lorivie is the absolute best! She is most hard
            working, considerate, and caring coworker I have ever had the
            pleasure of working with. She never backs down from a challenge and
            is consistently the first person to speak up and volunteer when
            someone needs help. She is an invaluable asset that any team would
            be lucky to have on board.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default jesse;
