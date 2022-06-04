const imagenes = [
    'multimedia/aesthetic-anime.gif', 
    'multimedia/pp (1).png', 
    'multimedia/promise.gif',
    'multimedia/3.gif',
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
    'https://www.youtube.com/watch?v=GtitP2XMBSo',
    'https://www.youtube.com/watch?v=az0J_dyNEiY',
    'https://www.youtube.com/watch?v=Eljl-xE6SaA',
    'https://www.youtube.com/watch?v=bfaBr7EuZCE',
    'https://www.youtube.com/watch?v=mZGRkgVKopA',
    'https://www.youtube.com/watch?v=KPyYJaal40Y',
    'https://www.youtube.com/watch?v=4MnJ7Wv8w7Y',
    'https://www.youtube.com/watch?v=eBKuhpYher0',
    'https://www.youtube.com/watch?v=vnKHgAsOha0',
    'https://www.youtube.com/watch?v=2ET1_d07Wls',

];
var contador = 0;
setInterval(() => {
    contador++;
    next(true)
}, 2000)


function next(intervalo = false){
    let imagen = document.getElementById("imagen");
    let link = document.getElementById("link");
    if(!intervalo){
        contador++;
    }
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


