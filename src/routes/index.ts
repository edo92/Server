import { Router } from 'express'
import { configs, notification, climate } from '../controllers'

const router = Router();

router.get('/configs', configs.getConfigs);
router.get('/notify', notification.notify);
router.post('/climate-data', climate.data);
router.get('/get-data', climate.getData);

export default router;