import express from 'express';
import { connect } from 'mongoose';
import requireDir from 'require-dir';
import allowCors from './src/config/cors';

// Iniciando o App
const app = express();
app.use(express.json());
app.use(allowCors);

// Inciando o DB
run();

async function run(): Promise<void> {
    await connect(
        'mongodb://localhost:27017/nodeapi',
        { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false } 
    );
}
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001, () => {
    console.log('Server is running on PORT 3001');
});