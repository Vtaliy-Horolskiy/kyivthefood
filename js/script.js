function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

    //  Кнопка меню
    const menuTrigger = document.querySelector('.menu-open-js');
    const menu = document.querySelector('.nav-js');
    const body = document.querySelector('body');
    const shadow = document.querySelector('.shadow-body');

    if(menuTrigger){
        menuTrigger.addEventListener("click", function(e){
            menu.classList.toggle('open');
            this.classList.toggle('active');
            body.classList.toggle('fix-mobile');
            shadow.classList.toggle('visible');
        });
    }

    // Прокрутка при клике
    const menuLinks = document.querySelectorAll('.nav-link-anchor[data-goto]');
    if(menuLinks.length > 0){
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick)
        });

        function onMenuLinkClick(e){
            const menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset /*- document.querySelector('.header').offsetHeight*/;

                if(menu.classList.contains('open')){
                    menu.classList.remove('open');
                    menuTrigger.classList.remove('active');
                    body.classList.remove('fix-mobile');
                    shadow.classList.remove('visible');
                }

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                })
                e.preventDefault();
            }
        }
    }

    //Hero tabs
    document.addEventListener("DOMContentLoaded", function () {
        const buttons = document.querySelectorAll(".tabs-hero__btn");
        const imageLists = document.querySelectorAll(".hero-list-images");

        buttons.forEach((button, index) => {
            button.addEventListener("click", function () {
                buttons.forEach((btn) => btn.classList.remove("tabs-hero__btn--active"));
                this.classList.add("tabs-hero__btn--active");

                imageLists.forEach((list) => list.classList.remove("hero-list-images--active"));
                imageLists[index].classList.add("hero-list-images--active");
            });
        });
    });

    Fancybox.bind('[data-fancybox="gallery"]');

    const tabButtons = document.querySelectorAll('.our-menu__tab-btn');
    const tabContents = document.querySelectorAll('.our-menu__tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('our-menu__tab-btn--active'));
            tabContents.forEach(content => content.classList.remove('our-menu__tab-content--active'));

            button.classList.add('our-menu__tab-btn--active');

            const tabId = button.getAttribute('data-tab');
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('our-menu__tab-content--active');
            }
        });
    });




    
    

    