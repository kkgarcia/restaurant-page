import createComponent from './component.js';

function home() {
    const title = createComponent('home')
    title.innerText = `Beary's Breakfast Bar`

    const discription = createComponent('home')
    discription.innerHTML = `<p>Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.</p>`

    const hours = createComponent('home')
    const hourTitle = document.createElement('h3')
    hourTitle.innerHTML = 'Hours'

    const workHours = document.createElement('div');
    workHours.innerHTML = 'Mon-Thurs: 8am - 8pm<br>Fri-Sun: 8am - 11pm'
    hours.append(hourTitle, workHours)

    const location = createComponent('home')
    const locationTitle = document.createElement('h3')
    locationTitle.innerText = 'Location'
    const address = document.createElement('div');
    address.innerHTML = '<div>123 Forest Drive, Forestville, Maine</div>'
    location.append(locationTitle, address)

    return [title, discription, hours, location]
}

export default home