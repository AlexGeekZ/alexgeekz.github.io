import { Col, Container, Row, Carousel, Image } from "react-bootstrap";
import { alexGeek, apps, bares, dashboard, web } from "../assets/banners";
import {
  boss,
  browser,
  browser1,
  compromiso,
  connection,
  handShake,
  networking1,
  networking,
  server,
  smartPhone,
  smartPhone1,
} from "../assets/alexDev";
import { Breakpoint } from "../components/Breakpoint";

export const AlexDev = () => {
  return (
    <Container>
      <Row className="justify-content-center text-center my-5">
        <Col className="mt-3">
          <Carousel indicators="false">
            <Carousel.Item>
              <img className="d-block w-100 my-4" src={alexGeek} alt="Ayudamos a la producci&oacute;n" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={apps} alt="Compartir colecci&oacute;n" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={web} alt="Tu colecci&oacute;n real" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={dashboard} alt="Túacture; eres el Rock star" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={bares} alt="Túacture; eres el Rock star" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <hr />
      <Row className="justify-content-center text-center my-3">
        <Col>
          <h2>Software Development | Analysis, design and programming</h2>{" "}
        </Col>
      </Row>
      <hr />
      <Row className="justify-content-center text-center mx-2 my-5">
        <Col xs={12} lg={3}>
          <Image className="mb-3" src={browser1} width={200} height={200} />
          <h3>Desarrollo a Medida</h3>
          <p>Sistemas 100% personalizados, teniendo como prioridad sus objetivos</p>
        </Col>
        <Col xs={12} lg={3}>
          <Image className="mb-3" src={browser} width={200} height={200} />
          <h3>Sistemas WEB</h3>
          <p>Programación de plataformas y aplicaciones web autoadministrables, estables y escalables</p>
        </Col>
        <Col xs={12} lg={3}>
          <Image className="mb-3" src={smartPhone} width={200} height={200} />
          <h3>Mobile APPs</h3>
          <p>Diseño, Programación y Publicación, para AppStore y PlayStore.</p>
        </Col>
      </Row>
      <hr />
      <Row className="my-5 mx-5">
        <Col lg={1}>
          <Image src={networking} width={50} height={50} />
        </Col>
        <Col lg={3}>
          <h4>Sistemas 100% a medida</h4>
          <p className="text-justify">
            A partir del análisis funcional de las necesidades de su empresa, diseñamos sistemas que aumentan la
            eficiencia de la gestión diaria y simplifican su control.
          </p>
        </Col>
        <Col lg={1}>
          <Image src={networking1} width={50} height={50} />
        </Col>
        <Col lg={3}>
          <h4>Metodologías ágiles</h4>
          <p className="text-justify">
            Aplicamos métodos de ingeniería del software basados en el desarrollo iterativo e incremental, donde los
            requisitos y soluciones evolucionan con el tiempo según la necesidad del proyecto.
          </p>
        </Col>
        <Col lg={1}>
          <Image src={connection} width={50} height={50} style={{ borderRadius: 50 }} />
        </Col>
        <Col lg={3}>
          <h4>Modulos Independientes o integrados</h4>
          <p className="text-justify">
            ERP y CRM a medida, Gestión de Producción y Stock, Gestión de Ventas, Gestión de Cobranzas, Gestión de
            Compras, Gestión de RRHH, etc
          </p>
        </Col>
      </Row>

      <Row className="my-5 mx-5">
        <Col lg={1}>
          <Image src={server} width={50} height={50} />
        </Col>
        <Col lg={3}>
          <h4>Cloud Servers</h4>
          <p className="text-justify">
            Implementación, configuración y mantenimiento de servidores virtuales dedicados, especialmente preparados
            para sus sistemas.
          </p>
        </Col>
        <Col lg={1}>
          <Image src={boss} width={50} height={50} />
        </Col>
        <Col lg={3}>
          <h4>Sistemas para Pymes</h4>
          <p className="text-justify">
            No es necesario ser una empresa grande para tener un sistema a medida. Creamos soluciones de software
            efectivas y económicas para PyMEs.
          </p>
        </Col>
        <Col lg={1}>
          <Image src={smartPhone1} width={50} height={50} style={{ borderRadius: 50 }} />
        </Col>
        <Col lg={3}>
          <h4>APPs Mobile Integradas APPs Mobile Integradas</h4>
          <p className="text-justify">
            Integramos soluciones Mobile para Android e iOS a su sistema. Controle su empresa y reciba notificaciones en
            todo momento / lugar.
          </p>
        </Col>
      </Row>
      <hr />
      <Row className="text-center mx-5 my-5">
        <Breakpoint at="lg">
          <Col>
            <h4>
              Sistemas de Gestión - ERP - CRM - Facturación con AFIP - Control de Stock - Gestión de producción con
              seguimiento de materias primas, insumos, mercadería - Administración de proyectos - Plataformas de
              E-Learning - Gestión de Alumnado - Sistema de Tracking de Envíos - Administración de Recursos Humanos
              (RRHH) - Seguimiento y control de tareas de los empleados - Generación y comparación de informes en
              gráficos 3d - Gestión de sucursales - Administración de Inmuebles - Pago a proveedores - Automatización
              del Seguimiento de Cobranzas - Envío de Alertas según umbrales determinados - Intranet - Red social
              interna - Consolidación bancaria automática - Reportes personalizados y automáticos
            </h4>
          </Col>
        </Breakpoint>
        <Breakpoint at="xs">
          <Col>
            <h6 className="text-justify">
              Sistemas de Gestión - ERP - CRM - Facturación con AFIP - Control de Stock - Gestión de producción con
              seguimiento de materias primas, insumos, mercadería - Administración de proyectos - Plataformas de
              E-Learning - Gestión de Alumnado - Sistema de Tracking de Envíos - Administración de Recursos Humanos
              (RRHH) - Seguimiento y control de tareas de los empleados - Generación y comparación de informes en
              gráficos 3d - Gestión de sucursales - Administración de Inmuebles - Pago a proveedores - Automatización
              del Seguimiento de Cobranzas - Envío de Alertas según umbrales determinados - Intranet - Red social
              interna - Consolidación bancaria automática - Reportes personalizados y automáticos
            </h6>
          </Col>
        </Breakpoint>
      </Row>
    </Container>
  );
};
