//Aqui se juntan todas las vistas se importa el smokeprovider para que se consuman los datos
//se trabaja con react router dom  para poder nav entre vistas 

import { SmokeProvider } from "./Context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Waiter from "./Views/Waiter";
import Kitchen from "./Views/Kitchen";
// import Login from './Views/Login';
import Cart from "./Views/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <SmokeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/Login" element={<Login />} /> */}
            <Route path="/Waiter" element={<Waiter />} />
            <Route path="/Kitchen" element={<Kitchen />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </SmokeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
