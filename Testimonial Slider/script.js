const testinomials = [
    {
        nam: "Wandis J.",
        photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        text: "Keep up the excellent work. Andis is worth much more than I paid. I love your system. Thanks to andis, weve just launched our 5th website"
    },
    {
        nam: "Teddie E.",
        photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        text: "You've saved our business! Since I invested in andis I made over 100,000 dollars profits. Andis saved my business."
    },
    {
        nam: "Anabella Y.",
        photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        text: "Andis is the next killer app. Andis is both attractive and highly adaptable. I just can't get enough of andis. I want to get a T-Shirt with andis on it so I can show it off to everyone. We've used andis for the last five years."
    }
]
const imgEl = document.querySelector('img')
const textEl = document.querySelector('.text')
const usernameEl = document.querySelector('.username')

let idx = 0;
updateTestinomial()
function updateTestinomial() {
    const { nam, photoUrl, text } = testinomials[idx]
    imgEl.src = photoUrl;
    textEl.innerText = text
    usernameEl.innerText = nam;
    idx++;
    if (idx === testinomials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestinomial()
    }, 1000);
}