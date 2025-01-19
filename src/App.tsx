import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Couple from "./components/couple";
import Story from "./components/story";
import Welcome from "./components/welcome-area";
import "./App.css";
import "./css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";
import Saveday from "./components/countdown";
import Gallery from "./components/gallery";
import People from "./components/people";

const App = () => {
  return (
    <ChakraProvider>
      <div>
        <Navbar />
        {/*<HeroMain />*/}
        <Saveday />
        <Couple />
        <Story />
        <Gallery />
        <People />
        <Welcome welcome={"s2"} />
        <Footer />
      </div>
    </ChakraProvider>
  );
};

export default App;
