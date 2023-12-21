import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useProductContext } from "./Components/ProductContext";

const CartProduct = () => {
  const { selectedItem } = useProductContext();
  console.log("Selected Items", selectedItem);
  if (!selectedItem) {
    return (
      <Flex
        width="100%"
        height="700px"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="5rem" color="#81c408" >No item selected</Text>
      </Flex>
    );
  }
  return (
    <>
      <Flex
        // border="1px solid green"
        width="100%"
        height="700px"
        alignItems="center"
        justifyContent="space-around"
        flexDir={{ base: "column-reverse", lg: "row" }}
      >
        {/* Image-flex */}
        <Flex
          border="1px solid white"
          width={{ lg: "40%", base: "100%" }}
          height="450px"
        >
          <Image width="100%" src={selectedItem.imageSrc}></Image>
        </Flex>
        {/* product description */}
        <Flex
          //   border="1px solid grey"
          width={{ lg: "30%", base: "100%" }}
          height="350px"
          alignItems="start"
          flexDir="column"
          justifyContent="space-around"
          padding="12px"
        >
          <Heading color="#81c408 !important">{selectedItem.heading}</Heading>
          <Heading color="orange" size="md">
            {selectedItem.price}
          </Heading>
          <Text textAlign="justify">{selectedItem.text}</Text>
          <Button colorScheme="orange" size="lg">
            Add to Cart
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default CartProduct;
