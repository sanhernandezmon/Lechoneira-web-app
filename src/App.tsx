import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import "./css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DashBoardPage from "./pages/DashboardPage";
import InventaryPage from "./pages/InventaryPage";
import SellsPage from "./pages/SellsPage";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoardPage />} />
          <Route path="/Lechoneira-web-app" element={<Navigate to="/" />} />
          <Route path="/inventario" element={<InventaryPage />} />
          <Route path="/ventas" element={<SellsPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
