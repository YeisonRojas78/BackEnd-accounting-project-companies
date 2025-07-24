import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import pagosBancosRoutes from './routes/pagosBancosRoutes.js';
import pagosDianRoutes from './routes/pagosDianRoutes.js';
import usuariosRoutes from './routes/usuariosRoutes.js';
import rolRoutes from './routes/rolRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // ✅ Necesario
app.use(express.urlencoded({ extended: true })); // ✅ Opcional pero recomendable

// Rutas
app.use('/api/pagos-bancos', pagosBancosRoutes);
app.use('/api/pagos-dian', pagosDianRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/roles', rolRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

