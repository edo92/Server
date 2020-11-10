import { Router } from 'express'
import module from '../controllers/module';

const router = Router();

router.get('/connect', module.connect)

export default router;