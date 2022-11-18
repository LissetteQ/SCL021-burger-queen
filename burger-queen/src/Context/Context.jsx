import { createContext, useState, useEffect } from "react";

//se crea context para reutilizar la info del json y funcionalidades en varios componentes

const SmokeContext = createContext();

// se guarda info en el hook useState

const SmokeProvider = ({ children }) => {
  const [menus, setMenu] = useState([]);
  const [carrito, setCarrito] = useState([]);

  //extrae la data de json mediante fetch y guarda informacion con useEffect

  useEffect(() => {
    const getMenu = async () => {
      try {
        const res = await fetch("/productos.json");
        const menus = await res.json();
        if (menus) {
          setMenu(menus);
        }
        //manejo de errores
        else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        // console.log("error en la solicitud", error)
        alert("No se puede mostrar la informacion solicitada");
      }
    };

    getMenu();
  }, []);

  //Se crea carrito de compras

  const addToCart = ({ id, price, name, img }) => {
    const productoEcontradoIndex = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    if (productoEcontradoIndex >= 0) {
      carrito[productoEcontradoIndex].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  //incrementar Cantidad
  const increment = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };

  //eliminar un producto
  const decrement = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1);
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
  };

  console.log(carrito);
  return (
    <SmokeContext.Provider
      value={{ menus, carrito, setCarrito, addToCart, increment, decrement }}
    >
      {children}
    </SmokeContext.Provider>
  );
};

// Export Provider (permite que los componentes consuman los datos)
export { SmokeProvider };

// Export Context
export default SmokeContext;
