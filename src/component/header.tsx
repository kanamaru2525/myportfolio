import { Button, Flex, Menu, MenuButton, MenuItem, MenuList } from "@yamada-ui/react"
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome"
import { useDisclosure } from "@yamada-ui/react"
import { faBars } from "@fortawesome/free-solid-svg-icons"


import Navi from "./Navi"
import Link from "next/link"

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toggleMenu = () => (isOpen ? onClose() : onOpen());
    return (
    <div>
    <Flex  justifyContent="flex-end" position="fixed" w="100%" display={{ base: "flex", lg: "none", }}>
        <Navi href="/"title="About" />
        <Navi href="/portfolio"title="Works" />
        <Navi href="/contact"title="Contact" />
    </Flex>

    <Flex justifyContent="flex-end" position="fixed"  w="100%" display={{ base: "none", lg: "flex", }}>
        <Menu >
            <MenuButton
            as={Button}
            rightIcon={<FontAwesomeIcon size="xl" icon={faBars} />}
            margin="1vh"
            fontSize="30px" 
            >
                Menu
        </MenuButton>

        <MenuList>
            <MenuItem fontSize="30px" ><Link href="/">About</Link></MenuItem>
            <MenuItem fontSize="30px" ><Link href="/portfolio">Works</Link></MenuItem>
            <MenuItem fontSize="30px" ><Link href="/contact">Contact</Link></MenuItem>
        </MenuList>
        </Menu>
    </Flex>
    </div>
    )
  }
  
  export default Header

