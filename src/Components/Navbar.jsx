import React from "react";
import { Flex, Text, UnorderedList, ListItem } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <>
      <Flex
        border={"1px solid black"}
        width="100%"
        height="100px"
        alignItems="center"
        justifyContent="space-around"
      >
        <Flex border={"1px solid black"} width="20%" height="68px">
          <Text
            fontWeight="bold"
            fontSize="3rem"
            color="#81c408 !important"
            letterSpacing="2px"
          >
            Fruitables
          </Text>
        </Flex>
        <Flex
          border={"1px solid black"}
          width="50%"
          height="68px"
          justifyContent="space-around"
        >
          <UnorderedList
            display="flex"
            flexDirection="row"
            alignItems="center"
            listStyleType="none"
            justifyContent="space-around"
            fontSize="1.3rem"
            cursor="pointer"
          >
            <ListItem padding="14px">Home</ListItem>
            <ListItem padding="14px">Shop</ListItem>
            <ListItem padding="14px">Shop Detail</ListItem>
            <ListItem padding="14px">Pages</ListItem>
            <ListItem padding="14px">Contact</ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
