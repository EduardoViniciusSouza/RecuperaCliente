import { z } from 'zod';

export const productSchema = z.object({
    nome: z.string().min(1, 'O nome do produto é obrigatório'),
    preco: z.number().gte(1, 'O produto deve ter um preço'),
    descricao: z.string().max(500, 'A descrição está muito grande! ela pode ser de até 500 caracteres')
}).strict();

export const updateProductSchema = z.object({
    nome: z.string().min(1 , 'O nome do produto é obrigatório!').optional(),
    preco: z.number().gte(1, 'O produto dever ter um preço').optional(),
    descricao: z.string().max(500, 'A descrição está muito grande! ela pode ser de até 500 caracteres').optional()
}).strict(); 