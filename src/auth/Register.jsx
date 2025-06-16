import { useEffect, useRef } from "react";
import { Button, Col, Container, Image, Row, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUiContext } from "../context/uiContext";
import useForm from "../hooks/useForm";
import useRegister from "../hooks/useRegister";
import logo from "../assets/logo/logo3.png";
import { Breakpoint } from "../components/Breakpoint";

export const Register = () => {
  const { values, name, email, password, handleInputChange, handleAddImage } = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { emailReg } = useRegister();
  const { loading, active } = useUiContext();
  const navigate = useNavigate();
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const path = `users/${email}/profile/${name}`;
    const nameDb = "users";
    emailReg(values, path, nameDb);
  };

  const handleClckImg = () => {
    ref.current.click();
  };

  useEffect(() => {
    if (active) {
      navigate("/");
    }
  }, []);

  return (
    <Container fluid>
      <Row className="my-1">
        <Col lg={6} xs={12}>
          <Breakpoint at="lg">
            <Button className="mt-3" variant="secondary" onClick={() => navigate("/login")}>
              Regresar
            </Button>
          </Breakpoint>
          <Breakpoint at="xs">
            <Button className="mt-5" variant="secondary" onClick={() => navigate("/login")}>
              Regresar
            </Button>
          </Breakpoint>
        </Col>
        <Col lg={6} xs={12}>
          <p className="text-light" style={{ fontWeight: "bolder", fontSize: 40, marginBottom: 5 }}>
            Registro Perfil de usuarios
          </p>
        </Col>
      </Row>
      <Row className="my-1">
        <Container>
          <Form className="justify-content-center text-center" onSubmit={handleSubmit}>
            <Row>
              <Col lg={6} xs={12} className="my-1">
                <Image src={logo} fluid width={700} />
              </Col>
              <Col lg={6} xs={12} className="px-5">
                <Form.Group className="mb-1">
                  <Form.Label className="text-primary" style={{ fontWeight: "bolder" }}>
                    Nombre
                  </Form.Label>
                  <Form.Control
                    name="name"
                    type="name"
                    placeholder="Ingresa tu nombre"
                    value={name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label className="text-primary" style={{ fontWeight: "bolder" }}>
                    Correo electrónico
                  </Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    value={email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label className="text-primary" style={{ fontWeight: "bolder" }}>
                    Contraseña
                  </Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group id="boxUpload" className="mb-3">
                  <Button style={{ color: "white", marginTop: 33 }} onClick={handleClckImg}>
                    Elige una foto de perfil
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
                <Image
                  className="imgProfile"
                  src={values.url}
                  width={100}
                  height={100}
                  style={{ borderRadius: "50%" }}
                />
                {!loading ? (
                  <Button type="submit" style={{ color: "white", marginTop: 20 }}>
                    Enviar
                  </Button>
                ) : (
                  <Spinner animation="border" variant="primary" />
                )}
              </Col>
            </Row>
          </Form>
        </Container>
      </Row>
    </Container>
  );
};
