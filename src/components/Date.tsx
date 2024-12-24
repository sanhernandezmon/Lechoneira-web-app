// components/DayCounter.tsx

import { Grid, GridItem } from "@chakra-ui/react"
import { Image  } from "@chakra-ui/react";

const images = [
  `${process.env.PUBLIC_URL}/vestido1.jpg`,
  `${process.env.PUBLIC_URL}/vestido2.jpg`,
  `${process.env.PUBLIC_URL}/vestido3.jpg`,
  `${process.env.PUBLIC_URL}/vestido4.jpg`,
];


const DateLiz = () => {
  const weddingDate = new Date("2025-05-24T00:00:00-05:00");


  return (

    <Grid
    h="200px"
    templateRows="repeat(2, 1fr)"
    templateColumns="repeat(2, 1fr)"
    gap={4}
  >
    <GridItem>
      <div><Image src={images[0]} /></div>
    </GridItem>
    <GridItem>
    <div><Image src={images[1]} /></div>
    </GridItem>
    <GridItem>
    <div><Image src={images[2]} /></div>
    </GridItem>
    <GridItem>
    <div><Image src={images[3]} /></div>
    </GridItem>
  </Grid>

  );
};

export default DateLiz;
