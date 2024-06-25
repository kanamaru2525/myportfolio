import { Flex, Link, Text } from "@yamada-ui/react"
interface Contactprps {
    href: string
    title: string
    subject:string
  }

const Contact = ({href,title,subject}:Contactprps) => {
    return (
        <Flex>
         <Text 
          fontSize="5xl"
          fontWeight="black"
          color="#141414"
         >
            {title}
         </Text>

         <Link 
          fontSize="5xl"
          fontWeight="black" 
          color="#FF9567" 
          _hover={{ color: "#141414" }}
          href={href} isExternal>
         {subject}
         </Link>
        </Flex>
    )
  }
  
  export default Contact
