import React from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import Stepper from "../Stepper/Stepper";
const Application = () => {
  return (
    <div>
      <Row>
        <Col xs="12" md="12" sm="12">
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Application
            </CardTitle>
            <CardBody className="">
              <div>
                <Stepper />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Application;
