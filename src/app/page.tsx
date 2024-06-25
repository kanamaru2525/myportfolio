import Footer from "@/component/footer";
import Header from "@/component/header";
import Heroview from "@/component/Heroview";
import { Box, Center, Flex, Grid, GridItem, List, ListItem, Motion ,Text,Image} from "@yamada-ui/react";


export default function Home() {
  return (
    <Box _scrollbar={{display:"none"}}>
      
      <Heroview/>

      <Box h="10vh"justifyContent="center" alignItems="center"display="flex">
        <Text marginRight="25px"marginLeft="25px"paddingTop="5"fontSize="32px"fontWeight="black">Profile</Text>
      </Box>
        <Box h="90vh"justifyContent="center" alignItems="center" display="flex">
          <Flex flexWrap="wrap">
            <Image src="/images/me.jpg" alt="me" zoom="0.25"marginRight="25px"marginLeft="25px" padding="5" />
            <List fontSize="40px"marginRight="25px"marginLeft="25px"paddingTop="5" >
              <ListItem>Name:金丸汰生</ListItem>
              <ListItem>Age:20</ListItem>
              <ListItem>Hobby:TRPG・アナログゲーム</ListItem>
              <ListItem>From:兵庫県 淡路</ListItem>
              
            </List>
          </Flex>
        </Box>
          <Box h="full" bg="#2F4A78">
            <Box h="10vh"justifyContent="center" alignItems="center"display="flex">
            <Text marginRight="25px"marginLeft="25px"paddingTop="5"fontSize="32px"fontWeight="black"color={"white"}>Skill</Text>
            </Box>
          <Box>
          <Center>
            <Grid templateColumns="repeat(2, 1fr)" gap={"md"} margin="5vh" w="65vw">
              <GridItem w="full"  rounded="md" bg="#ffffff">
                  <Center>
                    <Image src="/images/figma.png" alt="me" zoom="0.5"/>
                  </Center>
                  <Text fontSize="40px" w="100%" textAlign="center">Figma</Text>
                  <Text fontSize="40px" w="100%" textAlign="center">習熟度:★★★</Text>
              </GridItem>
              <GridItem w="full"  rounded="md" bg="#ffffff">
                  <Center>
                    <Image src="/images/htmls.png"  alt="me" zoom="0.5"/>
                  </Center>
                  <Text fontSize="40px" w="100%" textAlign="center">HTMLL/Javascript/CSS</Text>
                  <Text fontSize="40px" w="100%" textAlign="center">習熟度:★★</Text>
              </GridItem>
              <GridItem w="full"  rounded="md" bg="#ffffff">
                  <Center>
                    <Image src="/images/Nextjs.png"  alt="me" zoom="0.5"/>
                  </Center>
                  <Text fontSize="40px" w="100%"textAlign="center">Next.js</Text>
                  <Text fontSize="40px" w="100%" textAlign="center">習熟度:★</Text>
              </GridItem>
              <GridItem w="full"  rounded="md" bg="#ffffff">
                  <Center>
                    <Image src="/images/daVinci.png"  alt="me" zoom="0.5"/>
                  </Center>
                  <Text fontSize="40px" w="100%"textAlign="center">DaVinci Resolve</Text>
                  <Text fontSize="40px" w="100%" textAlign="center">習熟度:★★</Text>
              </GridItem>
              <GridItem w="full"  rounded="md" bg="#ffffff">
                  <Center>
                    <Image src="/images/colors.png"  alt="me" zoom="0.5"/>
                  </Center>
                  <Text fontSize="40px" w="100%"textAlign="center">色彩検定</Text>
                  <Text fontSize="40px" w="100%" textAlign="center">習熟度:2級</Text>
              </GridItem>
            </Grid>
          </Center>
        </Box>  
        </Box>
    </Box>
  );
}
