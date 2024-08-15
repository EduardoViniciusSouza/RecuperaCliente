import { Router } from "express";
import apiKeyMiddleware from "../middlewares/apiKeyMiddleware";
import { controllerCreateCart, controllerGetActiveCart, controllerRemoveItemFromCart } from "../controllers/cartController";

const cartRouter = Router();

cartRouter.use(apiKeyMiddleware);

cartRouter.get('/inactive/cart'); // todos os carrinhos
cartRouter.get('/active/cart/:userId', controllerGetActiveCart); // unico carrinho (id)
cartRouter.post('/cart', controllerCreateCart); // cria carrinho
cartRouter.put('/cart/:id'); // altera carrinho por (id)
cartRouter.delete('/cart/:userId/remove/:productId', controllerRemoveItemFromCart); // deleta carrinho

export default cartRouter;