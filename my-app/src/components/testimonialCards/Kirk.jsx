import Card from "react-bootstrap/Card";
import Placeholder from "../../images/Placeholder.png"
import { Avatar } from "@mui/material";

function Kirk() {
    return (
      <div>
          <Card>
          <Card.Header>Kirk</Card.Header>
          <Card.Body>
            <Avatar
              alt="Kirk"
              src={Placeholder}
              sx={{ width: 150, height: 150 }}
              className="avatar-card"
            />
            <Card.Title>Short Headline</Card.Title>
            <Card.Text>
              Supporting Text here
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
  
  export default Kirk