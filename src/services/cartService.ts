import { Cart, CartItem } from "../interfaces/Cart";
import supabase from "../config/supabaseClient";

export const getActiveCart = async (userId: number): Promise<Cart | null> => {
    const {data, error} = await supabase
    .from('carrinho')
    .select('*')
    .eq('idUsuario', userId)
    .eq('comprado', false)
    .single(); 

    if (error) {
        throw new Error(error.message);
    }
    return data as Cart;
}

export const getBuyedCarts= async (userId: number): Promise<Cart[]> => {
    const {data, error} = await supabase
    .from('carrinho')
    .select('*')
    .eq('idUsuario', userId)
    .eq('comprado', true)

    if (error) {
        throw new Error(error.message);
    }
    return data as Cart[];
}

const getCartProducts =async (cartId: number): Promise<CartItem[]> => {
    const {data, error} = await supabase
    .from('carrinhoProduto')
    .select('*')
    .eq('idCarrinho', cartId);

    if (error) throw new Error(error.message);

    return data as CartItem[];
}

export const getCartWithProducts = async (userId: number) => {
    try {
        const cart = await getActiveCart(userId);

        if (!cart) {
            return {cart: null, products: [ ]};
        }

        const products = await getCartProducts(cart.id);

        return {cart, products};
    } catch (error: any) {
        console.error('erro ao obter carrinho e itens', error);
        throw error;
    }
}

const createCart = async (userId: number): Promise<Cart | null> => {
    const {data, error} = await supabase
    .from('carrinho')
    .insert([{userId, comprado: false}])
    .single();

    if (error) {
        throw new Error(error.message);
    }
    return data as Cart; 
}

export const addProductToCart = async (userId: number, productId: number): Promise<void> => {
    try {
        let cart = await getActiveCart(userId);

        if (!cart) {
            cart = await createCart(userId);
        }

        const {error} = await supabase
        .from('carrinhoProduto')
        .insert([{idCarrinho: cart?.id, idProduto: productId}]);

        if (error) {
            console.error('Erro ao adiocionar algo no carrinho: ', error);
        }
    } catch (error: any) {
        console.error('Unexpected error: ', error); 
    }
}   


export const removeProductOfTheCart = async (cartId: number, productId: number): Promise<void> => {
    const {error} = await supabase
    .from('carrinhoProduto')
    .delete()
    .eq('idProduto', productId)
    .eq('idCarrinho', cartId)

    if (error) {
        throw new Error(error.message);
    }
}