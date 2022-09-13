import imagenFarol from '../assets/farol.JPG';
import imagenPortavela from '../assets/portavela.JPG';
import imagenBandeja from '../assets/bandeja.JPG';
import imagenAlmohadon from '../assets/almohadon.JPG';
import imagenFanalexterior from '../assets/fanalexterior.JPG';
import imagenFanalinterior from '../assets/fanalinterior.JPG';
import imagenPinia from '../assets/pinia.JPG';
import imagenPortavelain from '../assets/portavela2.JPG';
import imagenFlorero from '../assets/florero.JPG';


export const arrayProductos = [
    {
        id:1,
        title : 'Farol',
        price : 1500,
        description:'Farol decorativo, confeccionado en metal y vidrio.',
        pictureUrl : [imagenFarol],
        stock: 20,
        categoria : "exterior",    
    },
    {
        id :2,
        title : 'Portavela',
        price : 800,
        description:'Portavela en vidrio y metal.',
        pictureUrl : [imagenPortavela],
        stock: 20,
        categoria : "interior",
    },
    {
        id :3,
        title : 'Florero',
        price : 3000,
        description:'Set de floreros para exterior.',
        pictureUrl : [imagenFlorero],
        stock: 20,
        categoria : "deco",
    },
    {
        id:4,
        title : 'Bandeja',
        price : 1500,
        description:'Farol decorativo, confeccionado en metal y vidrio.',
        pictureUrl : [imagenBandeja],
        stock: 20,
        categoria : "deco",    
    },
    {
        id :5,
        title : 'Almohadon',
        price : 800,
        description:'Portavela en vidrio y metal.',
        pictureUrl : [imagenAlmohadon],
        stock: 20,
        categoria : "interior",
    },
    {
        id :6,
        title : 'Fanal',
        price : 3000,
        description:'Set de floreros para exterior.',
        pictureUrl : [imagenFanalexterior],
        stock: 20,
        categoria : "exterior",
    },
    {
        id:7,
        title : 'Fanal int',
        price : 1500,
        description:'Farol decorativo, confeccionado en metal y vidrio.',
        pictureUrl : [imagenFanalinterior],
        stock: 20,
        categoria : "exterior",    
    },
    {
        id :8,
        title : 'Pinia',
        price : 800,
        description:'Portavela en vidrio y metal.',
        pictureUrl : [imagenPinia],
        stock: 20,
        categoria : "interior",
    },
    {
        id :9,
        title : 'Portavela',
        price : 3000,
        description:'Set de floreros para exterior.',
        pictureUrl : [imagenPortavelain],
        stock: 20,
        categoria : "deco",
    },
]
