import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Banner = ({ purpose }) => {
  <Flex flexWrap={wrap} justifyContent="center" alignItems="center" m="10">
    {purpose}
  </Flex>;
};
export default function Home() {
  return (
    <div>
      <h1>hello world</h1>
      <Banner purpose={"For sale"} />
    </div>
  );
}
