import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const BestSeller = () => {
  return (
    <>
      <Flex
        // border="1px solid black"
        width="100%"
        height="322px"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <Heading fontSize="4rem" color="#45595b">
          Bestseller Products
        </Heading>
        <Text color="#45595b">
          Latin words, combined with a handful of model sentence structures, to
          generate Lorem Ipsum which looks reasonable.
        </Text>
      </Flex>
    </>
  );
};

export default BestSeller;
