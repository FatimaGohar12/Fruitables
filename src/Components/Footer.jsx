import {
  Flex,
  Heading,
  Text,
  Icon,
  Box,
  Stack,
  Input,
  InputGroup,
  InputRightAddon,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const iconSize = 8;
  return (
    <>
      <Flex
        // border="1px solid black"
        width="100%"
        height={{ base: "1330px", lg: "600px" }}
        bgColor="#45595B"
        alignItems="center"
        justifyContent="space-around"
        flexDir="column"
      >
        <Flex
          // border="1px solid black"
          width="90%"
          height={{ base: "269px", lg: "100px" }}
          alignItems="center"
          justifyContent="space-around"
          flexDir={{ base: "column", lg: "row" }}
        >
          <Flex
            // border="1px solid black"
            width={{ base: "69%", lg: "20%" }}
            height="80px"
            justifyContent="space-around"
            flexDir="column"
            alignSelf={{ base: "self-start" ,lg:"center"}}
          >
            <Heading color="#81c408" fontSize={{ lg: "2rem", base: "2rem" }}>
              Fruitables
            </Heading>
            <Text color="#ffb524" fontSize="1.4rem">
              Fresh Products
            </Text>
          </Flex>
          <Flex
            // border="1px solid black"
            width={{ base: "89%", lg: "60%" }}
            height="80px"
            alignItems="center"
            justifyContent="center"
            alignSelf={{ base: "center" }}
          >
            <Stack
              spacing={2}
              border="2px solid #ffb524"
              borderRadius="8px"
              width={{ base: "98%", lg: "80%" }}
            >
              <InputGroup size={{ lg: "lg", base: "sm" }}>
                <Input
                  placeholder="Email"
                  backgroundColor="white"
                  size={{ lg: "lg", base: "sm" }}
                />
                <InputRightAddon
                  children="Subscribe Now"
                  backgroundColor="#81c408 !important"
                  color="white"
                  cursor="pointer"
                  size={{ lg: "lg", base: "sm" }}
                />
              </InputGroup>
            </Stack>
          </Flex>
          <Flex
            // border="1px solid black"
            width={{ base: "58%", lg: "20%" }}
            height="auto"
            align="center"
            justify="space-around"
            alignSelf={{ base: "end",lg:"center" }}
          >
            <Icon as={FaTwitter} boxSize={iconSize} color="#ffb524" />
            <Icon as={FaFacebook} boxSize={iconSize} color="#ffb524" />
            <Icon as={FaInstagram} boxSize={iconSize} color="#ffb524" />
            <Icon as={FaYoutube} boxSize={iconSize} color="#ffb524" />
          </Flex>
        </Flex>
        <Flex
          // border="1px solid black"
          width="90%"
          height={{ base: "1014px", lg: "450px" }}
          justifyContent="space-around"
          flexDir={{ base: "column", lg: "row" }}
          alignItems={{ base: "self-start", lg: "center" }}
        >
          <Flex
            // border="1px solid black"
            width={{ base: "100%", lg: "25%" }}
            height="380px"
            // justifyContent="space-evenly"
            flexDir="column"
          >
            <Heading
              color="white"
              fontSize={{ lg: "2rem", base: "1.7rem" }}
              margin="12px"
            >
              Why People Like us!
            </Heading>
            <UnorderedList
              color="rgba(255,255,255,.5)"
              listStyleType="none"
              fontSize={{ lg: "1.2rem", base: "1rem" }}
            >
              <ListItem>typesetting, remaining</ListItem>
              <ListItem>essentially unchanged. It was</ListItem>
              <ListItem>popularised in the 1960s with</ListItem>
              <ListItem>the like Aldus PageMaker</ListItem>
              <ListItem>including of Lorem Ipsum.</ListItem>
              <ListItem>typesetting, remaining</ListItem>

              <ListItem>including of Lorem Ipsum.</ListItem>
            </UnorderedList>
          </Flex>
          <Flex
            // border="1px solid black"
            width={{ base: "100%", lg: "25%" }}
            height="380px"
            // justifyContent="space-evenly"
            flexDir="column"
          >
            <Heading
              color="white"
              fontSize={{ lg: "2rem", base: "1.7rem" }}
              margin="12px"
            >
              Shop Info
            </Heading>
            <UnorderedList
              color="rgba(255,255,255,.5)"
              listStyleType="none"
              fontSize={{ lg: "1.2rem", base: "1rem" }}
            >
              <ListItem>About Us</ListItem>

              <ListItem>Contact Us</ListItem>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Terms & Condition</ListItem>
              <ListItem>Return Policy</ListItem>
              <ListItem>FAQs & Help</ListItem>
            </UnorderedList>
          </Flex>
          <Flex
            // border="1px solid black"
            width={{ base: "100%", lg: "25%" }}
            height="380px"
            // justifyContent="space-evenly"
            flexDir="column"
          >
            <Heading
              color="white"
              fontSize={{ lg: "2rem", base: "1.7rem" }}
              margin="12px"
            >
              Account
            </Heading>
            <UnorderedList
              color="rgba(255,255,255,.5)"
              listStyleType="none"
              fontSize={{ lg: "1.2rem", base: "1rem" }}
            >
              <ListItem>My Account</ListItem>

              <ListItem>Shop details</ListItem>
              <ListItem>Shopping Cart</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Order History</ListItem>
              <ListItem>typesetting, remaining</ListItem>

              <ListItem>including of Lorem Ipsum.</ListItem>
            </UnorderedList>
          </Flex>
          <Flex
            // border="1px solid black"
            width={{ base: "100%", lg: "25%" }}
            height="380px"
            // justifyContent="space-evenly"
            flexDir="column"
            fontSize={{ lg: "2rem", base: "1.7rem" }}
          >
            <Heading
              color="white"
              margin="12px"
              fontSize={{ lg: "2rem", base: "1.7rem" }}
            >
              Contact
            </Heading>
            <UnorderedList
              color="rgba(255,255,255,.5)"
              listStyleType="none"
              fontSize={{ lg: "1.2rem", base: "1rem" }}
            >
              <ListItem>Address: 1429 Netus Rd, NY 48247</ListItem>
              <ListItem>Email: Example@gmail.com</ListItem>
              <ListItem>Phone: +0123 4567 8910</ListItem>
              <ListItem>the like Aldus PageMaker</ListItem>
              <ListItem>Payment Accepted</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
