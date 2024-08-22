import { Router } from "express";
import apiKeyMiddleware from "../middlewares/apiKeyMiddleware";
import { controllerAddProduct, controllerGetActiveCart, controllerGetCartWithProducts, controllerRemoveProductOfTheCart } from "../controllers/cartController";

const cartRouter = Router();

cartRouter.use(apiKeyMiddleware);

cartRouter.get('/buyed/cart'); // todos os carrinhos ja comprados
cartRouter.get('/active/cart/:idUsuario', controllerGetActiveCart); // unico carrinho (id)
cartRouter.get('/cart/:idUsuario/produtos', controllerGetCartWithProducts) // carrinho com os produtos.
cartRouter.post('/cart/add', controllerAddProduct); // cria carrinho
cartRouter.delete('/cart/remove', controllerRemoveProductOfTheCart ); // Remove itens do carrinho

export default cartRouter;