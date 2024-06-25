import { Flex, Motion,Text } from "@yamada-ui/react"
const Heroview = () => {
    return (
        <Flex h="100vh" bg="#B9C0CC" justifyContent="center" alignItems="center" flexDirection="column" display="flex">   
        <Motion whileHover={{ scale: 1.1 }}>
          <Text fontSize="96px"fontWeight="black"color="white" borderBottom="solid">KANAMARU TAISEI</Text>
        </Motion>
        <Text fontSize="32px" color="white" margin="25px">A failure to become a creator</Text>
    </Flex>

    )
  }
  
  export default Heroview
