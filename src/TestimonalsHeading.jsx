import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const TestimonalsHeading = () => {
  return (
    <>
      <Flex
        // border="1px solid black"
        width="100%"
        height="200px"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <Text
          fontSize={{ lg: "5.6rem", base: "3rem" }}
          color="#81c408"
          fontWeight="bold"
          textAlign="center"
        >
          Our Testimonial
        </Text>
        <Heading
          fontSize={{ lg: "3rem", base: "2rem" }}
          fontWeight="bold"
          textAlign="center"
        >
          Our Client Saying!
        </Heading>
      </Flex>
    </>
  );
};

export default TestimonalsHeading;
