import data from './data.json';

const container = document.querySelector('#container-itens') as HTMLElement;

interface Data {
    cardDescription: string;
    tag: string;
    thumb: string;
    titulo: string;
    altImage: string;
}

function createFigure(data: Data) {
    const figure = document.createElement('figure');
    const section = document.createElement('section');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');

    figure.classList.add('figure');
    section.classList.add('img-box');
    div.classList.add('img_hover');

    img.src = data.thumb;
    img.alt = data.altImage;
    p.textContent = data.cardDescription;
    h2.textContent = data.titulo;

    container.append(figure);
    figure.appendChild(section);
    section.appendChild(img);
    section.appendChild(div);
    div.appendChild(p);
    figure.appendChild(h2);
}

data.map((itens: Data) => {
    createFigure(itens);
});
