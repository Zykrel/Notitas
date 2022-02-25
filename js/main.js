const imagenes = [
    'multimedia/original (2).jpg', 
    'multimedia/pp (1).png', 
    'multimedia/0228e999-4394-43f0-a762-823ff939cef6.jpg',
    'multimedia/f90b0a25f35a0357b28c25c5e8a9364f.jpg',
    'multimedia/da.jpg',
    'multimedia/IMG_20211105_213033478.jpg',
    'multimedia/IMG_20211105_213040897.jpg',
    'multimedia/IMG_20211231_215300868_HDR.jpg',
    'multimedia/IMG_20220108_202931106.jpg',
    'multimedia/IMG_20220108_202954228.jpg',
    'multimedia/IMG_20220206_191302109_HDR.jpg',
    'multimedia/IMG_20220206_191319765_HDR.jpg',
    'multimedia/IMG_20220207_112652265.jpg',
    'multimedia/IMG_20220207_112653725.jpg',
    'multimedia/IMG_20220207_112701323_HDR.jpg',
];

const links = [
    'https://www.instagram.com/candesaionji/?hl=es-la',
    'https://www.youtube.com/watch?v=o2tdLOK7-PE',
    'https://www.youtube.com/watch?v=D3P8goE1OPI',
    'https://www.instagram.com/nishkur3/?hl=es-la',
    'https://www.youtube.com/watch?v=BrEGSMBA8zE',
];

var contador = 0;
function next(){
    let imagen = document.getElementById("imagen");
    let link = document.getElementById("link");
    contador++;
    if(contador >= imagenes.length){
        contador = 0;
    }    
    imagen.src = imagenes[contador];
    link.href = links[contador];
}

function prev(){
    let imagen = document.getElementById("imagen");
    let link = document.getElementById("link");
    contador--;
    if(contador < 0){
        contador = imagenes.length -1;
    }
    imagen.src = imagenes[contador];
    link.href = links[contador];
}


