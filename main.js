'use strict';

//넷바 색상 변경
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// arrow-up
const arrow = document.querySelector(".arrow-up"); // arrow-up 클레스 선택 상수
document.addEventListener("scroll",()=>{ // scroll 이벤트 발생시
    if(window.scrollY < 1){
        arrow.style.opacity = 0; // 처음 상태
    }
    if(window.scrollY > homeHeight/2){ // 홈 높이에서 절반 사라질시
        arrow.style.opacity = 1;
    }
});

// ?? 
// function scrollIntoView(selector) {
//     const arrowView = document.querySelector(selector);
//     arrowView.scrollIntoView({ behavior: "smooth" });
//     }

//넷바메뉴 선택시 해당 부분으로 이동하기
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove("open") ;
    scrollIntoView(link);
});

//contact me 버튼 이동하기
const contactMeBtn = document.querySelector(".home__contact");
contactMeBtn.addEventListener("click", ()=> {
    scrollIntoView("#contact");
});

// arrow-up 버튼 이동하기
const arrowupBtn = document.querySelector(".arrow-up");
arrowupBtn.addEventListener("click", ()=> {
    scrollIntoView("#home");
});

// home 투명도 조절

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll" , ()=> { // 스크롤 이벤트 발생시
    home.getElementsByClassName.opacity = 1 - window.screenY/homeHeight;
});

// arrow-up scrollY
const arrowup = document.querySelector('.arrow-up');
home.addEventListener("scroll", () => {
    if(window.scrollY > homeHeight/2){
        arrowup.classList.add('arrowup--dark');
    } else {
        arrowup.classList.remove('arrowup--dark');
    }
});


// 햄버거 메뉴 클릭할 때
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", ()=>{
    navbarMenu.classList.toggle("open");
});

// 스크롤시 부드럽게
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
    }