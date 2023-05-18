import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Grid, Box, Paper, styled } from "@mui/material";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Passport({ nextStep }) {
  const [inputVal, setInputVal] = useState({
    passportNumber: "",
    userName: "",
    dob: "",
    birthPlace: "",
    issuePlace: "",
    nationality: "",
    doi: "",
    doe: "",
  });

  let {
    passportNumber,
    userName,
    dob,
    birthPlace,
    issuePlace,
    nationality,
    doi,
    doe,
  } = inputVal;

  const handleChange = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });
  };

  const Continue = (e) => {
    e.preventDefault();

    axios
      .post("https://642141a734d6cd4ebd6e8cdc.mockapi.io/passport", inputVal)
      .then(() =>
        setInputVal({
          passportNumber: "",
          userName: "",
          dob: "",
          birthPlace: "",
          issuePlace: "",
          nationality: "",
          doi: "",
          doe: "",
        })
      );

    nextStep();
  };

  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="mt-3">
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Item>
              <h5>ADD PASSPORT DETAILS</h5>
              <Form className="mt-5" autoComplete="off" onSubmit={Continue}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="d-flex flex-row">
                      Passport Number
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Passport Number"
                      name="passportNumber"
                      value={passportNumber}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className="d-flex flex-row">Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Full Name"
                      name="userName"
                      value={userName}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Grid item xs={12} md={6}>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label className="d-flex flex-row">
                        Date Of Birth
                      </Form.Label>
                      <Form.Control
                        type="date"
                        name="dob"
                        value={dob}
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </Form.Group>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label className="d-flex flex-row">
                        Place Of Birth
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Place Of Birth"
                        name="birthPlace"
                        value={birthPlace}
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </Form.Group>
                  </Grid>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="d-flex flex-row">
                      Place Of Issue
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Place Of Issue"
                      name="issuePlace"
                      value={issuePlace}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label className="d-flex flex-row">
                      Nationality
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nationality"
                      name="nationality"
                      value={nationality}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="d-flex flex-row">
                      Date Of Issue
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="doi"
                      value={doi}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label className="d-flex flex-row">
                      Date Of Expire
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="doe"
                      value={doe}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </Form.Group>
                </Row>
                <Button variant="primary" type="submit" className="mt-2">
                  Next
                </Button>
              </Form>
            </Item>
          </Grid>

          <Grid item xs={12} md={5}>
            <Item>
              <div className="container">
                <input
                  type="file"
                  className="form-control"
                  onChange={onFileChange}
                  accept=".pdf"
                  required
                />

                {file && (
                  <iframe
                    title="pdfPreview"
                    src={URL.createObjectURL(file)}
                    width="100%"
                    height="500"
                  />
                )}
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
