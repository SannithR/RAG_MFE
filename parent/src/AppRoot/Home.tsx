import { FunctionComponent, ReactElement } from "react";
import {
  Text,
  Button,
  Box,
  Code,
  Tooltip,
  Link,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

export const Home: FunctionComponent = (): ReactElement => {
  return (
    <Box p={8}>
      <Text>Parent App For MFE!</Text>    
    </Box>
  );
};
