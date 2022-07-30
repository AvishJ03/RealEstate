import { Button, HStack, Select } from "@chakra-ui/react";
import { useState } from "react";
import data from "./data";

const Filters = ({ setArr }) => {
  const [address, setAddress] = useState(null);
  const [price, setPrice] = useState(null);
  const [property, setProperty] = useState(null);
  const [beds, setBeds] = useState(null);

  function handleState(e) {
    e.preventDefault();
    setAddress(e.target.value);
  }
  function handlePrice(e) {
    e.preventDefault();
    setPrice(e.target.value);
  }
  function handleProperty(e) {
    e.preventDefault();
    setProperty(e.target.value);
  }
  function handleBeds(e) {
    e.preventDefault();
    setBeds(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    var farr = data.filter(fil);
    console.log(farr);
    setArr(farr);
  }

  function fil(data) {
    if (address != null) {
      var a = data["addressState"] === address;
    } else {
      a = true;
    }
    if (price != null) {
      let ch = price.split("-");
      let n1 = parseInt(ch[0]);
      let n2 = parseInt(ch[1]);
      var b = data["unformattedPrice"] >= n1 && data["unformattedPrice"] < n2;
    } else {
      b = true;
    }
    if (property != null) {
      var c = data["statusText"] === property;
    } else {
      c = true;
    }
    if (beds != null) {
      var d = data["beds"] === parseInt(beds);
    } else {
      d = true;
    }
    return a && b && c && d;
  }

  return (
    <HStack justify="center" bg="white" spacing={20} p={5} borderRadius="xl">
      <Select
        color="#7165EE"
        w="container.xs"
        placeholder="Select State"
        defaultValue={null}
        onChange={handleState}
      >
        <option value="MD">MD</option>
        <option value="AR">AR</option>
        <option value="FL">FL</option>
        <option value="MS">MS</option>
        <option value="IN">IN</option>
      </Select>
      <Select
        color="#7165EE"
        w="container.xs"
        placeholder="Price"
        onChange={handlePrice}
        defaultValue={null}
      >
        <option value="450-1500">$500 - $1500</option>
        <option value="1500-2400">$1500 - $2400</option>
        <option value="2400-3500">$2400 - $3500</option>
        <option value="3500-9000">$3500 - $9000</option>
      </Select>
      <Select
        color="#7165EE"
        w="container.xs"
        placeholder="Property Type"
        onChange={handleProperty}
        defaultValue={null}
      >
        <option value="House for sale">Houses</option>
        <option value="Townhouse for sale">Townhouse</option>
        <option value="Lot / Land for sale">Lot / Land</option>
        <option value="Condo for sale">Condo</option>
      </Select>
      <Select
        color="#7165EE"
        w="container.xs"
        defaultValue={null}
        placeholder="Beds"
        onChange={handleBeds}
      >
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </Select>
      <Button bg="#7165EE" color="white" onClick={handleSubmit}>
        Search
      </Button>
    </HStack>
  );
};

export default Filters;
