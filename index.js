var menu = document.getElementById('menu')
menu.addEventListener('click', function () {
    var listaMenu = document.getElementById('listaMenu')
    listaMenu.classList.toggle('aparecerMenu')

})

var categorias = document.getElementById('categorias');
categorias.addEventListener('click', () => {

    var listaMenu = document.getElementById('listaMenu2')
    listaMenu.classList.toggle('aparecerMenu2')
})