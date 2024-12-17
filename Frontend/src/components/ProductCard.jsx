import { Box , Heading, HStack, IconButton, Image, Text} from '@chakra-ui/react'
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import React from 'react'
import { useColorMode } from './ui/color-mode';
import { useProductStore } from '../store/product';
import { Toaster, toaster } from '../components/ui/toaster';

const ProductCard = ({product}) => {
  const textColor = useColorMode("gray.600", "gray.200");
  const bg = useColorMode("white", "gray.800");

  const { deleteProduct } = useProductStore();
  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
          if(!success) {
            toaster.create({
              title: 'Error',
              description:message,
              status: "error",
              duration: 3000,
              isColsable:true
            })
          } else {
            toaster.create({
              title: 'Success',
              description:message,
              status: "success",
              duration: 3000,
              isClosable:true
            })
            //update the ui imemeditely without needing
          }
   
  }
  return (
    <Box 
        shadow={"lg"}
        rounded={"md"}
        overflow={"hidden"}
        transition={"all 0.3s"}
        _hover={{transform: "translateY(-5px", shadow: "xl"}}
        bg={bg}
      >
       <Toaster/>
        
        <Image src={product.Image} alt={product.name} h={48} w={"full"} objectFit={"cover"} />
        <Box p={4}>
           
              <Heading>
                {product.name}
              </Heading>
              <Text fontWeight={"bold"} fontSize={"xl"} color={textColor}  mb={4}>
                  ${product.price}
              </Text>

              <HStack wordSpacing={2}>
              <IconButton bg={"blue.400"}>
                 <CiEdit/>
              </IconButton>
              <IconButton bg={"red.400"}
                onClick={() => handleDeleteProduct(product._id)}>
                 <AiOutlineDelete/>
              </IconButton>

              </HStack>
        </Box>
        
    </Box>
  )
}

export default ProductCard