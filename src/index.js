import './templates/styles.css'
import pageTemplate from './pages/initial.js'
import home from './pages/home.js'
import menu from './pages/menu.js'


const container = document.querySelector('#container');
const [nav, main] = pageTemplate();
container.append(nav, main);

const navButtons = document.querySelectorAll('.nav-btn')

main.append(...home());

navButtons.forEach( button => {
   button.addEventListener('click', () => {
    switch (button.innerText.toLowerCase()) {
        case 'home': 
            main.innerHTML = '';
            main.append(...home());
            break
        case 'menu':
            main.innerHTML = '';
            main.append(...menu())
            break
        case 'contact':
            main.innerHTML = '';
            main.append(...contact())
            break
        default: main.innerHTML = '';
    }
   }) 
})