const buttonEl = document.getElementById('btn')
const jokeEl = document.getElementById('joke')
const apiKey = "2cvO7NdkIZp2grbm5yQrrA==ZIyjU0MjHjsID2TC"
const options = {
    method: 'GET',
    headers: {
        "X-Api-key": apiKey,
    },
}
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {
    jokeEl.innerText = "Updating...";
    buttonEl.disabled = true;
    jokeEl.innerText = "Loading...";
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    buttonEl.disabled = false;
    jokeEl.innerText = "Tell me a Joke";

    jokeEl.innerText = data[0].joke;
}
buttonEl.addEventListener('click', getJoke)