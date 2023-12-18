import {
  Box,
  Flex,
  Heading,
  ListItem,
  UnorderedList,
  Button,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const OrganicProduct = () => {
  return (
    <>
      <Flex
        // border={"1px solid black"}
        alignItems="center"
        justifyContent="space-around"
        height="100px"
      >
        <Box
          // border="1px solid black"

          width="20%"
        >
          <Heading color="#45595b">Our Organic Products</Heading>
        </Box>
        <Flex
          //   border="1px solid black"
          justifyContent="space-evenly"
          alignItems="center"
          width="50%"
          height="50px"
        >
          <UnorderedList
            listStyleType="none"
            display="flex"
            flexDir="row"
            justifyContent="space-around"
          >
            <Stack spacing="4" flexDir="row">
              <Button backgroundColor="#ffb524" borderRadius="13px">
                <ListItem>All Products</ListItem>
              </Button>
              <Button borderRadius="13px">
                <ListItem>Vegetables</ListItem>
              </Button>
              <Button borderRadius="13px">
                <ListItem>Fruit</ListItem>
              </Button>
              <Button borderRadius="13px">
                <ListItem>Bread</ListItem>
              </Button>
              <Button borderRadius="13px">
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
