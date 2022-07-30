import { Heading, HStack, Select } from "@chakra-ui/react";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Heading>Seacrh properties to rent</Heading>
      <HStack bg="white">
        <Select w="container.xs" placeholder="Select State">
          <option value="MD">MD</option>
          <option value="AR">AR</option>
          <option value="FL">FL</option>
          <option value="MS">MS</option>
          <option value="IN">IN</option>
        </Select>
        <Select w="container.xs" placeholder="Price">
          <option value="MD">MD</option>
          <option value="AR">AR</option>
          <option value="FL">FL</option>
          <option value="MS">MS</option>
          <option value="IN">IN</option>
        </Select>
      </HStack>
      <Card />
    </div>
  );
}

export default App;
