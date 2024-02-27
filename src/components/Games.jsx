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
const Games = ({ title }) => {
  const [GameData, setGameData] = useState();
  console.log(GameData);
  const { isLoading, data, isError, isFetching } = useApi("games");

  if (isLoading) {
    return <div>loading</div>;
  }

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
        <Box>
          {GameData && GameData.map((info) => {
            return (
              <Card key={info.id} maxW="sm">
                <CardBody>
                  <Image
                    src={info.slug}
                    alt="game image"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{info.name}</Heading>
                   
                  </Stack>
                </CardBody>
              </Card>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Games;
