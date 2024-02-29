import {
  Text,
  Stack,
  Card,
  Heading,
  Box,
  CardBody,
  Flex,
  Select,
  Image,
} from "@chakra-ui/react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useState } from "react";
import useApi from "./api";
import Platform from "./Platform/Platform";
import PlatformGames from "./Platform/PlatformGames/PlatformGames";
const Games = ({ title }) => {
  const [GameData, setGameData] = useState();
  const { isLoading, data, isError, isFetching } = useApi(`games`);
   
  if (isLoading) {
    return <div>loading</div>;
  }
  if (isError) {
    return <div>{isError}</div>;
  }
  const games = data.results




  return (
    <>
      <Box mt="3rem">
        <Text fontSize="3xl" as="b">
          {" "}
          {title} Games
        </Text>
        <Flex>
          <Platform setGameData={setGameData} />
          <Select w="10rem" variant="ouline" placeholder="Fliter"></Select>
        </Flex>
          <PlatformGames GameData={GameData} games={games}/>
         
        <Box>
      
        </Box>
      </Box>
    </>
  );
};

export default Games;
