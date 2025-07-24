import { Router } from 'express';
import {
  obtenerPagosBancos,
  crearPagoBanco,
  deletePagoBancos,
  actualizarPagoBanco
} from '../controllers/pagosBancosController.js';

const router = Router();

router.get('/', obtenerPagosBancos);
router.post('/', crearPagoBanco);
router.delete('/:id', deletePagoBancos);
router.put('/:id', actualizarPagoBanco);

export default router;

