import { Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

const FreshExotic = () => {
  return (
    <>
      <Flex
        // border="1px solid black"
        width="100%"
        height="500px"
        bgColor="#ffc107"
        align="center"
        justifyContent="space-around"
      >
        <Flex
        //   border="1px solid black"
          width="45%"
          height="333px"
          alignItems="start"
          justifyContent="space-around"
          flexDir="column"
          padding="2px"
        >
          <Heading color="white" fontSize="4rem">
            Fresh Exotic Fruits
          </Heading>
          <Text fontSize="4rem">in Our Store</Text>

          <Text>
            The generated Lorem Ipsum is therefore always free from repetition
            injected humour, or non-characteristic words etc.
          </Text>
          <Button
            border="2px solid white"
            borderRadius="28px"
            width="23%"
            height="60px"
            bgColor="transparent"
          >
            BUY
          </Button>
        </Flex>
        <Flex
        //  border="1px solid black" 
        
        width="40%" height="333px">
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
