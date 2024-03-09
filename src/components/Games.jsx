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
import GernesGames from "./Gernes/GernesGames/GernesGames";
import Maingames from "./MainGames/Maingames";
import Searchinp from "./SearchInput/Searchinp";
const Games = ({ title, GameData, setGameData, setSearchinp ,searchinp, settitle }) => {
  const [GenresgamesData, setGenresgameData] = useState();
  const { isLoading, data, isError, isFetching } = useApi(`games`);


  const games = data.results;
  console.log(games) 

 
  function DipslayRightData() {
    if (title) {
      <GernesGames
        setGenresgamesData={setGenresgameData}
        games={games}
        title={title}
      />;
    } else if (GameData) {
      <PlatformGames GameData={GameData} games={games} />;
    } else {
      <Maingames data={games} />;
    }
  }

  return (
    <>
      <Box ml="5rem" mt="3rem">
        <Text fontSize="3xl" as="b">
          {title ? title + " Games " : "All Games"}
        </Text>
        <Flex>
          <Platform setGameData={setGameData} />
          <Select w="10rem" variant="ouline" placeholder="Fliter">

          </Select>
        </Flex>
    
        {
          
          GameData ? (
           
            <PlatformGames GameData={GameData} games={games} />
          ) : title !== "All"  ? (
          
            <GernesGames
              setGenresgamesData={setGenresgameData}
              games={games}
              title={title}
            />
          )  : searchinp!=null ? (
            <Searchinp games={games} searchinp={searchinp}/>
           
          ): (
            
            <Maingames data={games} />
          )
        }

        <Box></Box>
      </Box>
    </>
  );
};

export default Games;
