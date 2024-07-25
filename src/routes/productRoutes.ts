import { Router } from "express";
import apiKeyMiddleware from "../middlewares/apiKeyMiddleware";

const productRouter = Router();

productRouter.use(apiKeyMiddleware);

productRouter.get('/products'); // todos os produtos
productRouter.get('/products/:id'); // um produto (id)
productRouter.post('/products'); // cria um produto
productRouter.put('/products/:id'); // modifica um produto (id)
productRouter.delete('/products/:id'); // deleta um produto (id)

export default productRouter;
