import { Heading } from "@chakra-ui/react";
// import { useState } from "react";
import Card from "./Card";
import Filters from "./Filters";

function App() {
  return (
    <div className="App">
      <Heading>Seacrh properties to rent</Heading>
      <Filters />
      <Card />
    </div>
  );
}

export default App;
