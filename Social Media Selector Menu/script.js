const menuEL = document.querySelector('.menu')
const menuTextEL = document.querySelector('.menu p')
const socialListsEl = document.querySelector('.social-lists')
const liELs = document.querySelectorAll(".social-lists li")

menuEL.addEventListener('click', () => {
    socialListsEl.classList.toggle("hide")
    menuEL.classList.toggle("rotate")
}) 

liELs.forEach(liEl =>{
    liEl.addEventListener('click', () =>{
        menuTextEL.innerHTML = liEl.innerHTML
        socialListsEl.classList.add("hide")
        menuEL.classList.toggle("rotate")
    })
})