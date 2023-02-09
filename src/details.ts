import data from './data.json'

const getLocalStorage = localStorage.getItem('details') as string
const container = document.querySelector('.carousel-inner') as HTMLElement

interface Props {
    id: string
    cardDescription: string
    titulo: string
    tag: string
    thumb: string
    altImage: string
    altPage: {
        contentImages: string[]
        projectUrl: string
        textoDescricao: string
    }
}

data.map((itens: Props) => {
    let id = JSON.stringify(itens.id)
    console.log(itens.altPage.contentImages)
    if (id === getLocalStorage) {
        let img
        let count = 0
        itens.altPage.contentImages.map((photo) => {
            img = document.createElement('img')
            const div = document.createElement('div')

            container.appendChild(div)
            div.append(img)
            
            img.classList.add('d-block')
            img.classList.add('w-100')
            div.classList.add('carousel-item')
            count === 0 ? div.classList.add('active') : void 0
            
            img.src = photo
            img.alt = itens.altImage
            img.id = ''
            count++
        })
    }
})
