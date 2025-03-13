import React from "react";
import Header from "./Header";

const  Navbar = () =>  {
  const className = "fixed-navbar animated fadeInDown active";

  return (
    <div className={className}>
        <Header />
    </div>
  ); 
}

export default Navbar;