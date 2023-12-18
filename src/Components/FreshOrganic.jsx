import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const FreshOrganic = () => {
  const freshOrganicProducts = [{}];

  return (
    <>
      <Flex
        // border="1px solid black"
        height="500px"
        width="100%"
        alignItems="center"
        justifyContent="space-around"
        flexDir={{ base: "column", lg: "row", md: "column" }}
      >
        <Flex
          border="1px solid black"
          width="28%"
          height="373px"
          borderRadius="23px"
          flexDir="column"
        >
          <Flex
            border="1px solid black"
            width="100%"
            height="253px"
            roundedTopLeft="23px"
            roundedTopRight="23px"
            bg="url('/img/featur-1.jpg') center / cover no-repeat"
          ></Flex>

          <Flex
            border="1px solid black"
            width="100%"
            height="153px"
            roundedBottomLeft="23px"
            roundedBottomRight="23px"
            backgroundColor="#ffc107"
          ></Flex>
          <Flex
            border="1px solid black"
            bgColor="#81c408"
            width="20%"
            height="130px"
            position="absolute"
            borderRadius="12px"
            marginLeft="45px"
            marginTop="199px"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
          >
            <Heading as="h4" size="md" color="white">
              Fresh Apples
            </Heading>
            <Text fontSize="1.6rem" fontWeight="bold">
              20% Off
            </Text>
          </Flex>
        </Flex>
        <Flex
          border="1px solid black"
          width="28%"
          height="373px"
          borderRadius="23px"
          flexDir="column"
        >
          <Flex
            border="1px solid black"
            width="100%"
            height="253px"
            roundedTopLeft="23px"
            roundedTopRight="23px"
            bg="url('/img/featur-2.jpg') center / cover no-repeat"
          ></Flex>

          <Flex
            border="1px solid black"
            width="100%"
            height="153px"
            roundedBottomLeft="23px"
            roundedBottomRight="23px"
            backgroundColor="#343a40"
          ></Flex>
          <Flex
            border="1px solid black"
            // bgColor="#81c408"
            bgColor="white"
            width="20%"
            height="130px"
            position="absolute"
            borderRadius="12px"
            marginLeft="45px"
            marginTop="199px"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
          >
            <Heading as="h4" size="md" color="#fd7e14">
              Tasty Fruits
            </Heading>
            <Text fontSize="1.6rem" fontWeight="bold">
              Free Delivery
            </Text>
          </Flex>
        </Flex>
        <Flex
          border="1px solid black"
          width="28%"
          height="373px"
          borderRadius="23px"
          flexDir="column"
        >
          <Flex
            border="1px solid black"
            width="100%"
            height="253px"
            roundedTopLeft="23px"
            roundedTopRight="23px"
            bg="url('/img/featur-3.jpg') center / cover no-repeat"
          ></Flex>

          <Flex
            border="1px solid black"
            width="100%"
            height="153px"
            roundedBottomLeft="23px"
            roundedBottomRight="23px"
            backgroundColor="#fd7e14"
          ></Flex>
          <Flex
            border="1px solid black"
            backgroundColor="#ffc107"
            width="20%"
            height="130px"
            position="absolute"
            borderRadius="12px"
            marginLeft="45px"
            marginTop="199px"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
          >
            <Heading as="h4" size="md" color="white">
              Exotic Vegetables
            </Heading>
            <Text fontSize="1.6rem" fontWeight="bold">
              Discount 30$
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default FreshOrganic;
