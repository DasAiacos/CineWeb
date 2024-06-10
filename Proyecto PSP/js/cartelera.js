import { movies } from '../data/data.js';

// recorrer todas las peliculas y crear la tarjeta
document.addEventListener('DOMContentLoaded', function () {
    const cartelera = document.getElementById('cartelera');
    movies.forEach(movie => cartelera.appendChild(createMovieSection(movie)));
});

function createMovieSection(movie) {
    const section = createElement('section', 'cartelera col');
    const div = createElement('div', 'pelicula');

    div.appendChild(createImage(movie));
    div.appendChild(createTextCenter(movie));

    section.appendChild(div);
    return section;
}

function createElement(tag, className, textContent = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
}

function createImage(movie) {
    const img = createElement('img', 'rounded rounded-2');
    img.src = movie.imageUrl;
    img.alt = movie.title;
    return img;
}

function createTextCenter(movie) {
    const textCenter = createElement('div', 'text-center');

    textCenter.appendChild(createElement('h4', '', movie.title));
    textCenter.appendChild(createElement('p', '', movie.description));
    textCenter.appendChild(createElement('p', '', `Fecha de estreno: ${movie.releaseDate}`));
    textCenter.appendChild(createLinkButton('Comprar', '../pages/formulario.html')); // Replace '#' with the desired URL

    return textCenter;
}

function createLinkButton(text, url) {
    const link = createElement('a', 'custom-link-button rounded rounded-2', text);
    link.href = url;
    return link;
}