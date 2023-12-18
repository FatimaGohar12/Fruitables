import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const TestimonalsHeading = () => {
  return (
    <>
      <Flex
        //   border="1px solid black"

        width="100%"
        height="300px"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <Text fontSize="1.6rem" color="#81c408" fontWeight="bold">
          Our Testimonial
        </Text>
        <Heading fontSize="3rem" fontWeight="bold">
          Our Client Saying!
        </Heading>
      </Flex>
    </>
  );
};

export default TestimonalsHeading;
