import React, { useEffect } from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router"; // Import useNavigate
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats"); // Replace history.push with navigate
  }, [navigate]);

  return (
    <Container maxW="xl" centerContent>
      
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Box
  bg="teal.400"      // Background color, you can change it to your preference
  p={4}              // Padding around the text
  borderRadius="lg"  // Rounded corners
  w="fit-content"    // Automatically adjust width to fit content
  mx="auto"          // Center the box horizontally
  boxShadow="md"     // Optional: Add a shadow for a more elevated look
>
  <Text fontSize="4xl" fontFamily="Roboto, sans-serif" textAlign="center" color="white">
    LET'S CHAT
  </Text>
</Box>

       
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
