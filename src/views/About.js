import React from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

const About = () => {
  return (
    <div>
      <Row>
        <Col xs="12" md="12" sm="12">
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              About
            </CardTitle>
            <CardBody className="">
              <div>
                <h1>About Us</h1>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;
