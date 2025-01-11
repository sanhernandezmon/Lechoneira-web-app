import { ChakraProvider } from "@chakra-ui/react";
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
        <Navbar />
        <HeroMain />
        <Saveday />
        <Couple />   
        <Story />   
        <Welcome welcome={'s2'}/>
        <Footer />           

      </div>
    </ChakraProvider>
  );
};

export default App;
