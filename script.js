
'use strict'

let images = [
    { 'id': '1','url':'./imagens/chrono.jpg'},

    { 'id': '2','url':'./imagens/inuyasha.jpg'},

    { 'id': '3','url':'./imagens/ippo.png'},

    { 'id': '4','url':'./imagens/tenchi.jpg'},

    { 'id': '5','url':'./imagens/tenjihotenge.jpg'},

    { 'id': '6','url':'./imagens/yuyuhakusho.jpg'},

]
 
let container = document.getElementById('container-itens');

let loadImages = (images, container) => {
    images.forEach (image => {
        container.innerHTML += `
        <div class='item'>
        <img src='${image.url}'
        </div>
        `
    })
}

