import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../Assets/img/logo.jpeg";
import { traeData } from "../Firabase/Firestore.js";

//hasta aqui se ve el pedido confirmado pero solo en consola, se debe trabajar para mostrarlo
//en la vista de cocina
const Kitchen = () => {
  const [newOrder, setnewOrder] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await traeData();
      console.log(data);
      setnewOrder(data);
    }
    getData();
  }, []);
  return (
    <>
      <Container>
        <img className="logoCocina" src={logo} alt="" />{" "}
        <div className="pt-4"></div>
        <div className="carrito p-5">
          <div className="detalles bg-light w-75 m-auto p-5">
            <h5>Detalles del pedido:</h5>

            <div className="p3 bg-white">
              {newOrder.map((order, index) => (
                <div>
                  <h6>Orden {index + 1}</h6>
                  <table>
                    {order.carrito.map((item) => (
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </table>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Kitchen;
