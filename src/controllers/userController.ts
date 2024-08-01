import { Request, Response } from "express";
import { getUserById, getAllUsers, createUser, updateUser, deleteUser } from "../services/userServices";
import { updateUserSchema, userSchema } from "../schemas/userSchema";

export const controllerGetUsers = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();

        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ error: 'erro ao consultar banco de dados.'});
    }
}

export const controllerGetUserById = async(req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const user = await getUserById(id);

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error: 'Usuário não encontrado ou erro ao buscar o usuário.'});
    }
}

export const controllerCreateUser = async (req: Request, res: Response) => {
    const validation = userSchema.safeParse(req.body);

    if (!validation.success) {
        return res.status(400).json({error: validation.error.errors});
    }

    try {
        const newUser = await createUser(validation.data);

        res.status(201).json(newUser);
    } catch (error: unknown) {
       res.status(500).json({error: 'Falha ao criar usuario'});
    }
}

export const controllerUpdateUser = async(req: Request, res: Response) => {
    const validation = updateUserSchema.safeParse(req.body);
    const {id} = req.params;

    if (!validation.success) {
        return res.status(400).json({error: validation.error.errors});
    }
    
    try {
        const updatedUser = await updateUser(id, validation.data);

        res.status(200).json(updatedUser);
    } catch (error: unknown) {
        res.status(500).json({error: 'falha ao atualizar usuario'});
    }
}

export const controllerDeleteUser = async(req: Request, res: Response) => {
    const {id} = req.params;

    try {
        deleteUser(id); 

        res.status(200).json('usuario deletado');
    } catch (error: unknown) {
        res.status(500).json({error: 'falha ao deletar usuario'});
    }
}


