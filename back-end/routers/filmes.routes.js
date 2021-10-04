const express = require('express');
const router = express.Router();

const Filmes = [
    {
        id: 1633316999468,
        titulo: "Pride and prejudice",
        genero: "Romance",
        nota: 10,
        poster_url: "https://wallpapercave.com/wp/wp2069983.jpg",
        assistido: true
    }
]

router.get('/', (req, res) => {
    res.send(Filmes);
})

router.get('/:id', (req, res) => {
    const idParam = req.params.id;
    const index = Filmes.findIndex(filme => filme.id == idParam);
    const filme = Filmes[index];
    res.send(filme);
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

router.put('/:id', (req, res) => {
    const filmeEdit = req.body;
    const id = req.params.id;
    let filmePreCadastrado = Filmes.find((filme) => filme.id == id);

    filmePreCadastrado.titulo = filmeEdit.titulo;
    filmePreCadastrado.genero = filmeEdit.genero;
    filmePreCadastrado.nota = filmeEdit.nota;
    filmePreCadastrado.poster_url = filmeEdit.poster_url;

    res.send({
        message: 'Filme atualizado com sucesso!',
        data: filmePreCadastrado
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = Filmes.findIndex((filme) => filme.id == id);
    Filmes.splice(index, 1);

    res.send({
        message: 'filme excluido com sucesso',
    })
})

module.exports = router;