import { Router } from 'express'
import configs from '../controllers/configs'
import climate from '../controllers/climate'

const router = Router();

router.get('/configs', configs.getConfigs);
router.post('/climate-data', climate.data);

export default router;