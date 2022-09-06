import imagenFarol from '../assets/farol.JPG';
import imagenPortavela from '../assets/portavela.JPG';
import imagenFlorero from '../assets/florero.JPG';

export const arrayProductos = [
    {
        id: 1,
        title : 'Farol',
        price : 1500,
        description:'Farol decorativo, confeccionado en metal y vidrio.',
        pictureUrl : [imagenFarol],
        categoria : "exterior",    
    },
    {
        id : 2,
        title : 'Portavela',
        price : 800,
        description:'Portavela en vidrio y metal.',
        pictureUrl : [imagenPortavela],
        categoria : "interior",
    },
    {
        id : 3,
        title : 'Florero',
        price : 3000,
        description:'Set de floreros para exterior.',
        pictureUrl : [imagenFlorero],
        categoria : "deco",
    },
]
