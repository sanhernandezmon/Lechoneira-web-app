// components/DayCounter.tsx
import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { Colors } from "../consts/colors";

const weddingDate = new Date("2025-05-24T00:00:00-05:00"); // Replace with your wedding date

const DayCounter = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const updateDaysLeft = () => {
      const now = new Date();
      const timeDifference = weddingDate.getTime() - now.getTime();
      const days = Math.ceil(timeDifference / (1000 * 3600 * 24));
      setDaysLeft(days);
    };
    updateDaysLeft();
    const interval = setInterval(updateDaysLeft, 1000 * 3600 * 24); // Update every day
    return () => clearInterval(interval);
  }, []);

  return (
    <Box textAlign="center" p={5} bg={Colors.PINK_LIGHT}>
      <Text fontSize="2xl" color={Colors.BLUE_LIGHT}>
        Cuenta regresiva
      </Text>
      <Text fontSize="4xl" color={Colors.BLUE_LIGHT} fontWeight="bold">
        {daysLeft}
      </Text>
    </Box>
  );
};

export default DayCounter;
