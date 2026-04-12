const img = ["images/happy.jpg", "images/sad.jpg", "images/chill.jpg", "images/stress.jpg", "images/angry.jpg"]

let curentimage = 0

const myimage = document.getElementById('image')

const headers = document.querySelector('header')

const bars = document.querySelector('.bars')
const nav = document.querySelector('nav')

// Mobile menu toggle
bars.addEventListener('click', () => {
    nav.classList.toggle('active')
    bars.classList.toggle('active')
})

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('nav a')
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active')
        bars.classList.remove('active')
    })
})

// Scroll effect
document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        headers.classList.add('scroll')
    }
    else {
        headers.classList.remove('scroll')
    }
})

function changeimage() {
    curentimage++

    if (curentimage >= img.length) {
        curentimage = 0
    }

    myimage.src = img[curentimage]
}

setInterval(changeimage, 4000)