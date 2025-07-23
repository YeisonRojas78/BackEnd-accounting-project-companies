import express from 'express';
import {
  getPagosDian,
  createPagoDian,
  updatePagoDian,
  deletePagoDian
} from '../controllers/pagosDianController.js';

const router = express.Router();

router.get('/', getPagosDian);
router.post('/', createPagoDian);
router.put('/:id', updatePagoDian);
router.delete('/:id', deletePagoDian);

export default router;
