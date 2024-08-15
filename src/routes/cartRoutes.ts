import { Router } from "express";
import apiKeyMiddleware from "../middlewares/apiKeyMiddleware";
import { controllerAddProduct, controllerGetActiveCart, controllerGetCartWithProducts } from "../controllers/cartController";

const cartRouter = Router();

cartRouter.use(apiKeyMiddleware);

cartRouter.get('/inactive/cart'); // todos os carrinhos
cartRouter.get('/active/cart/:idUsuario', controllerGetActiveCart); // unico carrinho (id)
cartRouter.get('/cart/:idUsuario/produtos', controllerGetCartWithProducts) // carrinho com os produtos.
cartRouter.post('/cart/add', controllerAddProduct); // cria carrinho
cartRouter.put('/cart/:id'); // altera carrinho por (id)
cartRouter.delete('/cart/:idUsuario/remove/:productId', ); // deleta carrinho

export default cartRouter;