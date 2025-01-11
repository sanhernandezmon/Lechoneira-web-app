/** @jsxImportSource @emotion/react */
import React from "react";
import Gallery from "./components/Gallery";
import Topbar from "./components/Topbar";
import { ChakraProvider } from "@chakra-ui/react";
import DressingCode from "./components/DressingCode/index";
import DayCounter from "./components/DayCounter";
import Breadcrums from "./components/breadcrumbs";
import Rsvp from "./components/rsvp";
import Navbar from "./components/Navbar";
import Couple from "./components/couple";
import Story from "./components/story";
import Welcome from './components/welcome-area';
import './App.css';
import './css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroMain from "./components/HeroMain";
import Footer from "./components/footer";
import Saveday from "./components/countdown";


const App = () => {
  return (
    <ChakraProvider>
      <div>
      <h1>Navegador</h1>
        <Navbar />
        <h1>Carrusel</h1>
        <HeroMain />
        <h1>Saveday</h1>
        <Saveday />
        <h1>Pareja</h1>
        <Couple />   
        <h1>Story</h1>
        <Story />   
        <h1>Welcome</h1>
        <Welcome welcome={'s2'}/>
        <h1>RSVP</h1>
        <Rsvp/>      
        <h1>Pie de página</h1>
        <Footer />           

      </div>
    </ChakraProvider>
  );
};

export default App;
