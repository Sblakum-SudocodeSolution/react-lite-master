import { Card, CardBody, CardTitle } from "reactstrap";

const Dashboard = () => {
  return (
    <>
      <div>
        <Card>
          <CardTitle tag="h5" className="border-bottom p-3 mb-0">
            Dashboard
          </CardTitle>
          <CardBody className="">
            <div className="mt-3">
              <h6>Welcome To Admin Panel</h6>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
