import {
  Text,
  Stack,
  Card,
  Heading,
  Box,
  CardBody,
  Flex,
  Select,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

const PlatformGames = ({ GameData, games }) => {
  const gamesPlatfrom = GameData
    ? games.filter((games) => GameData.includes(games.id))
    : "";
  console.log(games);
  console.log(gamesPlatfrom);
  return (
    <>
      {gamesPlatfrom &&
        gamesPlatfrom.map((data) => {
          return (
            <Flex key={data.id} gap={2} >

            <Box>


            <Card  key={data.id}  maxW="sm">
              <CardBody>
                <Image
                  src={data.background_image}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{data.name}</Heading>
                 
                </Stack>
              </CardBody>
            </Card>
            </Box>
            
            </Flex>
          );
        })}
    </>
  );
};

export default PlatformGames;
