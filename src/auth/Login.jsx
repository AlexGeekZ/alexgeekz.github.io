import React, { useEffect } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUiContext } from "../context";
import useForm from "../hooks/useForm";
import useLogin from "../hooks/useLogin";
import routes from "../routes/routes";
import logo from "../assets/logo/logo3.png";
import { google } from "../assets/socialMedia";
import { colors } from "../sass/Colors";

export const Login = () => {
  const { login, googleLogin } = useLogin();
  const navigate = useNavigate();
  const { active } = useUiContext();
  const { handleInputChange, email, password } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  useEffect(() => {
    if (active) {
      navigate("/");
    }
  }, []);

  const handleGoogleLogin = () => {
    googleLogin();
  };

  return (
    <Container>
      <Row>
        <Col lg={6} xs={12} className="my-5">
          <Image src={logo} fluid width={700} />
        </Col>
        <Col lg={6} xs={12} className="rowLogin">
          <h1 className="titleLogin">Inicia Sesión</h1>
          <Form className="justify-content-center text-center" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color: colors.light, fontWeight: "bolder" }}>
                Dirección de correo electrónico
              </Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ color: colors.light, fontWeight: "bolder" }}>Contraseña</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Link to={routes.register}>
                <Form.Text style={{ color: colors.light }}>Crear una Cuenta</Form.Text>
              </Link>
            </Form.Group>
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </Form>
          <Row className="justify-content-center text-center mt-5">
            <Col lg={6} xs={12}>
              <Image fluid width={250} src={google} />
            </Col>
            <Col lg={6} xs={12} className="my-4">
              <Button variant="secondary" onClick={handleGoogleLogin}>
                Ingresa con Google
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
