import { Request, Response } from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../services/productService";
import { productSchema, updateProductSchema } from "../schemas/productSchema";

export const controllerCreateProduct = async (req: Request, res: Response) => {
    const validation = productSchema.safeParse(req.body);
    
    if (!validation.success) {
        return res.status(500).json({error: validation.error.errors});
    }
    try {
        const newProduct = await createProduct(validation.data);

        res.status(201).json(newProduct);
    } catch (error: unknown) {
        res.status(500).json({error: 'falha ao criar Produto'}); 
    }
}

export const controllerUpdateProduct = async (req: Request, res: Response) => {
    const validation = updateProductSchema.safeParse(req.body);
    const {id} = req.params;

    if (!validation.success) {
        return res.status(500).json({error: validation.error.errors});
    }

    try {
        const updatedProduct = await updateProduct(Number(id), validation.data);

        res.status(200).json(updatedProduct);
    } catch (error: unknown) {
        res.status(500).json({error: 'falha ao atualizar produto'});
    }
}

export const controllerGetProducts = async (req: Request, res: Response) => {
    try {
        const products = await getAllProducts();
        
        res.status(200).json(products);
    } catch (error: unknown) {
        res.status(500).json({error: 'erro ao consultar banco de dados'});
    }
}

export const controllerGetProductsById = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const product = await getProductById(Number(id));

        res.status(200).json(product);
    } catch (error: unknown) {
        res.status(500).json({error: 'Usuário não encontrado ou erro ao buscar o usuário.'});
    }
}

export const controllerDeletProduct = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        deleteProduct(Number(id));

        res.status(200).json('Produto deletado');
    } catch (error: unknown) {
        res.status(500).json('Falha ao deletar Produto');
    }
}