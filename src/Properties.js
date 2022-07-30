import { Grid } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";

const Properties = ({ arr }) => {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={7}>
      {arr
        .filter((data, idx) => idx < 9)
        .map((data, idx) => {
          return <Card key={idx} data={data} />;
        })}
    </Grid>
  );
};

export default Properties;
