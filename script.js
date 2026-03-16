const img = ["images/bg.jpg", "images/2cat.jpg", "images/bg.jpg", "images/pusa.jpg", "images/wings.jpg"]

let curentimage = 0

const myimage = document.getElementById('image')

const headers = document.querySelector('header')

document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        headers.classList.add('scroll')
    }
    else{
        headers.classList.remove('scroll')
    }
})

function changeimage() {
   curentimage++

   if(curentimage >= img.length) {
     curentimage = 0
   }

   myimage.src = img[curentimage]
}

setInterval(changeimage, 4000)