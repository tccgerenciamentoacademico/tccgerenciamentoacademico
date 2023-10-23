const menuItems = document.querySelectorAll('.sidebar ul li');
menuItems.forEach(function (item, index) {
    item.addEventListener('click', function (event) {
        // Remove a classe 'selected' de todos os itens
        menuItems.forEach(function (item) {
            item.classList.remove('selected');
        });

        // Adiciona a classe 'selected' apenas ao item clicado
        this.classList.add('selected');
        
    });
});

const maximizeIcon = document.querySelector('.maximize');
const minimizeIcon = document.querySelector('.minimize');
const sidebar = document.querySelector('.sidebar');
const header = document.querySelector('header');
const main = document.querySelector('.main-content');

maximizeIcon.addEventListener('click', function () {
    this.classList.remove('active');
    sidebar.classList.remove('collapse');
    header.classList.remove('collapse');
    main.classList.remove('collapse');
    minimizeIcon.classList.add('active');
});

minimizeIcon.addEventListener('click', function () {
    this.classList.remove('active');
    sidebar.classList.add('collapse');
    header.classList.add('collapse');
    main.classList.add('collapse');
    maximizeIcon.classList.add('active');
});

 

const btnMenu = document.getElementById('js-btn-menu-mobile');
const overlayMenu = document.querySelector('.js-overlay');

function openMobileMenu(){
    document.documentElement.classList.toggle('menu-opened');
}

btnMenu.addEventListener('click',openMobileMenu);
overlayMenu.addEventListener('click',openMobileMenu);