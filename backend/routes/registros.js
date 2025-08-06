import { Router } from 'express';
const router = Router();
import { getRegistros, crearRegistro, actualizarRegistro, borrarRegistro, generarPDF } from '../controllers/registroController';

router.get('/registros', getRegistros);
router.post('/registro', crearRegistro);
router.put('/registro/:id', actualizarRegistro);
router.delete('/registro/:id', borrarRegistro);
router.get('/pdf', generarPDF);

export default router;
