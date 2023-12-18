import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const testimonalData = [
  {
    clientImage: "/img/testimonial-1.jpg", // Corrected file extension to '.jpg'
    clientName: "Jenny",
    clientProfession: "Doctor",
    clientReview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptatum aut esse vel. Sunt aliquid aperiam ullam dolor est",
  },
  {
    clientImage: "/img/testimonial-1.jpg", // Corrected file extension to '.jpg'
    clientName: "Jenny",
    clientProfession: "Doctor",
    clientReview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptatum aut esse vel. Sunt aliquid aperiam ullam dolor est",
  },
];

const Testimonal = () => {
  return (
    <>
      <Flex border="1px solid black" width="90%" height="400px" margin="auto" alignItems="center">
        {testimonalData.map((item, index) => (
          <Flex
            key={index} // Add a unique key for each mapped element
            border="1px solid black"
            width="45%"
            height="200px"
            borderRadius="12px"
            alignItems="center"
            justifyContent="space-around"
            flexDir="column"
            bgColor="#f4f6f8"
            margin="10px" // Add margin for spacing between elements
          >
            <Flex width="100%" height="120px" textAlign="center">
              <Text  fontSize="1rem" >{item.clientReview}</Text>
            </Flex>
            <Flex
              width="100%"
              height="150px"
              alignItems="center"
              flexDir="row"
              justifyContent="center"
            >
              <Flex
                width="20%"
                height="100px"
                bg={`url('${item.clientImage}') center / cover no-repeat`} // Use backticks for dynamic URL
                borderRadius="12px"
              ></Flex>
              <Flex
                alignItems="center"
                justifyContent="space-around"
                flexDir="column"
                width="50%"
                height="100px"
              >
                <Text fontSize="2rem">{item.clientName}</Text>
                <Text fontSize="1rem">{item.clientProfession}</Text>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default Testimonal;
