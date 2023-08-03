const searchBarContainerEl = document.querySelector('.search-bar')
const magnifierEl = document.querySelector('.magnifier')

searchBarContainerEl.addEventListener('click', () => {
    searchBarContainerEl.classList.toggle('active')
})