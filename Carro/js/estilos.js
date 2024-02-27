var contenedor = document.querySelector(".contenedor")
var llanta1 = document.querySelector(".llanta1")
var llanta2 = document.querySelector(".llanta2")
var luz = document.querySelector(".luz")
var humo = document.querySelector(".humo")

contenedor.addEventListener('click', fondoMover)

function fondoMover(){
    contenedor.classList.add('fondoMover')
    llanta1.classList.add('llantaMover1')
    llanta2.classList.add('llantaMover2')
    luz.classList.remove('oculto')
    luz.classList.add('luzAnimacion')
    humo.classList.remove('oculto')
    humo.classList.add('humoAnimado')
}

