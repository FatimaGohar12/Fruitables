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
  const iconSize = 6;
  return (
    <>
      <Flex
        border="1px solid black"
        width="100%"
        height="500px"
        bgColor="#45595B"
        alignItems="center"
        justifyContent="space-around"
        flexDir="column"
      >
        <Flex
          border="1px solid black"
          width="90%"
          height="100px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex
            border="1px solid black"
            width="20%"
            height="80px"
            justifyContent="space-around"
            flexDir="column"
          >
            <Heading color="#81c408">Fruitables</Heading>
            <Text color="#ffb524">Fresh Products</Text>
          </Flex>
          <Flex
            border="1px solid black"
            width="60%"
            height="80px"
            alignItems="center"
            justifyContent="center"
          >
            <Stack spacing={2} border="2px solid #ffb524" borderRadius="8px">
              <InputGroup size="lg">
                <Input placeholder="Your Email" backgroundColor="white" />
                <InputRightAddon
                  children="Subscribe Now"
                  backgroundColor="#81c408 !important"
                  color="white"
                  cursor="pointer"
                />
              </InputGroup>
            </Stack>
          </Flex>
          <Flex
            border="1px solid black"
            width="20%"
            height="80px"
            align="center"
            justify="space-around"
          >
            <Icon as={FaTwitter} boxSize={iconSize} color="#ffb524" />
            <Icon as={FaFacebook} boxSize={iconSize} color="#ffb524" />
            <Icon as={FaInstagram} boxSize={iconSize} color="#ffb524" />
            <Icon as={FaYoutube} boxSize={iconSize} color="#ffb524" />
          </Flex>
        </Flex>
        <Flex
          border="1px solid black"
          width="90%"
          height="350px"
          alignItems="center"
          justifyContent="space-around"
        >
          <Flex
            border="1px solid black"
            width="25%"
            height="250px"
            justifyContent="space-evenly"
            flexDir="column"
          >
            <Heading color="white" fontSize="1.3rem" margin="12px">
              Why People Like us!
            </Heading>
            <UnorderedList color="rgba(255,255,255,.5)" listStyleType="none">
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
            border="1px solid black"
            width="25%"
            height="250px"
            justifyContent="space-evenly"
            flexDir="column"
          >
            <Heading color="white" fontSize="1.3rem" margin="12px">
              Shop Info
            </Heading>
            <UnorderedList color="rgba(255,255,255,.5)" listStyleType="none">
              <ListItem>About Us</ListItem>

              <ListItem>Contact Us</ListItem>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Terms & Condition</ListItem>
              <ListItem>Return Policy</ListItem>
              <ListItem>FAQs & Help</ListItem>
            </UnorderedList>
          </Flex>
          <Flex
            border="1px solid black"
            width="25%"
            height="250px"
            justifyContent="space-evenly"
            flexDir="column"
          >
            <Heading color="white" fontSize="1.3rem" margin="12px">
              Account
            </Heading>
            <UnorderedList color="rgba(255,255,255,.5)" listStyleType="none">
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
            border="1px solid black"
            width="25%"
            height="250px"
            justifyContent="space-evenly"
            flexDir="column"
          >
            <Heading color="white" fontSize="1.3rem" margin="12px">
              Contact
            </Heading>
            <UnorderedList color="rgba(255,255,255,.5)" listStyleType="none">
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
