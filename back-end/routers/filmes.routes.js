const express = require('express');
const router = express.Router();

const filmes = [
    {
        id: 1,
        titulo: "Pride and prejudice",
        genero: "Romance",
        nota: 10,
        poster_url: "https://wallpapercave.com/wp/wp2069983.jpg",
        assistido: true

    },
    {
        id: 2,
        titulo: "1917",
        genero: "Drama, Guerra",
        nota: 10,
        poster_url: "https://http2.mlstatic.com/D_NQ_NP_974025-MLB40832700311_022020-O.jpg",
        assistido: true

    }
]

router.get('/', (req, res) => {
    res.send(filmes);
})

router.post('/add', (req, res) => {
    req.body
})

module.exports = router;