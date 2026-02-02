import { Router } from 'express';
import { getHome } from '../controllers/home.controller';
import { getHealth } from '../controllers/health.controller';
import itemRoutes from './item.routes';

const router = Router();

router.get('/', getHome);
router.get('/health', getHealth);
router.use('/items', itemRoutes);

export default router;
