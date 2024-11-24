document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('menu-open-icon').addEventListener('click', () => open_navbar());
    document.getElementById('menu-close-icon').addEventListener('click', () => close_navbar());
    document.getElementById('fade-screen').addEventListener('click', () => close_navbar());
});

function open_navbar(){
    document.querySelector('html').style.overflowY = 'hidden';
    document.querySelector('html').style.touchAction = 'none';
    let el = document.querySelector('#navbar-nav');
    el.style.overflowY = 'auto';
    document.querySelector('#fade-screen').style.display = 'block';

    console.log(window.scrollY)
    el.style.top = `${window.scrollY}px`

    el.style.animation = 'slideIn .5s';
    el.style.animationTransitionTimingFunction = "cubic-bezier(.4,0,.2,1)";
    el.style.animationPlayState = 'running';
    el.addEventListener('animationend', () => {
        el.style.left = "0";
        el.animation = '';
      });
}

function close_navbar(){
    document.querySelector('html').style.overflowY = 'auto';
    document.querySelector('html').style.touchAction = '';
    let el = document.querySelector('#navbar-nav');

    document.querySelector('#fade-screen').style.display = 'none';

    el.style.animationTransitionTimingFunction = "cubic-bezier(.4,0,.2,1)";
    el.style.animation = 'slideOut .5s';
    el.style.animationPlayState = 'running';

    el.addEventListener('animationend', () => {
        el.style.left = "-100%";
        el.animation = '';
      });
}