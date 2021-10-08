(function main() {
    'use strict';

    const header = document.querySelector('header');
    window.addEventListener('scroll', function onScroll() {
        if (window.scrollY < 10) {
            header.classList.remove('scroll');
        } else {
            header.classList.add('scroll');
        }
    })


}())