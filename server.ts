import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import requireDir from 'require-dir';

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Inciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false } 
);
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001, () => {
    console.log('Server is running on PORT 3001');
});