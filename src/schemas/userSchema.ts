import { z } from 'zod'; 

export const userSchema = z.object({
    nome: z.string().min(1, 'Seu nome é obtigatório!'),
    email: z.string().email('Confime se seu email está correto'),
    senha: z.string().min(8, 'A senha deve conter no minimo 8 caracteres').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'A senha deve conter letras maiúsculas, minúsculas e números')
}).strict();

export const updateUserSchema = z.object({
    nome: z.string().min(1, 'Seu nome é obrigatório"').optional(),
    email: z.string().email('confira seu email').optional(),
    senha: z.string().min(8, 'A senha deve conter no minimo 8 caracteres').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'A senha deve conter letras maiúsculas, minúsculas e números').optional()
}).strict();