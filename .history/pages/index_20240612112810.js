import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const Banner = ({ purpose }) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} width={500} height={300} alt="banner" />
      <Box p="5">
        <Text color="gray.500">{purpose}</Text>
      </Box>
      {purpose}
    </Flex>
  );
};
export default function Home() {
  return (
    <div>
      <h1>hello world</h1>
      <Banner purpose={"For sale"} />
      <Banner purpose={"For sale"} />
    </div>
  );
}
