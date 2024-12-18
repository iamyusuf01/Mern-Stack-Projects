import { Box , Input, Heading, HStack, IconButton, Image, Text, useDisclosure, VStack, Button} from '@chakra-ui/react'
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { useColorMode } from './ui/color-mode';
import { useProductStore } from '../store/product';
import { Toaster, toaster } from '../components/ui/toaster';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/modal'
import { useState } from 'react';

const ProductCard = ({product}) => {
  const [ updatedProduct, setUpdatedProduct ] = useState(product)

  const textColor = useColorMode("gray.600", "gray.200");
  const bg = useColorMode("white", "gray.800");

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { deleteProduct, updateProduct } = useProductStore();

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
        const handleUpdateProduct = async (pid, updatedProduct) => {
          const {success, message} =  await updateProduct(pid, updatedProduct);
            onClose();
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
                <Button bg={"blue.400"} onClick={onOpen}>
                  <CiEdit/>
                </Button>
                <Button bg={"red.400"}
                  onClick={() => handleDeleteProduct(product._id)}>
                  <AiOutlineDelete/>
                </Button>
              </HStack>
        </Box>
         <Box>
                    {/** modal for edit */}  
              <Modal isOpen={isOpen} onClose={onClose} >
              <ModalOverlay/>

              <ModalContent>
               <ModalHeader>Update Product</ModalHeader>
                  <ModalCloseButton/>
                  <ModalBody>
                     <VStack wordSpacing={4}>
                       <Input
                        placeholder='Product Name '
                        name='name'
                        value={updatedProduct.name}
                        onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})}
                       />
                       <Input
                        placeholder='Price '
                        name='price'
                        value={updatedProduct.price}
                        onChange={(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})}
                       
                       />
                       <Input
                        placeholder='Image URL'
                        name='image'
                        value={updatedProduct.Image}
                        onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})}
                       />
                     </VStack>
                  </ModalBody>

                  <ModalFooter>
                     <Button colorSchema='blue' mr={3}
                       onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
                       Update
                     </Button>
                     <Button variant={'ghost'} onClick={onClose}>
                       Cancel
                     </Button>
                  </ModalFooter>
              </ModalContent>

          </Modal>
         </Box>
    </Box>
  )
}

export default ProductCard