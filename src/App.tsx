/** @jsxImportSource @emotion/react */
import React from "react";
import Gallery from "./components/Gallery";
import Topbar from "./components/Topbar";
import { ChakraProvider } from "@chakra-ui/react";
import DressingCode from "./components/DressingCode";
import DayCounter from "./components/DayCounter";
import Navbar from "./components/Navbar";
import './App.css';
import './css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <ChakraProvider>
      <div>
        <Navbar />
      </div>
    </ChakraProvider>
  );
};

export default App;
