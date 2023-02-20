let click = document.querySelector('#nivel1');
let click2 = document.querySelector('#nivel2');
let click3 = document.querySelector('#nivel3');
let click4 = document.querySelector('#nivel4');
let click5 = document.querySelector('#nivel5');
let fav = 0
var contador = [cont0 = 0, cont1= 0, cont2= 0, cont3= 0, cont4= 0]

//marcação e desmarcação

click.addEventListener('click', function(){
    if(cont0%2 == 0){
        //botão ativado

        click.style.backgroundColor = 'hsl(25, 97%, 53%)'
        cont0++;
        fav = 1
            
    } else{
        //botão desativado

        click.style.backgroundColor = 'hsl(218, 14%, 26%)'
        click.style.color = 'white'
        click.style.cssText = 'hover: hsl(217, 12%, 63%)'
        cont0++;
    }
        
})

click2.addEventListener('click', function(){  
    if(cont1%2 == 0){
        //botão ativado
        click2.style.backgroundColor = 'hsl(25, 97%, 53%)'
        cont1++;
        fav = 2

    } else {
        //botão desativado

        click2.style.backgroundColor = 'hsl(218, 14%, 26%)'
        click2.style.color = 'white'
        click2.style.cssText = 'hover: hsl(217, 12%, 63%)'
        cont1++;
    }
})

click3.addEventListener('click',function(){
    if(cont3%2 == 0){
        //botão ativado
        click3.style.backgroundColor = 'hsl(25, 97%, 53%)'
        cont3++;
        fav = 3

    } else {
        //botão desativado

        click3.style.backgroundColor = 'hsl(218, 14%, 26%)'
        click3.style.color = 'white'
        click3.style.cssText = 'hover: hsl(217, 12%, 63%)'
        cont3++;
    }
})

click4.addEventListener('click', function(){
    if(cont4%2 == 0){
        //botão ativado
        click4.style.backgroundColor = 'hsl(25, 97%, 53%)'
        cont4++;
        fav == 4

    } else {
        //botão desativado

        click4.style.backgroundColor = 'hsl(218, 14%, 26%)'
        click4.style.color = 'white'
        click4.style.cssText = 'hover: hsl(217, 12%, 63%)'
        cont4++;
    }
})

click5.addEventListener('click', function(){
    if(cont4%2 == 0){
        //botão ativado
        click5.style.backgroundColor = 'hsl(25, 97%, 53%)'
        cont4++;
        fav = 5 

    } else {
        //botão desativado

        click5.style.backgroundColor = 'hsl(218, 14%, 26%)'
        click5.style.color = 'white'
        click5.style.cssText = 'hover: hsl(217, 12%, 63%)'
        cont4++;
    }
})

function enviar(){

    let titulo = document.getElementById("titulo")
    let avaliacao = document.getElementById("avaliacao")
    let imagem1 = document.getElementById("imagem1")
    let p = document.getElementById("remove")

    titulo.remove()
    avaliacao.remove()
    imagem1.remove()
    p.remove()

    var img = document.querySelector("#newImage")
    img.setAttribute('src', '/images/illustration-thank-you.svg');

    var newTitle = document.querySelector('#newTitle');
    var newFive = newTitle.innerHTML
    var newText = "You selected " + fav + " out of 5"
    newFive = newText;
    newTitle.innerHTML = newFive
    newTitle.style.cssText = 'background-color: hsl(214, 6%, 25%);'

    var txt = document.getElementById("txt")
    txt.innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"

    var thk  = document.createElement('p')
    var txtC = document.createTextNode("Thank You!")

    thk.appendChild(txtC)
    txtSub.innerHTML += thk.innerHTML

} 