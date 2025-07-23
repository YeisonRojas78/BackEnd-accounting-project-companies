import { Router } from 'express';
import {
  obtenerPagosBancos,
  crearPagoBanco,
  eliminarPagoBanco,
  actualizarPagoBanco
} from '../controllers/pagosBancosController.js';

const router = Router();

router.get('/', obtenerPagosBancos);
router.post('/', crearPagoBanco);
router.delete('/:id', eliminarPagoBanco);
router.put('/:id', actualizarPagoBanco);

export default router;

