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
        height="500px"
        width="100%"
        alignItems="center"
        justifyContent="space-around"
      >
        {cardsData.map((card, index) => (
          <Flex
            key={index}
            // border={"1px solid black"}
            width="20%"
            height="230px"
            alignItems="center"
            justifyContent="space-around"
            borderRadius="23px"
            backgroundColor="#f4f6f8 !important"
            flexDir="column"
          >
            <Image src={card.iconSrc} width="43%" height="100px" />
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
