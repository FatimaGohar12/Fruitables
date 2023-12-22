import React, { useState } from "react";
import {
  Flex,
  Text,
  UnorderedList,
  ListItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Flex
        // border={"1px solid black"}
        width="100%"
        height="100px"
        alignItems="center"
        justifyContent={{ lg: "space-around", base: "space-between" }}
      >
        <Flex
          // border={"1px solid black"}
          width={{ lg: "20%", base: "43%" }}
          height={{ lg: "68px", base: "68px" }}
        >
          <Text
            fontWeight="bold"
            fontSize={{ lg: "3rem", base: "2.5rem" }}
            color="#81c408 !important"
            letterSpacing="2px"
            ml={8}
          >
            Fruitables
          </Text>
        </Flex>
        <Flex
          // border={"1px solid black"}
          width={{lg:"50%",base:"55%"}}
          height="68px"
          justifyContent="space-around"
          display={["none", "none", "flex", "flex"]}
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
            <ListItem padding="14px">
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem padding="14px">
              <Link to="/Shop">Shop</Link>
            </ListItem>
            <ListItem padding="14px">
              <Link to="/ShopDetail">Shop Detail</Link>
            </ListItem>
            <ListItem padding="14px">
              <Link to="/TestimonalBox">Reviews</Link>
            </ListItem>
          </UnorderedList>
        </Flex>
        <IconButton
          aria-label="open Menu"
          size="lg"
          mr={2}
          icon={HamburgerIcon}
          display={["flex", "flex", "none", "none"]}
          onClick={toggleMenu}
          cursor="pointer"
        />
      </Flex>

      {/* Responsive Menu */}
      {isMenuOpen && (
        <Flex
          w="100vw"
          bgColor="gray.50"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
        >
          <Flex justify="flex-end" p={4} position="absolute" top="0" right="0">
            <IconButton
              aria-label="close Menu"
              size="lg"
              icon={<CloseIcon />}
              onClick={closeMenu}
            />
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <UnorderedList
              display="flex"
              flexDirection="column"
              alignItems="center"
              listStyleType="none"
              justifyContent="space-around"
              fontSize="1.3rem"
              cursor="pointer"
            >
              <ListItem padding="14px">
                <Link to="/">Home</Link>
              </ListItem>
              <ListItem padding="14px">
                <Link to="/Shop">Shop</Link>
              </ListItem>
              <ListItem padding="14px">
                <Link to="/ShopDetail">Shop Detail</Link>
              </ListItem>
              <ListItem padding="14px">
                <Link to="/TestimonalBox">Reviews</Link>
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default Navbar;
