const emojiPlaceholder = document.getElementById("emoji-placeholder");
const emojiDescription = document.getElementById("emoji-description");
const fetchEmojiBtn = document.getElementById("fetch-emoji-btn");

function fetchRandomEmoji() {
  fetch("https://emojipedia.org/api/v1/random/")
    .then((response) => response.json())
    .then((data) => {
      const emoji = data.emoji;
      const description = data.title;

      emojiPlaceholder.textContent = emoji;
      emojiDescription.textContent = description;
    })
    .catch((error) => {
      console.error("Error fetching emoji:", error);
    });
}

fetchEmojiBtn.addEventListener("click", fetchRandomEmoji);

// Fetch initial random emoji on page load
fetchRandomEmoji();
