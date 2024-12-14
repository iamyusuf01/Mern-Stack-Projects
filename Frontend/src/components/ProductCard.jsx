import { Box } from '@chakra-ui/react'
import React from 'react'

const ProductCard = ({product}) => {
  return (
    <Box 
        shadow={"lg"}
        rounded={"md"}
        overflow={"hidden"}
        transition={"all 0.3s"}
        _hover={{transform: "translateY(-5px", shadow: "xl"}}
    >
        <Image src={product.Image} alt={product.name} h={48} w={"full"} objectFit={"cover"} />
    </Box>
  )
}

export default ProductCard