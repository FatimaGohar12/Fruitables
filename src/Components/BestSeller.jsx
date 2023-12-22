import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const BestSeller = () => {
  return (
    <>
      <Flex
        // border="1px solid black"
        width="100%"
        height={{base:"205px",lg:"322px"}}
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <Heading fontSize={{ base: "2rem", lg: "6rem" }} color="#45595b"
        
        textAlign="center"
        >
          Bestseller Products
        </Heading>
        <Text
          color="#45595b"
          fontSize={{ lg: "1.4rem", base: "1rem" }}
          textAlign="center"
        >
          Latin words, combined with a handful of model sentence structures, to
          generate Lorem Ipsum which looks reasonable.
        </Text>
      </Flex>
    </>
  );
};

export default BestSeller;
