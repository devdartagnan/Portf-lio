import data from './data.json'

const container = document.querySelector('#container-itens') as HTMLElement

interface Data {
    cardDescription: string
    tag: string
    thumb: string
    titulo: string
    altImage: string
    id: string
}
function setLocalStorage(data: Data) {
    localStorage.setItem('details', JSON.stringify(data.id))
}

function createFigure(data: Data) {
    const figure = document.createElement('figure')
    const section = document.createElement('section')
    const div = document.createElement('div')
    const p = document.createElement('p')
    const h2 = document.createElement('h2')
    const img = document.createElement('img')
    const a = document.createElement('a')
    figure.classList.add('figure')
    section.classList.add('img-box')
    div.classList.add('img_hover')
    a.id = 'hyperlink'

    a.href = 'detalhes.html'
    img.src = data.thumb
    img.alt = data.altImage
    p.textContent = data.cardDescription
    h2.textContent = data.titulo
    img.onclick = () => {
        setLocalStorage(data)
    }

    container.append(figure)
    figure.appendChild(section)
    section.appendChild(a)
    a.appendChild(img)
    a.appendChild(div)
    div.appendChild(p)
    figure.appendChild(h2)
}

data.slice(0)
    .reverse()
    .map((itens: Data) => {
        createFigure(itens)
    })
