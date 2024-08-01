import supabase from "../config/supabaseClient";

export const createProduct = async (productData: any) => {

    const newProduct = {
        ...productData
    };

    const {data, error} = await supabase
    .from('produto')
    .insert([newProduct]);

    if (error) throw error.message;

    return data; 
}

export const updateProduct = async (id: string, productData: any) => {
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

export const getProductById = async (id: string) => {
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
    .select('*')

    if (error) throw error.message;

    return data; 
}

export const deleteProduct = async(id: string) => {
    const {data, error} = await supabase
    .from('produto')
    .delete()
    .eq('id', id)

    if (error) throw error.message;

    return data;
}