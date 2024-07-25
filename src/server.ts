import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes'
import productRouter from './routes/productRoutes';
import cartRouter from './routes/cartRoutes';

dotenv.config();

const app = express(); 
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/u', userRoutes);
app.use('/api/p', productRouter);
app.use('/api/c', cartRouter);

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta:${PORT}`);
})
