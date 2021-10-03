const urlApi = 'http://localhost:3000/filmes';
const lista = document.getElementById('lista');

const getFilmes = async () => {
    const response = await fetch(urlApi);
    const data = await response.json();
    console.log(data); 
    data.map((filme) => {
        lista.insertAdjacentHTML('beforeend', `
            <div class="column">
                <div class="card">
                    <img src="${filme.poster_url}" alt="Poster" style="width: 100%">
                    <div class="container-infos">
                        <h4>${filme.titulo}</h4>
                        <p>${filme.genero}</p>
                    </div>
                    <div class="container-rating">
                        <p>${filme.nota}</p>
                    </div>
                    <div class="rating">
                        <p class="card-rating">$${filme.assistido} 
                    </div>
                </div>
            </div>
        `)
    })  
}
getFilmes();

const postFilme = async (evento) => {
    evento.preventDefault();

    let titulo = document.getElementById('titulo').value;
    let genero = document.getElementById('genero').value;
    let nota = document.getElementById('nota').value;
    let poster_url = document.getElementById('poster_url').value;

    const filme = {
        titulo, //Se chave e valor são iguais, não é necessário duplicar (ex titulo: titulo)
        genero,
        nota,
        poster_url
    }

    const request = new Request(urlApi, {
        method: 'POST',
        body: JSON.stringify(filme),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })

    const response = await fetch(request);
    const result = await response.json();

    titulo.value = '';
    genero.value = '';
    nota.value = '';
    poster_url = '';

    lista.innerHTML = '';

    if(result) {
        getFilmes();
    }

}
