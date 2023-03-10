const secao3 = document.querySelector('.compartilhamento-perfil');
const botaoCompart = document.querySelectorAll('.icone-compart');
const compartilhamento = document.querySelector('.compartilhamento');
const divDoPerfil = document.querySelector('.perfil-foto-nome');

let botaoCompartilha = Array.from(botaoCompart);
console.log(botaoCompartilha)

botaoCompartilha[0].addEventListener('click', function(){
    if (window.screen.width <= 1080){
    secao3.classList.toggle('bg-azul-escuro');
    divDoPerfil.style.display = 'flex';
    compartilhamento.style.display = 'none';
}
})

botaoCompartilha[1].addEventListener('click', function(){
    if (window.screen.width <= 1080){
        secao3.classList.toggle('bg-azul-escuro');
        divDoPerfil.style.display = 'none';
        compartilhamento.style.display = 'flex';
    }else if (window.screen.width > 1080){
        if (compartilhamento.style.display == 'flex'){
            compartilhamento.style.display = 'none';
        } else {
            compartilhamento.style.display = 'flex';
            botaoCompartilha[0].style.display = 'none';
        }
    }
})