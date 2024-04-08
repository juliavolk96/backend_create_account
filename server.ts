import express from 'express';
import cors from 'cors';
import signupRoutes from './routes/signupRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', signupRoutes);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});