import React from "react";
import {
  Flex,
  Heading,
  Text,
  Box,
  Stack,
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightAddon,
  Image,
} from "@chakra-ui/react";
import Cards1 from "./Cards1";
import Shop from "./Shop";
import FreshOrganic from "./FreshOrganic";
import FreshExotic from "./FreshExotic";
import ShopDetail from "./ShopDetail";
import TestimonalBox from "./TestimonalBox";
import Footer from "./Footer";
import Services from "./Services";

const Main1 = () => {
  return (
    <>
      <Flex
        // border="1px solid black"
        width="100%"
        height="600px"
        backgroundImage="url('/img/hero-img.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        alignItems="center"
        justifyContent="space-around"
        flexDir={{ base: "column-reverse", lg: "row", md: "column-reverse" }}
      >
        {/* text-flex */}
        <Flex
          // border="1px solid black"
          width={{ lg: "45%", base: "100%", md: "68%" }}
          height={{ lg: "400px" }}
          direction="column"
          alignItems="start"
          padding="15px 23px"
          justifyContent="space-around"
        >
          <Text
            color="#ffb524 !important"
            fontSize={{ lg: "3rem", base: "1.5rem", md: "1rem" }}
          >
            100% Organic Foods
          </Text>
          <Heading
            color="#81c408 !important"
            fontSize={{ lg: "4rem", md: "1.9rem", base: "1.9rem" }}
          >
            Organic Veggies & Fruits Foods
          </Heading>
          <Box>
            <Stack spacing={2} border="2px solid #ffb524" borderRadius="8px">
              <InputGroup size={{ lg: "lg", md: "md", base: "sm" }}>
                <Input placeholder="Search" backgroundColor="white" />
                <InputRightAddon
                  children="Submit Now"
                  backgroundColor="#81c408 !important"
                  color="white"
                  cursor="pointer"
                />
              </InputGroup>
            </Stack>
          </Box>
        </Flex>
        {/* image-flex */}
        <Flex>
          <Image
            src="/img/hero-img-2.jpg"
            // width={{ base: "60%", lg: "100%", md: "100%" }}
            width="100%"
            height={{ base: "340px", lg: "500px" }}
            marginRight="15px"
          ></Image>
        </Flex>
      </Flex>
      <Cards1 />
      <Shop />
      <FreshOrganic />
      <FreshExotic />
      <ShopDetail />
      <Services />
      {/* <TestimonalBox /> */}
      <Footer />
    </>
  );
};

export default Main1;
