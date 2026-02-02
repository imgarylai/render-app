import { Request, Response } from 'express';
import { items, generateId, Item } from '../models/item.model';

interface IdParam {
  id: string;
}

// GET /items
export const getItems = (req: Request, res: Response) => {
  res.json(items);
};

// GET /items/:id
export const getItem = (req: Request<IdParam>, res: Response) => {
  const id = parseInt(req.params.id);
  const item = items.find((i) => i.id === id);

  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  res.json(item);
};

// POST /items
export const createItem = (req: Request, res: Response) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const item: Item = {
    id: generateId(),
    name,
    description,
    createdAt: new Date(),
  };

  items.push(item);
  res.status(201).json(item);
};

// PUT /items/:id
export const updateItem = (req: Request<IdParam>, res: Response) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex((i) => i.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  const { name, description } = req.body;
  items[index] = { ...items[index], name: name ?? items[index].name, description };

  res.json(items[index]);
};

// DELETE /items/:id
export const deleteItem = (req: Request<IdParam>, res: Response) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex((i) => i.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  const deleted = items.splice(index, 1)[0];
  res.json(deleted);
};
