import Footer from "@/component/footer";
import Header from "@/component/header";
import Heroview from "@/component/Heroview";
import Profile from "@/component/Profile";
import Skills from "@/component/Skills";
import { Box, Center, Flex, Grid, GridItem, List, ListItem, Motion ,Text,Image} from "@yamada-ui/react";


export default function Home() {
  return (
    <Box _scrollbar={{display:"none"}}>
      
      <Heroview/>

      <Box h="10vh"justifyContent="center" alignItems="center"display="flex">
        <Text marginRight="25px"marginLeft="25px"paddingTop="5"fontSize="32px"fontWeight="black">Profile</Text>
      </Box>
        <Profile/>
        
          <Box h="full" bg="#2F4A78">
            <Box h="10vh"justifyContent="center" alignItems="center"display="flex">
              <Text marginRight="25px"marginLeft="25px"paddingTop="5"fontSize="32px"fontWeight="black"color={"white"}>Skill</Text>
            </Box>
            <Box>
              <Center>
                <Skills/>
              </Center>
            </Box>
        </Box>
    </Box>
  );
}
