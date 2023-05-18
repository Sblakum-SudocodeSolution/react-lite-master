import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import {
  Grid,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import Model from "./Model";

const WorkQueue = () => {
  const [userData, setUserData] = useState([]);
  const [modalShow, setModalShow] = useState({
    show: false,
    selectedItemId: 0,
  });

  useEffect(() => {
    getApiData();
    getAPIListData();
  }, []);

  const getApiData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => setUserData(res.data));
  };

  const apiUrl = "https://alecapi.sudocodesolutions.com/api/Activity/status?statusId=3";
  // const apiUrl = "https://alecapi.sudocodesolutions.com/api/Activity/list";
  const authToken = localStorage.getItem("loggedinToken");

  const getAPIListData = (e) => {
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Data : ", response);
      })
      .catch((error) => {
        console.log("Err : ", error);
      });
  };

  return (
    <div>
      <Row>
        <Col xs="12" md="12" sm="12">
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Work Queue
            </CardTitle>
            <CardBody>
              <Grid item xs={12}>
                <TableContainer component={Paper}>
                  <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>UserName</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {userData.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.id}</TableCell>
                          <TableCell>{item.username}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>
                            <Button
                              variant="outlined"
                              onClick={() =>
                                setModalShow({
                                  show: true,
                                  selectedItemId: item.id,
                                })
                              }
                            >
                              Action
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                      <Model
                        show={modalShow.show}
                        selectedItemId={modalShow.selectedItemId}
                        onHide={() =>
                          setModalShow({
                            show: false,
                            selectedItemId: 0,
                          })
                        }
                      />
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WorkQueue;
