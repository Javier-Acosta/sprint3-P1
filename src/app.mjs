import express from 'express';

import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';
import router from './routes/superHeroRoutes.mjs';

const app = express();
const PORT = 3000;

app.use(express.json());

connectDB();
app.use('/api', router);

app.use((req, res) => {
    res.status(400).send({ mensaje: "Ruta no encontrada" });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});