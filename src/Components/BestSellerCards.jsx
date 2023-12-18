import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import React from "react";

const BestSellerCardsItems = [
  {
    itemImage: "img/fruite-item-1.jpg",
    itemHeading: "Organic Tomato",
    itemPrice: "3.2$",
  },
  {
    itemImage: "img/fruite-item-2.jpg",
    itemHeading: "Organic Tomato",
    itemPrice: "3.2$",
  },
  {
    itemImage: "img/fruite-item-3.jpg",
    itemHeading: "Organic Tomato",
    itemPrice: "3.2$",
  },
  {
    itemImage: "img/fruite-item-4.jpg",
    itemHeading: "Organic Tomato",
    itemPrice: "3.2$",
  },
  {
    itemImage: "img/fruite-item-5.jpg",
    itemHeading: "Organic Tomato",
    itemPrice: "3.2$",
  },
  {
    itemImage: "img/fruite-item-6.jpg",
    itemHeading: "Organic Tomato",
    itemPrice: "3.2$",
  },
];

const BestSellerCards = () => {
  return (
    <>
      <Flex
        width="90%"
        margin="auto"
        height="500px"
        flexWrap="wrap"
        justifyContent="space-around"
      >
        {BestSellerCardsItems.map((item, index) => (
          <Flex
            key={index}
            // border="1px solid black"
            width="30%"
            height="230px"
            borderRadius="12px"
            alignItems="center"
            bgColor="#f4f6f8"
            justifyContent="space-around"
            margin="10px"
          >
            <Flex
              // border="1px solid black"
              borderRadius="50%"
              width="30%"
              height="100px"
              bgImg={`url(${item.itemImage})`}
              backgroundSize="cover"
              backgroundPosition="center"
            ></Flex>
            <Flex
              // border="1px solid black"
              width="50%"
              height="150px"
              alignItems="center"
              justifyContent="space-around"
              flexDir="column"
            >
              <Text fontSize="1.4rem">{item.itemHeading}</Text>
              <Text fontSize="1.7rem" fontWeight="bold">
                {item.itemPrice}
              </Text>
              <Button leftIcon={<FaShoppingCart />} colorScheme="green">
                Add to Cart
              </Button>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default BestSellerCards;
