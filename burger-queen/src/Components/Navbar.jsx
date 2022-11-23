// creamos la barra de navegacion con react-bootstrap
//para esto debemos traer el dist (linea 12)
//extraemos el componente NavLink para realizar la navegacion mediante las paginas.
//nuevamente utilizamos el helper para dar formato al precio de los productos //


import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import logo from "../Assets/img/logo.jpeg";
import { useContext } from "react";
import SmokeContext from "../Context/Context";
import { formatNumber } from "../Helper";

//tambien importamos nuestro context para visualizar el carrito de compras con su total

const NavBar = () => {
  const { carrito } = useContext(SmokeContext);
  const total = carrito.reduce(
    (valorAnterior, { count, price }) => valorAnterior + price * count,
    0
  );

  // El Active Class es para iluminar el nombre de la  pagina en la que estamos posicionados//
  //en la barra de navegacion
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");

  return (
    <Navbar fixed="" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          {" "}
          <img className="logo2 mx-1 " src={logo} alt="icono" />{" "}
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className={setActiveClass} end to="/">
            <p className="nav-home mx-3 text-decoration-none">Home</p>
          </NavLink>
          <NavLink className={setActiveClass} end to="/Waiter">
            <p className="nav-home mx-3 text-decoration-none">Menú</p>
          </NavLink>
          <NavLink className={setActiveClass} to="/Cart">
            <p className="nav-Cart">Carrito</p>
          </NavLink>
          <Container>
            {" "}
            <p className="Total"> Total: ${formatNumber(total)}</p>{" "}
          </Container>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;
