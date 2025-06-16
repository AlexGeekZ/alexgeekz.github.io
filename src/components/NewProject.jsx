import { useState, useRef } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useNewProject, useForm } from "../hooks";
import { Breakpoint } from "./Breakpoint";

export const NewProject = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();
  const { newProject } = useNewProject();
  const { handleInputChange, handleSelect, handleAddImage, values } = useForm({
    title: "",
    body: "",
    link: "",
    nickname: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const path = `Projects/${values.title}`;
    const nameDb = "projects";
    await newProject(values, path, nameDb, values.nickname);
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
          <Button onClick={handleShow}>Add another project</Button>
        </Breakpoint>
        <Breakpoint at="xs">
          <Button onClick={handleShow} className="mt-5">
            Add another project
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
                    Project Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Add a title"
                    name="title"
                    maxLength={30}
                    minLength={4}
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
                    Company
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="shadow "
                    style={{ width: "100%" }}
                    onChange={(e) => handleSelect(e, "company")}
                  >
                    <option value=""></option>
                    <option value="AlexGeekDev">AlexGeekDev</option>
                    <option value="Quimera solutions">Quimera solutions</option>
                    <option value="Janz">Janz</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="text-light" style={{ fontWeight: "bolder" }}>
                    Nickname
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="add a nickname"
                    name="nickname"
                    maxLength={100}
                    minLength={4}
                    className="form-control mb-3"
                    value={values.nickname}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group id="boxUpload" className="mb-3">
                  <Form.Label className="text-light" style={{ fontWeight: "bolder" }}>
                    Project image
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
            <Button type="submit">Send Project</Button>
          </Form>
        )}
      </Row>
    </Container>
  );
};
