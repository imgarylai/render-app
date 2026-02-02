import { Router, Request, Response } from 'express';

const router = Router();

// Root endpoint
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the API' });
});

// Add more routes here as needed
// router.use('/users', require('./users'));
// router.use('/items', require('./items'));

export default router;
