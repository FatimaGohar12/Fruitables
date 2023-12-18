import React from "react";
import { Flex, Heading, Image, Text, Button } from "@chakra-ui/react";

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
      border="1px solid black"
      height="900px"
      alignItems="center"
      justifyContent="space-around"
      flexWrap="wrap"
    >
      {OrganicProductCardItems.map((item, index) => (
        <Flex
          key={index}
          border="1px solid #ffb524"
          width="24%"
          height="390px"
          alignItems="center"
          justifyContent="start"
          borderRadius="12px"
          flexDir="column"
          marginBottom="20px"
        >
          <Image
            src={item.imageSrc}
            height="172px"
            width="100%"
            borderRadius="12px"
          />
          <Heading>{item.heading}</Heading>
          <Text textAlign="center">{item.text}</Text>
          <Text color="#81c408" fontSize="1.3rem">
            {item.price}
          </Text>
          <Button
            marginTop="2px"
            borderRadius="12px"
            backgroundColor="white"
            border="1px solid #ffb524"
          >
            Add to Cart
          </Button>
        </Flex>
      ))}
    </Flex>
  );
};

export default OrganicProductCard;
