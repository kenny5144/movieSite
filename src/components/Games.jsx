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
const Games = ({ title, GameData, setGameData, settitle }) => {
  const [GenresgamesData, setGenresgameData] = useState();
  const { isLoading, data, isError, isFetching } = useApi(`games`);

  if (isLoading) {
    return <div>loading</div>;
  }
  if (isError) {
    return <div>{isError}</div>;
  }
  const games = data.results;
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
      <Box mt="3rem">
        <Text fontSize="3xl" as="b">
          {title ? title + " Games " : "All Games"}
        </Text>
        <Flex>
          <Platform setGameData={setGameData} />
          <Select w="10rem" variant="ouline" placeholder="Fliter"></Select>
        </Flex>
        {/*      
        {title==="All"  ?<Maingames data={games} />:<GernesGames setGenresgamesData={setGenresgameData} games={games} title={title} />
        }
        {GameData? <PlatformGames GameData={GameData} games={games}/>:<Maingames data={games} /> } */}
        {
          // Conditionally render based on both 'title' and 'GameData'
          GameData ? (
            // If 'title' is "All" and 'GameData' is truthy, render 'PlatformGames'
            <PlatformGames GameData={GameData} games={games} />
          ) : title !== "All"  ? (
            // If 'title' is not "All" and 'GameData' is truthy, render 'GernesGames'
            <GernesGames
              setGenresgamesData={setGenresgameData}
              games={games}
              title={title}
            />
          ) : (
            // Default: If none of the conditions are met, render 'Maingames'
            <Maingames data={games} />
          )
        }

        <Box></Box>
      </Box>
    </>
  );
};

export default Games;
