 import { Product } from "../models/products.js";
 import mongoose from "mongoose";
 
 export const getProduct =  async (req, res) => {
     try {
          const products = await Product.find({});
          return res.status(200).json({
             success: true,
             message: 'Products fetched successfully',
             data: products
          })
     } catch (error) {
         console.error(error);
         res.status(500).json({
             success: false,
             message: 'Server Error'
         });
     }
 };

 export const createProduct = async (req, res) => {
     const product = req.body;
 
     if(!product.name || !product.price || !product.image) {
         return res.status(400).json({
             success: false,
             message: 'Please provide all required fields'
         });
     }
     
     const newProduct = new Product(product);
     try {
        await newProduct.save();
         res.status(200).json({
             success:true,
             message: 'Product created successfully',
             data: newProduct
         })
     } catch (error) {
         console.error(error);
         res.status(500).json({
             success: false,
             message: 'Server Error'
         });
     }
 
 };

 export const updateProduct =  async (req, res) => {
    try {
        const {id} = req.params;

        const product = req.body;

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        const updateProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        return res.status(200).json({
            success: true,
            message: 'Product updated successfully',
            data: updateProduct
        }) 
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
}

 export const deleteProduct = async (req, res) => {
     try {
         const {id} = req.params;

         if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
         }
 
         const product = await Product.findByIdAndDelete(id);
          return res.status(200).json({
             success: true,
             message: 'Product deleted successfully',
             data: product
          })
 
     } catch (error) {
         console.error(error);
         res.status(500).json({
             success: false,
             message: 'Server Error'
         });
        }
    };
    
