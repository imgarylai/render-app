export interface Item {
  id: number;
  name: string;
  description?: string;
  createdAt: Date;
}

// In-memory storage
export const items: Item[] = [];

let nextId = 1;

export const generateId = () => nextId++;
