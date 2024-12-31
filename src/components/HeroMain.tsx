import {Carousel} from "nuka-carousel";
import { Image } from "@chakra-ui/react"

const images = [
    `${process.env.PUBLIC_URL}/img1.jpg`,
    `${process.env.PUBLIC_URL}/img2.jpg`
  ];

const  HeroMain = () =>  { 
    return (
      <Carousel>
        <Image src={images[0]}  width="400" height="400" />
        <Image src={images[1]}  width="400" height="400" />
      </Carousel>
    );
}

export default HeroMain;
