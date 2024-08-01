import { Router } from "express";
import apiKeyMiddleware from "../middlewares/apiKeyMiddleware";
import { controllerCreateProduct, controllerDeletProduct, controllerGetProducts, controllerGetProductsById, controllerUpdateProduct } from "../controllers/productController";

const productRouter = Router();

productRouter.use(apiKeyMiddleware);

productRouter.get('/products', controllerGetProducts); // todos os produtos
productRouter.get('/products/:id', controllerGetProductsById); // um produto (id)
productRouter.post('/products', controllerCreateProduct); // cria um produto
productRouter.put('/products/:id', controllerUpdateProduct); // modifica um produto (id)
productRouter.delete('/products/:id', controllerDeletProduct); // deleta um produto (id)

export default productRouter;
