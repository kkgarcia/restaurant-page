import createComponent from './component.js';
import '../templates/styles.css'


function createMenuComponent(name, text, price, imgName) {
    const comp = createComponent('menu');
    const desc = createComponent('descrip');
    desc.innerHTML = `<b>${name}</b><p>${text}</p><b>${price}</b>`
    
    const img = createComponent('menu-image');
    img.style.setProperty('background', `url(../src/images/${imgName})`)
    img.style.setProperty('background-size', 'cover')
    
    comp.append(desc, img)
    return comp
}

function menu() {
    const fries = createMenuComponent('Fries', 'Vegetarian', '$4.99', 'fries.jpg');
    const sdf = createMenuComponent('Fries', 'Vegetarian', '$4.99', 'fries.jpg');
    const fds = createMenuComponent('Fries', 'Vegetarian', '$4.99', 'fries.jpg');
    const sdfss = createMenuComponent('Fries', 'Vegetarian', '$4.99', 'fries.jpg');
    const pries = createMenuComponent('Fries', '', '$4.99', 'fries.jpg');

    return [fries, sdf, fds, sdfss, pries]
}

export default menu