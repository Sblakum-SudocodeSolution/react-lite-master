import { Card, CardBody, CardGroup, Row, Col } from "reactstrap";
import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

const Profile = () => {
  const data = JSON.parse(localStorage.getItem("Admin_Signup_Data"));
  return (
    <div>
      <Row>
        <h5 className="mb-3 mt-3">Profile</h5>
        <Col>
          <CardGroup>
            <Card>
              <CardBody>
                <Row className="mt-2">
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {data.userName.charAt(0).toUpperCase()}
                      </Avatar>
                    }
                    title=<h4>{data.userName}</h4>
                  />
                  <div className="card-body">
                    <p className="text-justify mt-2">
                      <strong className="mb-2">
                        <PersonIcon />{" "}
                      </strong>
                      {data.firstName} {data.lastName}
                    </p>

                    <p className="text-justify mt-4">
                      <strong className="mb-2">
                        <EmailIcon />{" "}
                      </strong>
                      {data.userEmail}
                    </p>

                    <p className="text-justify mt-4">
                      <strong className="mb-2">
                        <KeyIcon />{" "}
                      </strong>
                      {data.userPassword}
                    </p>

                    <p className="text-justify mt-4">
                      <strong className="mb-2">
                        <HomeWorkIcon />{" "}
                      </strong>
                      {data.companyName}
                    </p>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
