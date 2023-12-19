import { Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import { MdShoppingCart } from "react-icons/md";

const FreshExotic = () => {
  return (
    <>
      <Flex
        // border="1px solid black"
        width="100%"
        height={{ lg: "500px", base: "700px" }}
        bgColor="#ffc107"
        align="center"
        justifyContent="space-around"
        flexDir={{ base: "column", lg: "row", md: "column" }}
      >
        <Flex
          border="1px solid black"
          width={{ base: "88%", lg: "45%" }}
          height={{ base: "338px", lg: "383px" }}
          alignItems="start"
          justifyContent="space-around"
          flexDir="column"
          padding="2px"
        >
          <Heading
            color="white"
            fontSize={{ base: "3rem", lg: "6rem", md: "3rem" }}
          >
            Fresh Exotic Fruits
          </Heading>
          <Text fontSize={{ base: "3rem", lg: "5rem", md: "3rem" }}>
            in Our Store
          </Text>

          <Text fontSize="1.5rem">
            The generated Lorem Ipsum is therefore always free from repetition
            injected humour, or non-characteristic words etc.
          </Text>
          <Button
            leftIcon={<MdShoppingCart />}
            bg="gray.500"
            color="white"
            variant="solid"
            border="1px solid gray.500"
            borderRadius="12px"
            size="lg"
            _hover={{
              bg: "white",
              color: "gray.500",
            }}
          >
            BUY
          </Button>
        </Flex>
        <Flex
          border="1px solid black"
          width="40%"
          height={{ base: "100px", lg: "333px" }}
        >
          <Image
            src="/img/baner-1.png"
            width="200%"
            height="120%"
            objectFit="contain"
          />
        </Flex>
      </Flex>
    </>
  );
};

export default FreshExotic;
