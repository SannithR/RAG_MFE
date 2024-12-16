// This is only used for independent development of the microfrontend.

import { FunctionComponent } from "react";
import { Box, Text, Code } from "@chakra-ui/react";
import App from "./App";

const PlaygroundContainer: FunctionComponent = () => {
  return (
    // <Box textAlign={"center"} minH={"100vh"} my={5}>
    //   <Box bg={"white"} shadow={"lg"} rounded={"lg"} mx={"300px"}>
        <App />
    //   </Box>
    // </Box>
  );
};

export default PlaygroundContainer;
