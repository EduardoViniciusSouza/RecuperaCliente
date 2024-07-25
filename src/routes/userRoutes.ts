import { Router } from "express";
import apiKeyMiddleware from "../middlewares/apiKeyMiddleware";

const userRouter = Router();

userRouter.use(apiKeyMiddleware);

userRouter.get('/users'); //todos os usuarios
userRouter.get('/users/:id'); // um unico usuario (id)
userRouter.post('users'); // cria usuario
userRouter.put('/users/:id'); // altera usuario por (id)
userRouter.delete('/users/:id'); // deleta usuario

export default Router