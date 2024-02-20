import express, { Request, Response } from 'express';
import { getMachineHealth } from './machineHealth';
import { getUser } from './user';

const app = express();
const port = 3001;

// Middleware to parse JSON request bodies
app.use(express.json());

// Endpoint to get machine health score
app.post('/machine-health', (req: Request, res: Response) => {
  const result = getMachineHealth(req);
  if (result.error) {
    res.status(400).json(result);
  } else {
    res.json(result);
  }
});

app.post('/auth/login', (req: Request, res: Response) => {
  const userResult = getUser(req);

  res.status(200).json({ userName: userResult ?? null });
});

app.listen(port, () => {
  console.log(`API is listening at http://localhost:${port}`);
});
