import { hashPassword } from "../utils/userBcrypt";
import supabase from "../config/supabaseClient";

export const createUser = async (userData: any) => { 
    const hashedPassword = await hashPassword(userData.senha); 

    const newUser = {
        ...userData,
        senha: hashedPassword,
    };

    const {data, error} = await supabase 
    .from('usuario')
    .insert([newUser]);

    if (error) throw error.message;

    return data; 
}

export const updateUser = async (id: string, userData: any) => {
    if (userData.senha) {
        userData.senha = await hashPassword(userData.senha);
    }

    const updatedUser = {
        ...userData,
        id,
    };

    const {data, error} = await supabase
    .from('usuario')
    .update(updatedUser)
    .eq('id', id);

    if (error) throw error.message;

    return data;
}

export const getUserById = async(id: string) => {
    const {data, error} = await supabase
    .from('usuario')
    .select('*')
    .eq('id', id)
    .single();

    if (error) throw error.message;

    return data;
}

export const getAllUsers = async() => {
    const {data, error} = await supabase
    .from('usuario')
    .select('*')

    if (error) throw error.message;

    return data;
}

export const deleteUser = async(id: string) => {
    const {data, error} = await supabase
    .from('usuario')
    .delete()
    .eq('id', id)

    if (error) throw error.message;

    return data;
}