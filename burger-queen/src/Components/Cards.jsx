//traemos  la informacion correspondiente a nuestro menu mediante el 
//SmokeContext (menu y carrito//
//tambien realizamos el formateo de los numeros con el helper formatNumber  $$//
import React from "react";
import { useContext } from "react";
import SmokeContext from "../Context/Context";
import { formatNumber } from "../Helper";
import './card.css';


const Card = () => {
  const { menus, addToCart } = useContext(SmokeContext);

// ahora extraemos la informacion del listado de los productos  con el menu.map
//utilizamos la key menu.id para desglosar la informacion
//posteriormente posicionamos en la carta la imagen,nombre, ingredientes y precio 

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

            <h2 className="text-center text-whiter pb-3">
              Precio: ${formatNumber(menu.price)}
            </h2>
            <div className="d-flex justify-content-around mb-4">
              <button
                className="btn btn-danger"
                onClick={() => addToCart(menu)}
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
