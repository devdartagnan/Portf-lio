import { stringify } from 'querystring'
import data from './data.json'

const getLocalStorage = localStorage.getItem('details') as string
const container = document.querySelector('#container-details') as HTMLElement

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
console.log(getLocalStorage)
data.map((itens: Props) => {
    let id = JSON.stringify(itens.id)

    console.log(id === getLocalStorage)
    if (id === getLocalStorage) {
        const section = document.createElement('section')
        const img = document.createElement('img')

        img.src = itens.thumb
        container.append(section)
        section.append(img)
    }
})
