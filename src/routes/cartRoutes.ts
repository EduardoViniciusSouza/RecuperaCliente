import { Router } from "express";
import apiKeyMiddleware from "../middlewares/apiKeyMiddleware";

const cartRouter = Router();

cartRouter.use(apiKeyMiddleware);

cartRouter.get('/inactive/cart'); // todos os carrinhos
cartRouter.get('/active/cart/:userId', ); // unico carrinho (id)
cartRouter.post('/cart', ); // cria carrinho
cartRouter.put('/cart/:id'); // altera carrinho por (id)
cartRouter.delete('/cart/:userId/remove/:productId', ); // deleta carrinho

export default cartRouter;