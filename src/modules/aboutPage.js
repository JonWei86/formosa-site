export const aboutPage = () =>{
    const content = document.querySelector('#content');

    const story = document.createElement('p');
    story.textContent = 'Jon Wei, a culinary artist with Taiwanese roots, found himself deeply inspired by the vibrant tapestry of American cuisine. Growing up in an Asian American household, he was accustomed to the unique blend of flavors and textures that defined his heritage. It was during his college years that he began to experiment with these flavors, crafting dishes that reflected his cultural identity and American upbringing. His girlfriend, a passionate foodie, became the lucky recipient of his culinary creations. Enthralled by the innovative dishes, she encouraged him to share his talents with the world. Inspired by her support, Jon embarked on a journey to open Formosa Fusion, a restaurant that would celebrate the fusion of Taiwanese and American flavors.'
    content.appendChild(story);
}