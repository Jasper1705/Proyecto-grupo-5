let escondertexto_btns = document.getElementById('escondertexto_btns');
let escondertexto = document.getElementById('escondertexto');
//agregar un event listener al botón que va a disparar la acción 
escondertexto_btns.addEventListener('click' , function(){
// hacer que esconder texto sea visible y la tabla sea visible cambiando su estilo css
escondertexto_btns.style.display = 'none';
escondertexto.style.display = 'block';
});
escondertexto.addEventListener('')
function toggletext(){
escondertexto.classList.toggle('show');

if(escondertexto.classList.contains('show')) {
    escondertexto_btns.innerHTML = 'leer menos';
}

}
 