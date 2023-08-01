const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const apiUrl = "https://api.quotable.io/random"

async function getQuote() {
    try {
        btnEl.innerText = "Loading..."
        btnEl.disabled = true;
        quoteEl.innerText = "Updating quote..."
        authorEl.innerText = "Updating quote..."
        const response = await fetch(apiUrl)
        const data = await response.json()
        const quoteContent = data.content
        const quoteAuthor = data.author
        quoteEl.innerText = quoteContent
        authorEl.innerText = "~ " + quoteAuthor
        btnEl.innerText = "Get a quote"
        btnEl.disabled = false;
    } catch (error) {
        console.log(error);
        quoteEl.innerText = "An error occurred try again later"
        authorEl.innerText = "An error occurred"
        btnEl.innerText = "Get a quote" 
        btnEl.disabled = false;
    }
}
btnEl.addEventListener("click", getQuote)