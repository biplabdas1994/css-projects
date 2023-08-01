// Function to add a new note
function addNote() {
    const noteInput = document.getElementById('note-input');
    const noteText = noteInput.value.trim();

    if (noteText === '') {
        return; // Empty notes are not added
    }

    const notesList = document.getElementById('notes-list');
    const noteItem = document.createElement('div');
    noteItem.classList.add('note-item');

    const noteTextSpan = document.createElement('span');
    noteTextSpan.textContent = noteText;
    noteItem.appendChild(noteTextSpan);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    noteItem.appendChild(deleteButton);

    let completed = false;
    noteItem.addEventListener('click', function () {
        completed = !completed;
        noteTextSpan.classList.toggle('completed', completed);
        saveNotesToLocalStorage();
    });

    deleteButton.addEventListener('click', function (event) {
        event.stopPropagation();
        notesList.removeChild(noteItem);
        saveNotesToLocalStorage();
    });

    notesList.appendChild(noteItem);

    noteInput.value = ''; // Clear the input after adding the note

    // Save the notes to local storage
    saveNotesToLocalStorage();
}

// Save notes to local storage
function saveNotesToLocalStorage() {
    const notesList = document.getElementById('notes-list');
    const notes = [];

    // Get all note texts and their completion status and store them in an array of objects
    notesList.querySelectorAll('.note-item').forEach(noteItem => {
        const noteText = noteItem.querySelector('span').textContent;
        const completed = noteItem.querySelector('span').classList.contains('completed');
        notes.push({ text: noteText, completed: completed });
    });

    // Save the array to local storage as a JSON string
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Retrieve notes from local storage and display them on page load
window.addEventListener('load', function () {
    const notesList = document.getElementById('notes-list');
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    // Display the notes from local storage
    notes.forEach(note => {
        const noteItem = document.createElement('div');
        noteItem.classList.add('note-item');

        const noteTextSpan = document.createElement('span');
        noteTextSpan.textContent = note.text;
        if (note.completed) {
            noteTextSpan.classList.add('completed');
        }
        noteItem.appendChild(noteTextSpan);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        noteItem.appendChild(deleteButton);

        let completed = note.completed;
        noteItem.addEventListener('click', function () {
            completed = !completed;
            noteTextSpan.classList.toggle('completed', completed);
            saveNotesToLocalStorage();
        });

        deleteButton.addEventListener('click', function (event) {
            event.stopPropagation();
            notesList.removeChild(noteItem);
            saveNotesToLocalStorage();
        });

        notesList.appendChild(noteItem);
    });
});

// Function to show the note input when the "Add Note" button is clicked
function showNoteInput() {
    const noteInput = document.getElementById('note-input');
    noteInput.style.display = 'block';
    noteInput.focus();
}

// Function to hide the note input when a note is added or the input loses focus
function hideNoteInput() {
    const noteInput = document.getElementById('note-input');
    noteInput.value = ''; // Clear the input
    noteInput.style.display = 'none';
}

// Add note when the "Add Note" button is clicked
document.getElementById('add-note-btn').addEventListener('click', function () {
    addNote();
    hideNoteInput();
});

// Add note when the "Enter" key is pressed
document.getElementById('note-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addNote();
        hideNoteInput();
    }
});

// Show note input when the "+" button is clicked
document.getElementById('add-note-floating-btn').addEventListener('click', function () {
    showNoteInput();
});

// Hide note input when focus is lost
document.getElementById('note-input').addEventListener('blur', function () {
    hideNoteInput();
});
