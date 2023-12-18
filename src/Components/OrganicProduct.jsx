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
import React from "react";

const OrganicProduct = () => {
  return (
    <>
      <Flex
        // border={"1px solid black"}
        alignItems="center"
        justifyContent="space-around"
        height={{ base: "200px", lg: "100px" }}
        flexDir={{ lg: "row", base: "column-reverse" }}
      >
        <Box border="1px solid black" width={{ lg: "16%", base: "50%" }}>
          <Heading color="#45595b">Our Organic Products</Heading>
        </Box>
       
          <Flex
            //   border="1px solid black"
            justifyContent="space-evenly"
            alignItems="center"
            width="50%"
            height="50px"
            flexWrap="wrap"
          >
            <UnorderedList
              listStyleType="none"
              display="flex"
              flexDir="row"
              justifyContent="space-around"
              flexWrap="wrap"
            >
              <Stack spacing="4" flexDir="row">
                <Button
                  backgroundColor="#ffb524"
                  borderRadius="13px"
                  size={{ base: "sm", lg: "lg", md: "md" }}
                >
                  <ListItem>All Products</ListItem>
                </Button>
                <Button
                  borderRadius="13px"
                  size={{ base: "sm", lg: "lg", md: "md" }}
                >
                  <ListItem>Vegetables</ListItem>
                </Button>
                <Button
                  borderRadius="13px"
                  size={{ base: "sm", lg: "lg", md: "md" }}
                >
                  <ListItem>Fruit</ListItem>
                </Button>
                <Button
                  borderRadius="13px"
                  size={{ base: "sm", lg: "lg", md: "md" }}
                >
                  <ListItem>Bread</ListItem>
                </Button>
                <Button
                  borderRadius="13px"
                  size={{ base: "sm", lg: "lg", md: "md" }}
                >
                  <ListItem>Meat</ListItem>
                </Button>
              </Stack>
            </UnorderedList>
          </Flex>
       
      </Flex>
    </>
  );
};

export default OrganicProduct;
