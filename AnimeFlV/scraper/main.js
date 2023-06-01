let arrEpisodio = []
let arrEmision = []
let arrEstreno = []

let imgEpisodio = document.querySelectorAll('span img')
let linkEpisodio = document.querySelectorAll('li a.fa-play')
let titleEpisodio = document.querySelectorAll('strong.Title')
let capiEpisodio = document.querySelectorAll('span.Capi')

let linkEmision = document.querySelectorAll('a.fa-play-circle')

let imgEstreno = document.querySelectorAll('figure img')
let linkEstreno = document.querySelectorAll('article>a')
let titleEstreno = document.querySelectorAll('h3.Title')

for (let i = 0; i < linkEpisodio.length; i++) {
    arrEpisodio.push({
        img: imgEpisodio[i].src,
        link: linkEpisodio[i].href,
        title: titleEpisodio[i].textContent,
        capi: capiEpisodio[i].textContent
    })
}

for (let i = 0; i < linkEmision.length; i++) {
    arrEmision.push({
        link: linkEmision[i].href,
        title: linkEmision[i].textContent
    })
}

for (let i = 0; i < linkEstreno.length; i++) {
    arrEstreno.push({
        link: linkEstreno[i].href,
        title: titleEstreno[i].textContent,
        img: imgEstreno[i].src
    })
}

var url = 'http://localhost:3000/todo';

var data = {
    estreno: arrEstreno,
    episodio: arrEpisodio,
    emision: arrEmision,
};

fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));

let arrLista = []

let linkLista = document.querySelectorAll('article>a')
let titleLista = document.querySelectorAll('h3.Title')
let imgLista = document.querySelectorAll('figure>img')


for (let i = 0; i < linkLista.length; i++) {
    arrLista.push({
        link: linkLista[i].href,
        title: titleLista[i].textContent,
        img: imgLista[i].src,
    })
}
console.log(arrLista)

var url = 'http://localhost:3000/lista';

var data = {
    lista: arrLista
};

fetch(url, {
    method: 'POST', 
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }

})
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));


