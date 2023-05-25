import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";

export default function Model(props) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (props.selectedItemId > 0)
      axios
        .get(
          `https://alecapi.sudocodesolutions.com/api/Activity/status/${props.selectedItemId}`
        )
        .then((res) => {
          setUserData(res.data);
        });
  }, [props.selectedItemId]);
    
  const rejectUser = async () => {
    await axios.delete(
      `https://alecapi.sudocodesolutions.com/api/Activity/status/${props.selectedItemId}`
    );
    props.onHide();
    console.log("Reject");
  };

  const accessUser = async () => {
    console.log("Access");
    props.onHide();
  };
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            User Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <b>Id :</b> {userData.id}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>UserName :</b> {userData.userName}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>First Name :</b> {userData.firstName}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Last Name :</b> {userData.lastName}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Compony Name :</b> {userData.companyName}
            </ListGroup.Item>
            <ListGroup.Item className="text-end">
              <Button variant="outline-danger" onClick={() => rejectUser()}>
                Reject
              </Button>
              <Button
                variant="outline-success"
                className="m-2"
                onClick={() => accessUser()}
              >
                Allow
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
}
