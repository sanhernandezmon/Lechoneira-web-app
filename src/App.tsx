/** @jsxImportSource @emotion/react */
import React from "react";
import Gallery from "./components/Gallery";
import Topbar from "./components/Topbar";
import { ChakraProvider } from "@chakra-ui/react";
import DressingCode from "./components/DressingCode";
import DayCounter from "./components/DayCounter";

const App = () => {
  return (
    <ChakraProvider>
      <div>
        <Topbar />
        <DayCounter />
        <Gallery />
        <DressingCode />
      </div>
    </ChakraProvider>
  );
};

export default App;
