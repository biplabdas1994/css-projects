const accessKey = "0NZZgte9DmjqTP6cu8y8pkvFsFBmmYgtIJQtr2KcW2k"
const formEl = document.querySelector('form')
const searchInputEl = document.getElementById('search-input')
const searchResultsEl = document.querySelector(".search-results")
const showMoreButton = document.getElementById('show-more-button')

let inputData = "";
let page = 1;
async function searhImages() {
    inputData = searchInputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
    const response = await fetch(url);
    const data = await response.json()
    if (page === 1) {
        searchResultsEl.innerHTML = "";
    }
    const results = data.results
    results.map((results) => {
        const imageWraper = document.createElement('div')
        imageWraper.classList.add("search-result")
        const image = document.createElement('img')
        image.src = results.urls.small
        image.alt = results.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = results.urls.html
        imageLink.target = "_blank"
        imageLink.textContent =results.alt_description

        imageWraper.appendChild(image)
        imageWraper.appendChild(imageLink)
        searchResultsEl.appendChild(imageWraper)
    })
    page++
    console.log(page);
    if (page > 1) {
        showMoreButton.style.display = "block";
    }
}


formEl.addEventListener('submit', (event) => {

    event.preventDefault()
    page = 1
    searhImages()
})
showMoreButton.addEventListener('click',()=>{
    searhImages()
})