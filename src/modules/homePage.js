import heroImgSrc from "../images/hero-img.png";

export const homePage = () =>{
       
    const content = document.querySelector('#content');
    
    const headline = document.createElement('h1');
    headline.textContent = 'Formosa Fusion';
    content.appendChild(headline);
    
    const hero = document.createElement('div');
    hero.classList.add('hero');
        
    const heroImg = document.createElement('img');
    heroImg.src = heroImgSrc;
    heroImg.classList.add('hero-img');
    hero.appendChild(heroImg);
        
    const intro = document.createElement('p');
    intro.textContent = 'Formosa Fusion boats a unique dining experience that blends the rich traditions of Taiwanese cuisine with the diverse influences present in the American culinary landscape. Our menu is a celebration of the unity of cultures and their flavors, while remaining proud and loyal to our Asian and Taiwanese roots.';
    intro.classList.add('intro')
    hero.appendChild(intro);
    
    content.appendChild(hero);
}