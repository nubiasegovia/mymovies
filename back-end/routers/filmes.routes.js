const express = require('express');
const router = express.Router();

const Filmes = [
    {
        id: Date.now(),
        titulo: "Pride and prejudice",
        genero: "Romance",
        nota: 10,
        poster_url: "https://wallpapercave.com/wp/wp2069983.jpg",
        assistido: true

    },
    {
        id: Date.now(),
        titulo: "1917",
        genero: "Drama, Guerra",
        nota: 10,
        poster_url: "https://http2.mlstatic.com/D_NQ_NP_974025-MLB40832700311_022020-O.jpg",
        assistido: true

    },
]

router.get('/', (req, res) => {
    res.send(Filmes);
})

router.get('/:id', (req, res) => {
    const idParam = req.params.id;
    const index = Filmes.findIndex((filme) => {
        return filme.id == idParam;  
    })
})

router.post('/add', (req, res) => {
    const filme = req.body;
    filme.id = Date.now();
    Filmes.push(filme);
    res.send({
        message: 'Filme cadastrado com sucesso!',
        data: filme,
    });
})




module.exports = router;