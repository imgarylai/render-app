import { Request, Response, NextFunction } from 'express';

interface HttpError extends Error {
  status?: number;
}

export const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' });
};

export const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
  });
};
