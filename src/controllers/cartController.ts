import { Request, Response } from "express";
import { getActiveCart, addProductToCart, getCartWithProducts} from "../services/cartService";

export const controllerAddProduct = async (req: Request, res: Response) => {
    const {idUsuario, idProduto} = req.body;

    if (!idUsuario || !idProduto) {
        return res.status(400).json({error: 'falta userId e productId'});
    }
    try {
        await addProductToCart(idUsuario, idProduto);

        return res.status(200).json({message: 'produto cadastrado!'});
    } catch (error: any) {
        return res.status(500).json({error: 'falha ao adicionar produto ao carrinho'})
    }
}

export const controllerGetActiveCart = async (req: Request, res: Response) => {
    const {idUsuario} = req.params;

    if (!idUsuario) {
        return res.status(400).json({error: 'falta o idUsuario'}); 
    }
    try {
        const carrinho = await getActiveCart(Number(idUsuario));

        return res.status(200).json(carrinho);
    } catch (error: any) {
        return res.status(500).json({error: 'falha ao encontrar carrinho'})
    }
}

export const controllerGetCartWithProducts = async (req: Request, res: Response) => {
    const {idUsuario} = req.params;

    if (!idUsuario) {
        return res.status(400).json({error: 'falta o idUsuario'});
    }

    try {
        const cartWithProducts = await getCartWithProducts(Number(idUsuario));

        return res.status(200).json(cartWithProducts);
    } catch (error: any) {
        return res.status(500).json({error: 'falha ao obter carrinho'});
    }
}
