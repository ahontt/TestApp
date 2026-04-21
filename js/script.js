const TEXTO = "TEXTO ANIMADO";
const ELEMENTOHTML = document.getElementById("anim");

let i = 0;

function escribir(){
    if(i < TEXTO.length){
        ELEMENTOHTML.textContent += TEXTO[i];
        i++;
        setTimeout(escribir, 100);
    }
}

escribir();