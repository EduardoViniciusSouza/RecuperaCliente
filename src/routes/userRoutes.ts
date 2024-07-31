import { Router } from "express";
import apiKeyMiddleware from "../middlewares/apiKeyMiddleware";
import { controllerCreateUser, controllerDeleteUser, controllerGetUserById, controllerGetUsers, controllerUpdateUser } from "../controllers/userController";

const userRouter = Router();

userRouter.use(apiKeyMiddleware);

userRouter.get('/users', controllerGetUsers); //todos os usuarios
userRouter.get('/users/:id', controllerGetUserById); // um unico usuario (id)
userRouter.post('/users', controllerCreateUser); // cria usuario
userRouter.put('/users/:id', controllerUpdateUser); // altera usuario por (id)
userRouter.delete('/users/:id', controllerDeleteUser); // deleta usuario

export default userRouter;