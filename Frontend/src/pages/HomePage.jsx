import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router'
import { useProductStore } from '../store/product'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
const HomePage = () => {

  const {fetchProducts, products} = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts]);
 console.log("products", products)

  return (
    <Container maxW={"container.xl"} py={12}>
      <VStack wordSpacing={6}>
         <Text
              fontSize={{base: "22", sm:"28"}}
              fontWeight={"bold"}
              textTransform={"uppercase"}
              textAlign={"center"}
              bgGradient="to-r" gradientFrom="cyan.400" gradientTo="blue.500"                   bgClip={"text"}
          >
              Current Product 
          </Text>

          <SimpleGrid 
            gap={10}
            w={"full"}
          >
            { products.map((product) => (
              <ProductCard key={product._id} product={product}/>
            ))}
          </SimpleGrid>

            {products.length === 0 && (
              <Text
           fontSize={"xl"}
           textAlign={"center"}
           fontWeight={"bold"}
           color={"gray.500"}
          >
            No product found {" "}
            <Link to={"/create"}>
                <Text color={"blue.500"}
                _hover={{textDecoration: "underline"}}
              >
                  Create a new product
              </Text>
            </Link>
          </Text>
            )}
          
      </VStack>
    </Container>
  )
}

export default HomePage