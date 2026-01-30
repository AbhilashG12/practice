import express, { type Request,type Response } from 'express';

const app = express();
const PORT = 8000;


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World from Express and TypeScript!');
});


app.listen(PORT, () => {
  console.log(`Server is running on [http://localhost:${PORT}](http://localhost:${PORT})`);
});
