function pintar(divs,color='green'){
    divs.style.backgroundColor = color
}

const div1 = document.querySelector("#ele1")

pintar(div1)

div1.addEventListener("click", function(){
    pintar(div1,'yellow')
});

function descolorear(qsdiv){
    qsdiv.style.backgroundColor='black'
}

let mdivs1=document.querySelector("#divs1")
mdivs1.style.width='200px'
mdivs1.style.height='200px'
mdivs1.style.backgroundColor='blue'
mdivs1.addEventListener("click", function(){
    descolorear(mdivs1)
});

let mdivs2=document.querySelector("#divs2")
mdivs2.style.width='200px'
mdivs2.style.height='200px'
mdivs2.style.backgroundColor='red'
mdivs2.addEventListener("click", function(){
    descolorear(mdivs2)
});

let mdivs3=document.querySelector("#divs3")
mdivs3.style.width='200px'
mdivs3.style.height='200px'
mdivs3.style.backgroundColor='green'
mdivs3.addEventListener("click", function(){
    descolorear(mdivs3)
});

let mdivs4=document.querySelector("#divs4")
mdivs4.style.width='200px'
mdivs4.style.height='200px'
mdivs4.style.backgroundColor='yellow'
mdivs4.addEventListener("click", function(){
    descolorear(mdivs4)
});


let cambiante=document.querySelector("#varios")
cambiante.style.width='200px'
cambiante.style.height='200px'

function cambiarColor(cuadro, colorear){
    cuadro.style.backgroundColor=colorear
}

function agregarDiv(coloreado){
    cuerpo=document.querySelector("body")
    crear=document.createElement("div")
    crear.style.width='200px'
    crear.style.height='200px'
    crear.style.backgroundColor=coloreado
    cuerpo.appendChild(crear)
}

document.addEventListener('keydown', function(event){
    if(event.key==='a'){
        cambiarColor(cambiante,'pink')
    }else{
        if(event.key==='s'){
            cambiarColor(cambiante,'orange') 
        }else{
            if(event.key==='d'){
                cambiarColor(cambiante,'skyblue')
            }else{
                if(event.key==='q'){
                    agregarDiv('purple')
                }else{
                    if(event.key==='w'){
                        agregarDiv('grey')
                    }else{
                        if(event.key==='e'){
                            agregarDiv('brown')
                        }
                    }
                }
            }
        }
    }
});