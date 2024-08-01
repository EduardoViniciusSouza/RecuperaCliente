import { Router } from "express";
import apiKeyMiddleware from "../middlewares/apiKeyMiddleware";

const cartRouter = Router();

cartRouter.use(apiKeyMiddleware);

cartRouter.get('/carts'); // todos os carrinhos
cartRouter.get('/carts/:id'); // unico carrinho (id)
cartRouter.post('/carts'); // cria carrinho
cartRouter.put('/carts/:id'); // altera carrinho por (id)
cartRouter.delete('/carts/:id'); // deleta carrinho

export default cartRouter;