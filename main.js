'use strict';

// 넷바 색상 변경
//let = 변수 (value), // const = 상수 (final)
const navbar = document.querySelector; ('#navbar')
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll"), () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--datk');
    }
}; // 이벤트