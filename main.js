'use strict';

// 넷바 색상 변경
//let = 변수 (value), // const = 상수 (final)
const navbar = document.querySelector ('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
}); // 이벤트

// 넷바 메뉴 선택시 해당 부분으로 이동하기
const navbarMenu = document.querySelector ('.navbar_menu');
navbarMenu.addEventListener ("click", (event)=> {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
    console.log(link);
    
})

// contact me 버튼 이동하기
const home_contact = document.querySelector ('.home_contact');
home_contact.addEventListener ("click", ()=> {
    scrollIntoView('#contact');
    
})

function scrollIntoView (selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}