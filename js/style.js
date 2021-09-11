// Título

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';

    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}
    const titulo = document.querySelector('#titulo_dois');
    typeWriter(titulo);

// Scroll suave

const menuItens = document.querySelectorAll('.menu a')

menuItens.forEach(item => {
    item.addEventListener('click', scrollClick)
})

function scrollClick(event) {
    event.preventDefault()
    const elemento = event.target;
    const id = elemento.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to - 70,
        behavior: "smooth",

    });
}