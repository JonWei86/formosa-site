export const menuPage = () =>{
    const content = document.querySelector('#content');

    const story = document.createElement('p');
    story.textContent = 'porkbelly taco...........$15.99'
    content.appendChild(story);
}