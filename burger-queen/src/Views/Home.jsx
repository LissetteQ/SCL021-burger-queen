// importamos el logo y especificamos nuestro perfil con botones: Mesero o Cocina//
// los botones se activan con el evento onClick aqui nos redirigen a las paginas
// deseadas gracias//
// a la constante navigate//

import React from "react";
import logo from "../Assets/img/logo.jpeg";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import './home.css'

//navegamos por la pagina sin necesidad de refrescarla
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <img className="logo1" src={logo} alt="" />
      </Container>

      <Container className="boton mb-2">
        <Button variant="primary" size="lg" onClick={() => navigate("/Waiter")}>
          Meseros
        </Button>{" "}
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate("/Kitchen")}
        >
          Cocina
        </Button>
      </Container>
    </>
  );
};

export default Home;
