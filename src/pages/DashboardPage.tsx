import React from "react";
import Navbar from "../components/Navbar";
import Logo from '../images/logo.png';

const DashBoardPage = () => {
  return (
    <div>
      <Navbar />
      <img src={Logo} alt="La plazuela" ></img>
    </div>
  );
}

export default DashBoardPage;