import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Define a GET route for the root URL '/'
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World from Express and TypeScript!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on [http://localhost:${PORT}](http://localhost:${PORT})`);
});
