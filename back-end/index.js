const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const port = 3000;

const FilmesRouter = require('./routers/filmes.routes');
app.use('/filmes', FilmesRouter);



app.listen(port, () => {
    console.log(`O servidor está rodando na porta http://localhost:${port}`)
})