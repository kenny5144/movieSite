import React, { useState } from "react";
import { Text, Box, Flex, Select, Image } from "@chakra-ui/react";
import useApi from "../Api";
const Platform = ({ setGameData }) => {
  const [select, setselect] = useState();
  console.log(Select);
  const { isLoading, data, isError, isFetching } = useApi("platforms");
  console.log(data.results);
  if (isLoading) {
    return <div>loading</div>;
  }
  const handleSelect=(e)=>{
      const v=e.target.value
      console.log(v)
    setselect(v)
    console.log(select)
    console.log(data.results.pc)
    // if (select){
    //     // setGameData(data.)
    // }
  }
  return (
    <>
      <Select
        w="10rem"
        variant="outline"
        onChange={handleSelect}
        value={select}
        placeholder="Platforms"
      >
        {data.results.map((platforms) => {
          // console.log(Select)
          return <option key={platforms.id}>{platforms.name}</option>;
        })}
      </Select>
    </>
  );
};

export default Platform;
