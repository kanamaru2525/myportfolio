import { Box, Image, Text,Center, Grid, GridItem } from "@yamada-ui/react"

const Skills = () => {
    return (
       <div>
            <Box display={{ base: "none", lg: "flex", }} margin="auto">
            
            <Grid templateColumns="repeat(1,auto)" gap={"md"} margin="5vh">
                <GridItem w="full"  rounded="md" bg="#ffffff">
                    <Center>
                        <Image src="/images/figma.png" alt="me" zoom="0.5"/>
                    </Center>
                    <Text fontSize="3xl" w="100%" textAlign="center">Figma</Text>
                    <Text fontSize="3xl" w="100%" textAlign="center">習熟度:★★★</Text>
                </GridItem>
                <GridItem w="full"  rounded="md" bg="#ffffff">
                    <Center>
                        <Image src="/images/htmls.png"  alt="me" zoom="0.5"/>
                    </Center>
                    <Text fontSize="3xl" w="100%" textAlign="center">HTMLL/Javascript/CSS</Text>
                    <Text fontSize="3xl" w="100%" textAlign="center">習熟度:★★</Text>
                </GridItem>
                <GridItem w="full"  rounded="md" bg="#ffffff">
                    <Center>
                        <Image src="/images/Nextjs.png"  alt="me" zoom="0.5"/>
                    </Center>
                    <Text fontSize="3xl" w="100%"textAlign="center">Next.js</Text>
                    <Text fontSize="3xl" w="100%" textAlign="center">習熟度:★</Text>
                </GridItem>
                <GridItem w="full"  rounded="md" bg="#ffffff">
                    <Center>
                        <Image src="/images/daVinci.png"  alt="me" zoom="0.5"/>
                    </Center>
                    <Text fontSize="3xl" w="100%"textAlign="center">DaVinci Resolve</Text>
                    <Text fontSize="3xl" w="100%" textAlign="center">習熟度:★★</Text>
                </GridItem>
                <GridItem w="full"  rounded="md" bg="#ffffff">
                    <Center>
                        <Image src="/images/colors.png"  alt="me" zoom="0.5"/>
                    </Center>
                    <Text fontSize="3xl" w="100%"textAlign="center">色彩検定</Text>
                    <Text fontSize="3xl" w="100%" textAlign="center">習熟度:2級</Text>
                </GridItem>
                </Grid> 
                
            </Box>
            


        <Box display={{ base: "flex", lg: "none", }}>
            <Grid templateColumns="repeat(2, 1fr)" gap={"md"} margin="5vh" w="65vw" >
              <GridItem w="full"  rounded="md" bg="#ffffff">
                  <Center>
                    <Image src="/images/figma.png" alt="me" zoom="0.5"/>
                  </Center>
                  <Text fontSize="3xl" w="100%" textAlign="center">Figma</Text>
                  <Text fontSize="3xl" w="100%" textAlign="center">習熟度:★★★</Text>
              </GridItem>
              <GridItem w="full"  rounded="md" bg="#ffffff">
                  <Center>
                    <Image src="/images/htmls.png"  alt="me" zoom="0.5"/>
                  </Center>
                  <Text fontSize="3xl" w="100%" textAlign="center">HTMLL/Javascript/CSS</Text>
                  <Text fontSize="3xl" w="100%" textAlign="center">習熟度:★★</Text>
              </GridItem>
              <GridItem w="full"  rounded="md" bg="#ffffff">
                  <Center>
                    <Image src="/images/Nextjs.png"  alt="me" zoom="0.5"/>
                  </Center>
                  <Text fontSize="3xl" w="100%"textAlign="center">Next.js</Text>
                  <Text fontSize="3xl" w="100%" textAlign="center">習熟度:★</Text>
              </GridItem>
              <GridItem w="full"  rounded="md" bg="#ffffff">
                  <Center>
                    <Image src="/images/daVinci.png"  alt="me" zoom="0.5"/>
                  </Center>
                  <Text fontSize="3xl" w="100%"textAlign="center">DaVinci Resolve</Text>
                  <Text fontSize="3xl" w="100%" textAlign="center">習熟度:★★</Text>
              </GridItem>
              <GridItem w="full"  rounded="md" bg="#ffffff">
                  <Center>
                    <Image src="/images/colors.png"  alt="me" zoom="0.5"/>
                  </Center>
                  <Text fontSize="3xl" w="100%"textAlign="center">色彩検定</Text>
                  <Text fontSize="3xl" w="100%" textAlign="center">習熟度:2級</Text>
              </GridItem>
            </Grid> 
        </Box>
       </div>
    )
  }
  
  export default Skills