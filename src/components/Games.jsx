import { Text, Box, Flex,Select, Image } from "@chakra-ui/react";
import { useState } from "react";
const Games = ({ title }) => {
  return (
    <>
      <Box mt="3rem">
        <Text fontSize="3xl" as="b">
          {" "}
          {title} Games
        </Text>
      <Flex>
        <Select w='10rem' variant='outline' placeholder="Platforms">
          
        </Select>
        <Select w='10rem'  variant='ouline' placeholder="Fliter">
         
        </Select>
      </Flex>
      </Box>
      <Box></Box>
    </>
  );
};

export default Games;
