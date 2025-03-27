import React, { useState, useEffect } from "react";
import { CircularProgress } from "@chakra-ui/react";
import Rental from "../components/Rental";
import axios from "axios";

const DashBoardPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState("");

  const getHealth = async () => {
    try {
      const response = await axios.get("https://project-lecho-neira.onrender.com");
      if (response.status === 200) {
        const tokenResponse = await axios.post(
          "https://project-lecho-neira.onrender.com/generate-token",{},
          {
            headers: {
              "x-apikey": "lechoneira",
            },
          }
        );
        if (tokenResponse.status === 201) {
          tokenResponse.data && setToken(tokenResponse.data.token);
          setIsLoading(false);
        }
      }
    } catch (error) {
      console.error("Error fetching data, retrying in 5 seconds:", error);
      setTimeout(getHealth, 5000);
    }
  };

  useEffect(() => {
    getHealth();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress isIndeterminate color="blue.500" />
        </div>
      ) : (
        <Rental token={token} />
      )}
    </div>
  );
};

export default DashBoardPage;