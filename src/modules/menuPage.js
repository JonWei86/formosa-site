export const menuPage = () =>{
    const content = document.querySelector('#content');

    const story = document.createElement('p');
    story.textContent = 'porkbelly taco'
    content.appendChild(story);
}