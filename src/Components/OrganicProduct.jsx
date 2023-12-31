import {
  Box,
  Flex,
  Heading,
  ListItem,
  UnorderedList,
  Button,
  Stack,
  Grid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import OrganicProductCard from "./OrganicProductCard";

const OrganicProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Flex
        // border={"1px solid black"}
        alignItems="center"
        justifyContent="space-around"
        height={{ base: "320px", lg: "200px" }}
        flexDir={{ lg: "row", base: "column" }}
      >
        <Box
          // border="1px solid black"
          width={{ lg: "16%", base: "50%" }}
        >
          <Heading color="#45595b">Our Organic Products</Heading>
        </Box>

        <Flex
          // border="1px solid black"
          justifyContent="space-evenly"
          alignItems="center"
          width="50%"
          height={{ base: "300px", lg: "50px" }}
          // flexWrap="wrap"
        >
          <UnorderedList
            listStyleType="none"
            display="flex"
            flexDir="row"
            justifyContent="space-around"
            flexWrap="wrap"
          >
            <Stack
              spacing={{ base: "2", lg: "4" }}
              flexDir={{ base: "column", lg: "row" }}
            >
              <Button
                backgroundColor="#ffb524"
                borderRadius="13px"
                size={{ base: "sm", lg: "lg", md: "md" }}
                onClick={() => handleCategoryClick("All Products")}
              >
                <ListItem>All Products</ListItem>
              </Button>
              <Button
                borderRadius="13px"
                size={{ base: "sm", lg: "lg", md: "md" }}
                onClick={() => handleCategoryClick("Vegetables")}
              >
                <ListItem>Vegetables</ListItem>
              </Button>
              <Button
                borderRadius="13px"
                size={{ base: "sm", lg: "lg", md: "md" }}
                onClick={() => handleCategoryClick("Fruite")}
              >
                <ListItem>Fruit</ListItem>
              </Button>
              <Button
                borderRadius="13px"
                size={{ base: "sm", lg: "lg", md: "md" }}
                onClick={() => handleCategoryClick("Bread")}
              >
                <ListItem>Bread</ListItem>
              </Button>
              <Button
                borderRadius="13px"
                size={{ base: "sm", lg: "lg", md: "md" }}
                onClick={() => handleCategoryClick("Meat")}
              >
                <ListItem>Meat</ListItem>
              </Button>
            </Stack>
          </UnorderedList>
        </Flex>
      </Flex>
      <OrganicProductCard selectedCategory={selectedCategory} />
    </>
  );
};

export default OrganicProduct;
