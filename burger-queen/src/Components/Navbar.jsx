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

const NavBar = () => {
  const { carrito } = useContext(SmokeContext);
  const total = carrito.reduce(
    (valorAnterior, { count, price }) => valorAnterior + price * count,
    0
  );

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");

  return (
    <Navbar fixed="top" bg="dark" variant="dark">
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
