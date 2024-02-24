import React from "react";
import {Api} from "../api.js";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { Text,Link, Box, Flex, Image } from "@chakra-ui/react";

const Gernes = ({settitle}) => {

  const { status, error, data, isFetching } = Api('genres', 'genres' )
  
  console.log(data)
  if (status ==="loading") return <div>Loading...</div>;
  if (status==="error") return <div>Error fetching data</div>;

  const handleclick = (event) => {
    console.log("hi" + event.target.innerHTML );
    settitle(event.target.innerHTML)
  };

  return (
    <>
      <Box ml="1.5rem" mt="3rem">
        <Text fontSize="2xl" as="b" pb="1rem">
          {" "}
          Genres
        </Text>
        {
  // console.log(data.results)

        }
        {data.results.map((data) => {
          return (
            <Box key={data.id}>
              <Flex >
                <Image
              
                  boxSize="2rem"
                  borderRadius="lg"
                  src={data.image_background}
                  alt="image if the coressponding gernes "
                />
                <Link onClick={handleclick} pl="1rem"  pb="1rem" >
                  {data.name}
                </Link>
              </Flex>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Gernes;
