import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";
import data from "./data.js";

const Card = () => {
  const property = {
    imageUrl: data[0]["imgSrc"],
    imageAlt: "Rear view of modern home with pool",
    beds: data[0]["beds"],
    baths: data[0]["baths"],
    area: data[0]["area"],
    title: data[0]["title"],
    formattedPrice: data[0]["unformattedPrice"],
    address: data[0]["address"],
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="xl" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths &bull;{" "}
            {property.area} sq. ft.
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box fontWeight="semibold">
          ${property.formattedPrice}
          <Box as="span" color="gray.500" fontSize="sm">
            / month
          </Box>
        </Box>
        <Box mt="1" as="h4" lineHeight="tight" noOfLines={1}>
          {property.address}
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
