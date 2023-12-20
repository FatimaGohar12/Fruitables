import { Button, Flex, Heading, Text, Grid } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import "./BestSellerCards.css";
import React from "react";

const BestSellerCardsItems = [
  {
    itemImage: "img/fruite-item-1.jpg",
    itemHeading: "Organic Tomato",
    itemPrice: "8.2$",
  },
  {
    itemImage: "img/fruite-item-2.jpg",
    itemHeading: "Organic Tomato",
    itemPrice: "2.2$",
  },
  {
    itemImage: "img/fruite-item-3.jpg",
    itemHeading: "Organic Tomato",
    itemPrice: "9.2$",
  },
  {
    itemImage: "img/fruite-item-4.jpg",
    itemHeading: "Fresh Tomato",
    itemPrice: "7.2$",
  },
  {
    itemImage: "img/fruite-item-5.jpg",
    itemHeading: "Organic Orange",
    itemPrice: "3.2$",
  },
  {
    itemImage: "img/fruite-item-6.jpg",
    itemHeading: "Organic Tomato",
    itemPrice: "9.2$",
  },
];

const BestSellerCards = () => {
  return (
    <>
      <Grid
      height={{lg:"600px",base:"1700px"}}
        templateColumns={{
          base: "1fr", // 1 column for small screens
          md: "repeat(2, 1fr)", // 2 columns for medium screens
          lg: "repeat(3, 1fr)", // 3 columns for large screens
        }}
        gap={6}
        width="90%"
        margin="auto"
        mt={8}
      >
        {BestSellerCardsItems.map((item, index) => (
          <Flex
            key={index}
            width="100%"
            height="250px"
            borderRadius="12px"
            alignItems="center"
            bgColor="#f4f6f8"
            justifyContent="space-around"
            className="card-1"
            cursor="pointer"
          >
            <Flex
              borderRadius="50%"
              width="30%"
              height={{ base: "102px", lg: "149px" }}
              bgImg={`url(${item.itemImage})`}
              backgroundSize="cover"
              backgroundPosition="center"
            ></Flex>
            <Flex
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
              <Button
                leftIcon={<FaShoppingCart />}
                colorScheme="green"
                size={{ lg: "md", md: "md", base: "sm" }}
              >
                Add to Cart
              </Button>
            </Flex>
          </Flex>
        ))}
      </Grid>
    </>
  );
};

export default BestSellerCards;
