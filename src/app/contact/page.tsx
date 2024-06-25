import Contact from '@/component/contact'
import { Box, Center, Flex, Link, Text } from '@yamada-ui/react'
import React from 'react'

const page = () => {
  return (
    <div>
       <Center h="95vh" w="full" > 
        
        <Box>
          <Contact title='X:' href='https://x.com/kanamar26'subject='@kanamar26' />
          <Contact title='Github:' href='https://github.com/kanamaru2525' subject='kanamaru2525' />
          <Contact title='Gmail: ' href='mailto:mfkanamaru@gmail.com' subject='mfkanamaru＠gmail.com'/> 
        </Box>
        
       </Center>
    </div>
  )
}

export default page
