// This is only used for independent development of the microfrontend.

import { FunctionComponent } from 'react';
import AppRoot from './AppRoot';
import { Box, Text, Code } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

const PlaygroundContainer: FunctionComponent = () => {
  return (
    <BrowserRouter>
      {/* <Box textAlign={'center'} minH={'100vh'} my={5}>
        <Box bg={'gray'} shadow={'lg'} rounded={'lg'} mx={'300px'} my={5}> */}
          <AppRoot />
        {/* </Box>
      </Box> */}
    </BrowserRouter>
  );
}

export default PlaygroundContainer;
