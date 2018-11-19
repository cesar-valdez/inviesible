//para hacer medias en JS
var consulta = window.matchMedia('(max-width: 500px)');
consulta.addListener(mediaQuery);

var $bugerButton =  document.getElementById('burger-button');
var $menu =  document.getElementById('menu');

// $bugerButton.addEventListener('touchstart', toggleMenu);
function toggleMenu() {
    $menu.classList.toggle('active')
};

function mediaQuery() {
    if (consulta.matches) {
        console.log('se cumplio la condicion');
        $bugerButton.addEventListener('touchstart', toggleMenu)
    }
    else {
        console.log('no se cumplio la condicion');
        $bugerButton.removeEventListener('touchstart', toggleMenu)
    } 
}

mediaQuery();
//lazy   loading
var bLazy = new Blazy({
    selector:'img'
});

//Gestos touch
var $body = document.body;

function showMenu() {
    $menu.classList.add('active')
};

function hideMenu() {
    $menu.classList.remove('active')
};

var gestos = new Hammer($body);

gestos.on('swipeleft', hideMenu);
gestos.on('swiperight', showMenu);