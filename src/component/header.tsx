import { Flex } from "@yamada-ui/react"
import Navi from "./Navi"

const Header = () => {
    return (
    <Flex  justifyContent="flex-end" position="fixed" w="100%">
        <Navi href="/"title="About" />
        <Navi href="/portfolio"title="Works" />
        <Navi href="/contact"title="Contact" />
    </Flex>
    )
  }
  
  export default Header

