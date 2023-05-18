import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardBody, CardTitle, Table } from "reactstrap";

const ManageUser = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => setUserData(res.data));
  };
  return (
    <>
      <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Manage User</CardTitle>

            <Table
              className="no-wrap mt-3 align-middle text-center"
              responsive
              borderless
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>UserName</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((row) => (
                  <tr key={row.id} className="border-top">
                    <td>{row.id}</td>
                    <td>{row.username}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>Online</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default ManageUser;
