import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";

const Card = ({ data }) => {
  const property = {
    imageUrl: data["imgSrc"],
    imageAlt: "Rear view of modern home with pool",
    beds: data["beds"],
    baths: data["baths"],
    area: data["area"],
    title: data["title"],
    formattedPrice: data["unformattedPrice"],
    address: data["address"],
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="xl" overflow="hidden" mx="10">
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
