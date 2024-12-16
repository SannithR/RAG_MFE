import { lazy, Suspense, useState, FunctionComponent } from "react";
import { Box, Text } from "@chakra-ui/react";
import "../assets/styles.css";

const ToDoAppLazy = lazy(() => import("toDoApp/app"));

export const ToDoAppPage: FunctionComponent = (): JSX.Element => {
  return (
    // <Box textAlign={"center"}>
    //   <Box bg={"white"} shadow={"lg"} rounded={"lg"}  my={5}>
        <Suspense fallback={<Text>Loading...</Text>}>
          <ToDoAppLazy />
        </Suspense>
    //   </Box>
    // </Box>
  );
};
