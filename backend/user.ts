import users from './data/userData.json';
import { Request } from 'express';

export function getUser(req: Request) {
  const { userName }: { userName: string } = req.body;

  const userLookup = users.find((user) => user.name === userName);

  return userLookup;
}
