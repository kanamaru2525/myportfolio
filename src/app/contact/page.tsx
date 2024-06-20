import Footer from '@/component/footer'
import Header from '@/component/header'
import { Box } from '@yamada-ui/react'
import React from 'react'

const page = () => {
  return (
    <div>
       <Box h="100vh"> 
            
       <Box
        display={{ base: "none", lg: "danger" }}
        w="full"
        p="md"
        bg={{ base: "primary", lg: "danger" }}
        >
        This is Box
        </Box>
       </Box>
    </div>
  )
}

export default page
