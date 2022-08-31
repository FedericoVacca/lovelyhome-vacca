import imagenFarol from '../assets/farol.JPG';
import imagenPortavela from '../assets/portavela.JPG';
import imagenFlorero from '../assets/florero.JPG';

const arrayProductos = [
    {
        id: 1,
        title : 'Farol',
        price : 1500,
        description:'Farol decorativo, confeccionado en metal y vidrio.',
        pictureUrl : [imagenFarol]    
    },
    {
        id : 2,
        title : 'Portavela',
        price : 800,
        description:'Portavela en vidrio y metal.',
        pictureUrl : [imagenPortavela]
    },
    {
        id : 3,
        title : 'Florero',
        price : 3000,
        description:'Set de floreros para exterior.',
        pictureUrl : [imagenFlorero]
    },
]

const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(arrayProductos)
        reject(err => console.log(err))
    }, 2000)
})

export default getFetch