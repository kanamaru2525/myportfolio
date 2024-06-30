import { Link } from "@yamada-ui/react"

interface Naviprps {
    href: string
    title: string
  }

const Navi = ({href,title}:Naviprps) => {
    return (
      
      <Link 
        fontWeight="black" 
        fontSize="6xl" 
        color="#141414" 
        _hover={{ color: "#FF9567" }} 
        
        marginRight="25px"
        marginLeft="25px"
        paddingTop="5"

        href={href}
        >
          {title}
        </Link>
      
    )
  }
  
  export default Navi