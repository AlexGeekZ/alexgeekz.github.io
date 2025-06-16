import { useState, useRef } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useUserContext } from "../context";
import { useNewAward, useForm } from "../hooks";
import { Breakpoint } from "./Breakpoint";

export const NewAward = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();
  const { newAward } = useNewAward();
  const { userDb } = useUserContext();
  const { handleInputChange, handleSelect, handleAddImage, values } = useForm({
    title: "",
    body: "",
    link: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const path = `Award/${userDb.uid}/${values.title}`;
    const nameDb = "awards";
    await newAward(values, path, nameDb);
    setShow(false);
  };

  const handleShow = () => {
    setShow(!show);
  };

  const handleClckImg = () => {
    ref.current.click();
  };

  return (
    <Container>
      <Row>
        <Breakpoint at="lg">
          <Button onClick={handleShow}>Add another award</Button>
        </Breakpoint>
        <Breakpoint at="xs">
          <Button onClick={handleShow} className="mt-5">
            Add another award
          </Button>
        </Breakpoint>
      </Row>
      <Row>
        {show && (
          <Form className="justify-content-center text-center" onSubmit={handleSubmit}>
            <Row className="justify-content-center p-5">
              <Col lg={6}>
                <Form.Group>
                  <Form.Label className="text-light" style={{ fontWeight: "bolder" }}>
                    Award Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="add an award name"
                    name="title"
                    maxLength={30}
                    minLength={5}
                    className="form-control mb-1"
                    value={values.title}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="text-light" style={{ fontWeight: "bolder" }}>
                    Description
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="add a description"
                    name="body"
                    maxLength={1000}
                    minLength={30}
                    className="form-control mb-2"
                    value={values.body}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="text-light" style={{ fontWeight: "bolder" }}>
                    Link
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="add a link"
                    name="link"
                    maxLength={100}
                    minLength={8}
                    className="form-control mb-3"
                    value={values.link}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group controlId="custom-select">
                  <Form.Label className="text-light" style={{ fontWeight: "bolder" }}>
                    Provider
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="shadow "
                    style={{ width: "100%" }}
                    onChange={(e) => handleSelect(e, "provider")}
                  >
                    <option value="Adobe">Adobe</option>
                    <option value="IC3">IC3</option>
                    <option value="Interlingua">Interlingua</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Microsoft">Microsoft</option>
                    <option value="Platzi">Platzi</option>
                    <option value="SEP">SEP</option>
                    <option value="Udemy">Udemy</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="custom-select">
                  <Form.Label className="text-light" style={{ fontWeight: "bolder" }}>
                    Category
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="shadow mb-2"
                    style={{ width: "100%" }}
                    onChange={(e) => handleSelect(e, "category")}
                  >
                    <option value="Leadership">Leadership</option>
                    <option value="Terminal">Terminal</option>
                    <option value="Cloud">Cloud</option>
                    <option value="Data-Bases">Data-Bases</option>
                    <option value="Back-End">Back-End</option>
                    <option value="Front-End">Front-End</option>
                    <option value="Computing">Computing</option>
                    <option value="Design">Design</option>
                    <option value="Languages">Languages</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group id="boxUpload" className="mb-3">
                  <Form.Label className="text-light" style={{ fontWeight: "bolder" }}>
                    Award Image
                  </Form.Label>
                  <Button style={{ color: "white" }} onClick={handleClckImg}>
                    Choose an image
                  </Button>
                  <Form.Control
                    id="imageUpload"
                    name="photo"
                    type="file"
                    placeholder="photo"
                    onChange={handleAddImage}
                    ref={ref}
                    style={{ display: "none" }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Image
              className="imgProfile mb-5"
              src={values.url}
              width={300}
              height={200}
              style={{ borderRadius: "5%" }}
            />
            <Button type="submit">Send Award</Button>
          </Form>
        )}
      </Row>
    </Container>
  );
};
