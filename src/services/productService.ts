import z from "zod";
import supabase from "../config/supabaseClient";
import { productSchema, updateProductSchema } from "../schemas/productSchema";

export const createProduct = async (productData: z.infer<typeof productSchema>) => {

    const newProduct = {
        ...productData
    };

    const {data, error} = await supabase
    .from('produto')
    .insert([newProduct]);

    if (error) throw error.message;

    return data; 
}

export const updateProduct = async (id: number, productData: z.infer<typeof updateProductSchema>) => {

    const updatedProduct = {
        ...productData,
        id,
    };

    const {data, error} = await supabase
    .from('produto')
    .update(updatedProduct)
    .eq('id', id);

    if (error) throw error.message;

    return data;
}

export const getProductById = async (id: number) => {
    const {data, error} = await supabase
    .from('produto')
    .select('*')
    .eq('id', id)
    .single();

    if (error) throw error.message;

    return data
}

export const getAllProducts = async() => {
    const {data, error} = await supabase
    .from('produto')
    .select('*');

    if (error) throw error.message;

    return data; 
}

export const deleteProduct = async(id: number) => {
    const {data, error} = await supabase
    .from('produto')
    .delete()
    .eq('id', id);

    if (error) throw error.message;

    return data;
}