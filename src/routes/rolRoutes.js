import express from 'express';
import {
  getRoles,
  createRol,
  updateRol,
  deleteRol,
} from '../controllers/rolController.js';

const router = express.Router();

router.get('/', getRoles);
router.post('/', createRol);
router.put('/:id', updateRol);
router.delete('/:id', deleteRol);

export default router;
