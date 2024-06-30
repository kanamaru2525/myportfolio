import { Center, Flex, Motion,Text } from "@yamada-ui/react"
const Heroview = () => {
    return (
      <div>
      <Flex h="100vh" bg="#B9C0CC" justifyContent="center" alignItems="center" flexDirection="column" display={{ base: "flex", lg: "none", }}>   
        <Motion whileHover={{ scale: 1.1 }}>
          <Text fontSize="124px"fontWeight="black"color="white" borderBottom="solid">KANAMARU TAISEI</Text>
        </Motion>
        <Text fontSize="32px" color="white" margin="25px">A failure to become a creator</Text>
      </Flex>

      <Flex h="100vh" bg="#B9C0CC" justifyContent="center" alignItems="center" flexDirection="column" display={{ base: "none", lg: "flex", }}>   
          
          
          <Text fontSize="6xl"fontWeight="black"color="white" borderBottom="solid" margin="1rem" textAlign="center">KANAMARU TAISEI</Text>       
          
        <Text fontSize="2xl" color="white" margin="xs">A failure to become a creator</Text>
      </Flex>
      </div>
    )
  }
  
  export default Heroview
