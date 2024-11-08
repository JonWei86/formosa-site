import "./styles.css";
import logoImgSrc from "./images/formosa-symbol-logo.svg";
import { homePage } from "./modules/homePage";
import { aboutPage } from './modules/aboutPage'
import { menuPage } from './modules/menuPage'

const homeBtn = document.querySelector('#homePage');
const menuBtn = document.querySelector('#menuPage');
const aboutBtn = document.querySelector('#aboutPage');

const buttons = [homeBtn, menuBtn, aboutBtn]

const nav = document.querySelector("nav");
    
    const logo = document.createElement('img');
    logo.src = logoImgSrc;
    logo.classList.add('logo-img');
    nav.appendChild(logo);

for (let btn of buttons){
    btn.addEventListener('click',()=>{
        document.querySelector('#content').innerHTML = '';
        console.log(btn.id)
        switch(btn.id){
            case 'homePage':
                return homePage()
            case 'menuPage':
                return menuPage()
            case 'aboutPage':
                return aboutPage()
        }
    })
}

homePage();
