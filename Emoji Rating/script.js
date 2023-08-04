const starsEl = document.querySelectorAll(".fa-star")
const emojiEL = document.querySelectorAll(".far")
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"]

updateRating(0)
starsEl.forEach((starsEl, index) => {
    starsEl.addEventListener("click", () => {
        updateRating(index)
    })
})
function updateRating(index) {
    starsEl.forEach((starsEl, idx) => {
        if (idx < index + 1) {
            starsEl.classList.add("active")
        } else {
            starsEl.classList.remove("active")
        }
    })
    emojiEL.forEach(emojiEL => {
        emojiEL.style.transform = `translateX(-${index * 50}px)`
        emojiEL.style.color = colorsArray[index]
    })
}