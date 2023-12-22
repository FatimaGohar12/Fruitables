import React from "react";
import { Flex, Image, Heading, Text } from "@chakra-ui/react"; // Assuming you are using Chakra UI

const Services = () => {
  const serviceCards = [
    {
      serviceImg: "/img/logoservice.png",
      serviceHeading: "SATISFIED CUSTOMERS",
      serviceNumber: "1244",
    },
    {
      serviceImg: "/img/logoservice.png",
      serviceHeading: "QUALITY OF SERVICE",
      serviceNumber: "89%",
    },
    {
      serviceImg: "/img/logoservice.png",
      serviceHeading: "QUALITY CERTIFICATES",
      serviceNumber: "189",
    },
    {
      serviceImg: "/img/logoservice.png",
      serviceHeading: "AVAILABLE PRODUCTS",
      serviceNumber: "944",
    },
    // Add more service cards as needed
  ];

  return (
    <>
      <Flex
        // border="1px solid black"
        width="100%"
        height={{ lg: "700px", base: "1500" }}
        margin="auto"
        alignItems="center"
        justifyContent="space-around"
        flexDir={{ lg: "row", base: "column", md: "column" }}
        background="linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)"
      >
        {serviceCards.map((service, index) => (
          <Flex
            key={index} // Add a unique key for each element in the array
            border="1px solid white"
            width={{ lg: "22%", base: "83%" }}
            height={{ lg: "450px", base: "300px" }}
            alignItems="center"
            justifyContent="center"
            bgColor="white"
            flexDir="column"
            boxShadow="1px 2px 3px 4px rgba(20,20,20,0.4)"
            borderRadius="18px"
          >
            <Image
              src={service.serviceImg}
              width="40%"
              height={{ base: "78px", lg: "150px" }}
            />
            <Heading color="#81c408" size="lg" textAlign="center">
              {service.serviceHeading}
            </Heading>
            <Heading
              fontWeight="bold"
              textAlign="center"
              fontStyle="italic"
              fontFamily="'Roboto Condensed', sans-serif"
            >
              {service.serviceNumber}
            </Heading>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default Services;
