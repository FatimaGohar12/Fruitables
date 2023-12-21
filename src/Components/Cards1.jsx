import React from "react";

import { Flex, Heading, Image, Text } from "@chakra-ui/react";

const Cards1 = () => {
  // Array To Store a Data

  const cardsData = [
    {
      iconSrc: "/img/Cardicon1.png",
      heading: "Free Shipping",
      text: "Free on order over $300",
    },
    {
      iconSrc: "/img/Cardicon1.png",
      heading: "Security Payment",
      text: "100% security payment",
    },
    {
      iconSrc: "/img/Cardicon1.png",
      heading: "30 Day Return",
      text: "30 day money guarantee",
    },
    {
      iconSrc: "/img/Cardicon1.png",
      heading: "24/7 Support",
      text: "Support every time fast",
    },
  ];

  return (
    <>
      <Flex
        // border="1px solid black"
        height={{ base: "1000px", lg: "500px", md: "1000px" }}
        width="100%"
        alignItems="center"
        justifyContent="space-around"
        flexDir={{ base: "column", lg: "row", md: "column" }}
      >
        {cardsData.map((card, index) => (
          <Flex
            key={index}
            // border={"1px solid black"}
            width={{ base: "73%", lg: "20%", md: "40%" }}
            height="270px"
            alignItems="center"
            justifyContent="space-around"
            borderRadius="23px"
            backgroundColor="#f4f6f8 !important"
            flexDir="column"
          >
            <Image
              src={card.iconSrc}
              width="23%"
              height={{ base: "78px", lg: "100px" }}
            />
            <Heading as="h4" size="md">
              {card.heading}
            </Heading>
            <Text>{card.text}</Text>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default Cards1;
