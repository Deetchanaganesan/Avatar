import { Text, Avatar, Box, Button, Input, Image } from "@chakra-ui/react";
import { ImagePlus } from "lucide-react";

export default function Profile() {
  return (
    <>
      <Image boxSize={"80px"} ml={"40px"} src="dribble.png" alt="hello"></Image>
      <Box width={{ base: "150%", md: "100%" }}>
        <Text
          fontWeight={"bold"}
          fontSize={"30px"}
          ml={{ base: "110px", md: "-40px" }}
        >
          Welcome! Let's create your profile
        </Text>
        <br></br>
        <Text color={"#8590A2"} ml={{ base: "80px", md: "-130px" }}>
          Let others get to know you better! You can do these later
        </Text>
        <br></br>
        <Text
          ml={{ base: "-150px", md: "-390px" }}
          fontSize={"18px"}
          fontWeight={"bold"}
        >
          Add an avatar
        </Text>
        <br></br>
        <Avatar
          size="2xl"
          bg={"white"}
          borderWidth={"2px"}
          borderStyle={"dotted"}
          borderColor={"grey"}
          icon={<ImagePlus color="grey" />}
          ml={{ base: "60px", md: "-150px" }}
        />
        <Button
          ml={"100px"}
          colorScheme="gray"
          variant="outline"
          color={"black"}
        >
          Choose Image
        </Button>
        <Text
          color={"#8590A2"}
          mt={"-70px"}
          ml={{ base: "290px", md: "160px" }}
        >
          ! Or choose one of our defaults
        </Text>
        <br></br>
        <br></br>
        <br></br>
        <Text
          fontWeight={"bold"}
          ml={{ base: "-120px", md: "-360px" }}
          fontSize={"18px"}
        >
          Add your location
        </Text>
        <br></br>
        <Input
          variant="flushed"
          placeholder="Enter a location"
          width={"510px"}
          ml={{ base: "150px", md: "-10px" }}
        />
      </Box>
      <br></br>
      <br></br>
      <Button
        colorScheme="pink"
        size="md"
        ml={{ base: "100px", md: "-310px" }}
        width={"200px"}
        isDisabled
      >
        Next
      </Button>
    </>
  );
}
