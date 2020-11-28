import { Router } from 'express'
import { configs, climate } from '../controllers'

const router = Router();

router.get('/configs', configs.getConfigs);

router.get('/get-data', climate.sendClimate);
router.post('/climate-data', climate.receiveClimate);


export default router;