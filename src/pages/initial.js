
function pageTemplate() {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar')

    const mainbody = document.createElement('div');
    mainbody.classList.add('mainbody')
    
    const buttons = ['Home', 'Menu', 'Contact'];

    for (let i = 0; i < buttons.length; i++) {
        const button = document.createElement('button');
        button.classList.add('nav-btn')
        button.innerText = buttons[i];
        navbar.appendChild(button);
    }

    return [navbar, mainbody]
}

export default pageTemplate

