import React from "react";
// import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import SmokeContext from "../Context/Context";

const Card = () => {
  const { menus } = useContext(SmokeContext);

  // const navigate = useNavigate();

  return (
    <>
      {menus.map((menu) => (
        <div key={menu.id} className="col">
          <div className="card">
            <img className="card-img-top" src={menu.img} alt="" />
            <div className="card-body">
              <h4 className="card-title text-capitalize">{menu.name}</h4>
              <hr />
              <p className="card-text">
                <b>Ingredientes:</b>
              </p>

              <ul>
                {menu.ingredients.map((ingredient, i) => (
                  <li key={i}>🥩 {ingredient}</li>
                ))}
              </ul>
            </div>

            <h2 className="text-center text-dark pb-3">
              Precio: ${menu.price}
            </h2>
            <div className="d-flex justify-content-around mb-4">
              <button
                className="btn btn-danger"
              >
                Añadir
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
