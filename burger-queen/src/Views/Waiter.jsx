// importamos  el componente Card y Navbar para dar forma a la vista Waiter (garzon)//

import React from "react";
import Card from "../Components/Cards";
import NavBar from "../Components/Navbar";

const Waiter = () => {
  return (
    <>
    <NavBar/> 
      <div className="container my-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
<Card/>
</div>
      </div>
    </>
  );
};

export default Waiter;
