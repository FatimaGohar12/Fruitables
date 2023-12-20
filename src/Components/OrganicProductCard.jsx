import React from "react";
import "./OrganicProduct.css";
import {
  Flex,
  Heading,
  Image,
  Text,
  Button,
  GridItem,
  Grid,
} from "@chakra-ui/react";

const OrganicProductCard = () => {
  const OrganicProductCardItems = [
    {
      imageSrc: "/img/fruite-item-5.jpg",
      heading: "Grapes",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit sed doeiusmod te incididunt",
      price: "$4.99 / kg",
    },
    {
      imageSrc: "/img/best-product-2.jpg",
      heading: "Grapes",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit sed doeiusmod te incididunt",
      price: "$24 / kg",
    },
    {
      imageSrc: "/img/fruite-item-5.jpg",
      heading: "Apricots",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit sed doeiusmod te incididunt",
      price: "$22.9 / kg",
    },
    {
      imageSrc: "/img/fruite-item-1.jpg",
      heading: "Grapes",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit sed doeiusmod te incididunt",
      price: "$99.99 / kg",
    },

    {
      imageSrc: "/img/fruite-item-5.jpg",
      heading: "Raspberries",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit sed doeiusmod te incididunt",
      price: "$4.99 / kg",
    },
    {
      imageSrc: "/img/best-product-2.jpg",
      heading: "Oranges",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit sed doeiusmod te incididunt",
      price: "$4.99 / kg",
    },
    {
      imageSrc: "/img/fruite-item-5.jpg",
      heading: "Gravey",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit sed doeiusmod te incididunt",
      price: "$2.99 / kg",
    },

    {
      imageSrc: "/img/best-product-3.jpg",
      heading: "Banana",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit sed doeiusmod te incididunt",
      price: "$2.99 / kg",
    },
  ];

  return (
    <Flex
      // border="1px solid black"
      height="auto"
      alignItems="center"
      justifyContent="space-around"
      flexWrap="wrap"
      flexDir={{ base: "column", lg: "row" }}
    >
      <Grid
        // border="1px solid black"
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(4, 1fr)",
          md: "repeat(2,1fr)",
        }}
        gap={{ lg: "3", md: "6", base: "6" }}
        justifyItems="center"
      >
        {OrganicProductCardItems.map((item, index) => (
          <GridItem
            key={index}
            border="1px solid #ffb524"
            width={{ base: "89%", lg: "78%" }}
            height={{ base: "409px", lg: "390px" }}
            alignItems="center"
            justifyContent="center"
            borderRadius="12px"
            flexDir="column"
            marginBottom="20px"
          >
            <Image
              src={item.imageSrc}
              height="206px"
              width="100%"
              borderRadius="12px"
            />
            <Flex
              flexDir="column"
              alignItems="center"
              justifyContent="space-between"
              padding={2}
            >
              <Heading>{item.heading}</Heading>
              <Text textAlign="center" fontSize="0.9rem">
                {item.text}
              </Text>
              <Text color="#81c408" fontSize="1.3rem" className="grid-text">
                {item.price}
              </Text>
              <Button
                marginTop="2px"
                borderRadius="12px"
                backgroundColor="white"
                border="1px solid #ffb524"
                size={{ base: "sm", lg: "sm", md: "md" }}
              >
                Add to Cart
              </Button>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default OrganicProductCard;
