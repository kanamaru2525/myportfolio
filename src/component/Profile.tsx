import { Box, Image, Flex, List, ListItem, Center } from "@yamada-ui/react"

const Profile = () => {
    return (
        <div>        
        <Box h="90vh"justifyContent="center" alignItems="center" display={{ base: "flex", lg: "none", }}>
          <Flex flexWrap="wrap">
            <Image src="\images\me.jpg" alt="me" zoom="0.25"marginRight="25px"marginLeft="25px" padding="5" />
            <List fontSize="6xl"marginRight="25px"marginLeft="25px"paddingTop="5" >
              <ListItem>Name:金丸汰生</ListItem>
              <ListItem>Age:20</ListItem>
              <ListItem>Hobby:TRPG・アナログゲーム</ListItem>
              <ListItem>From:兵庫県 淡路</ListItem>
            </List>
          </Flex>
        </Box>

        <Box h="70vh"justifyContent="center" alignItems="center"  display={{ base: "none", lg: "flex", }}>
          
        <Flex flexDirection="column">
            <Image src="\images\me.jpg" alt="me" zoom="0.25" padding="5" />
            <List fontSize="2lx"marginRight="25px"marginLeft="25px"paddingTop="5" >
              <ListItem>Name:金丸汰生</ListItem>
              <ListItem>Age:20</ListItem>
              <ListItem>Hobby:TRPG・アナログゲーム</ListItem>
              <ListItem>From:兵庫県 淡路</ListItem>
            </List>
        </Flex>
        </Box>
        </div>
    )
  }
  
  export default Profile