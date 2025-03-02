import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} width={500} height={300} alt="banner" />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1}
          <br />
          {title2}
        </Text>
        <Text color="gray.700" paddingTop="3" paddingBottom="3" fontSize="sm">
          {desc1}
          <br />
          {desc2}
        </Text>
        <Button fontSize="xl" bg="blue.300" color="white">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
      {purpose}
    </Flex>
  );
};
export default function Home() {
  return (
    <div>
      <h1>hello world</h1>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes Fore"
        title2="EveryOne"
        desc1="Explore Apartments,Villas,Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl=""
      />
      <Banner purpose={"For sale"} />
    </div>
  );
}
