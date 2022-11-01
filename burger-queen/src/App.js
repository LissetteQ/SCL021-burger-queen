import Home from './Views/Home'; //se importa la vista de home
import {BrowserRouter, Routes, Route} from 'react-router-dom'//se importan los componente que le dan movilidad a la pagina
import { SmokeProvider } from './Context/Context';
import Kitchen from './Views/Kitchen';
import Waiter from './Views/Waiter';


function App() {
  return (
    <>
    <BrowserRouter>
    <SmokeProvider>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Kitchen' element={<Kitchen/>}/>
  <Route path='/Waiter' element={<Waiter/>}/>

</Routes>
</SmokeProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
