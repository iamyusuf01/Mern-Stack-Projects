import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router'
import { BsMoonFill, BsPlusSquare, BsSunFill } from "react-icons/bs";
import { useColorMode } from './ui/color-mode';
const Navbar = () => {

  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm:"row"
            }}
        >

        <Text
            fontSize={{base: "22", sm:"28"}}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient="to-r" gradientFrom="cyan.400" gradientTo="blue.500"
            bgClip={"text"}
        >
            <Link to={"/"}>
                Product Store 🛒
            </Link>
        </Text>

        <HStack>
            <Link>
                <Button>
                    <BsPlusSquare/>
                </Button>
            </Link>
            <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <BsMoonFill/> : <BsSunFill/>}
            </Button>
        </HStack>

        </Flex>
    </Container>
  )
}

export default Navbar