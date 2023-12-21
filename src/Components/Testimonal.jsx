import { Box, Flex, Text } from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React from "react";

const testimonalData = [
  {
    clientImage: "/img/testimonial-1.jpg",
    clientName: "Jenny",
    clientProfession: "Doctor",
    clientReview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptatum aut esse vel. Sunt aliquid aperiam ullam dolor est",
  },
  {
    clientImage: "/img/testimonial-1.jpg",
    clientName: "Jenny",
    clientProfession: "Doctor",
    clientReview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptatum aut esse vel. Sunt aliquid aperiam ullam dolor est",
  },
  {
    clientImage: "/img/testimonial-1.jpg",
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
        width="auto"
        height="400px"
        margin="auto"
        alignItems="center"
      >
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            wheel: true,
            // height: '10rem',
            rewind: true,
            breakpoints: {
              1024: {
                perPage: 3,
              },
              768: {
                perPage: 2,
              },
              480: { perPage: 1 },
            },
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
                key={index}
                border="1px solid white"
                width={{ base: "36%", lg: "88%" }}
                height="270px"
                padding="12px"
                borderRadius="12px"
                alignItems="center"
                justifyContent="space-around"
                flexDir="column"
                bgColor="#f4f6f8"
                margin="10px"
              >
                <Flex width="100%" height="120px" textAlign="center">
                  <Text fontSize="1rem">{item.clientReview}</Text>
                </Flex>

                <Box width="100%" height="2px" bg="#FFA500" my="10px" />
                
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
