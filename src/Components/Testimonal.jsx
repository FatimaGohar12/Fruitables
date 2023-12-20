import { Box, Flex, Text } from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
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
  {
    clientImage: "/img/testimonial-1.jpg", // Corrected file extension to '.jpg'
    clientName: "Jenny",
    clientProfession: "Engineer",
    clientReview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptatum aut esse vel. Sunt aliquid aperiam ullam dolor est",
  },
  {
    clientImage: "/img/testimonial-1.jpg", // Corrected file extension to '.jpg'
    clientName: "Jenny",
    clientProfession: "Engineer",
    clientReview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptatum aut esse vel. Sunt aliquid aperiam ullam dolor est",
  },
  {
    clientImage: "/img/testimonial-1.jpg", // Corrected file extension to '.jpg'
    clientName: "Jenny",
    clientProfession: "Engineer",
    clientReview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptatum aut esse vel. Sunt aliquid aperiam ullam dolor est",
  },
  {
    clientImage: "/img/testimonial-1.jpg", // Corrected file extension to '.jpg'
    clientName: "Jenny",
    clientProfession: "Engineer",
    clientReview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptatum aut esse vel. Sunt aliquid aperiam ullam dolor est",
  },
  {
    clientImage: "/img/testimonial-1.jpg", // Corrected file extension to '.jpg'
    clientName: "Jenny",
    clientProfession: "Engineer",
    clientReview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptatum aut esse vel. Sunt aliquid aperiam ullam dolor est",
  },
];

const Testimonal = () => {
 
  return (
    <>
      <Flex
        // border="1px solid black"
        width="90%"
        height="500px"
        margin="auto"
        alignItems="center"
      > <Splide
      options={{
        perPage: 3,
        arrows: false,
        wheel: true,
        // height: '10rem',
        rewind: true,
        // gap: '1rem',
        // breakpoints: {
        //   420: {
        //     perPage: 1,
        //   },
        //   768: {
        //     perPage: 2,
        //   },
        // },
      }}
      aria-label="My Favorite Images"
      onMoved={(splide, newIndex) => {
        // eslint-disable-next-line
        console.log("moved", newIndex);

        // eslint-disable-next-line
        console.log("length", splide.length);
      }}
    >
        {testimonalData.map((item, index) => (
           <SplideSlide key={index}>

          <Flex
          cursor="pointer"
            key={index} // Add a unique key for each mapped element
            border="1px solid white"
            width="88%"
            height="270px"
            padding="12px"
            borderRadius="12px"
            alignItems="center"
            justifyContent="space-around"
            flexDir="column"
            bgColor="#f4f6f8"
            margin="10px" // Add margin for spacing between elements
          >
            <Flex width="100%" height="120px" textAlign="center">
              <Text fontSize="1rem">{item.clientReview}</Text>
            </Flex>

            <Box
              width="100%"
              height="2px"
              bg="#FFA500" // Orange color
              my="10px" // Margin to separate the line from the text
            />
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
           </SplideSlide>
        ))}
        </Splide>
      </Flex>
    </>
  );
};

export default Testimonal;
