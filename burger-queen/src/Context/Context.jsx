import { createContext, useState, useEffect } from "react"; //cerebro de la app, tiene todas las formulas que va ocupar otros componentes

//  context creation se crea la contextualizacion de datos

const SmokeContext = createContext();

// Data Provider constante que va a proveer los datos a los componentes
//Las Children son una forma de composición de componentes, donde, valga la redundancia, podemos pasar componentes a través de propiedades.
const SmokeProvider = ({ children }) => {
    const [menus, setMenu] = useState([]);//useState se guardan estados 


    //Get Menu, trae la informacion del menu que esta en el json
//useEffect crea un estado al componente
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
                    throw new Error('Something went wrong');
                }

            } catch (error) {
                // console.log("error en la solicitud", error)
                alert('No se puede mostrar la informacion solicitada')
            }
        };

        getMenu();
    }, []);

   

    return (
        <SmokeContext.Provider
            value={{ menus }}
        >
            {children}
        </SmokeContext.Provider>
    );
};

// Export Provider
export { SmokeProvider };

// Export Context
export default SmokeContext;