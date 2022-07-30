import { Box, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";
import data from "./data";
import Filters from "./Filters";
import Properties from "./Properties";

function App() {
  const [arr, setArr] = useState([]);

  return (
    <VStack className="App" spacing={10}>
      <Heading>Seacrh properties to rent</Heading>
      <Filters setArr={setArr} />
      <Properties arr={arr[0] ? arr : data} />
    </VStack>
  );
}

export default App;
