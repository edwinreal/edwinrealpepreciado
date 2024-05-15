let notes = [];

function renderNotes(filteredNotes) {
    const container = document.getElementById('notes-container');
    container.innerHTML = '';

    const notesToShow = filteredNotes ? filteredNotes : notes;

    if (notesToShow.length === 0) {
        container.innerHTML = '<p>NO HAY NOTAS PARA MOSTRAR</p>';
    } else {
        notesToShow.forEach(note => {
            const noteCard = `
                <div class="note">
                    <h3>${note.title}</h3>
                    <p>${note.text}</p>
                    <input type="checkbox" onclick="toggleCompleted(${note.id})" ${note.completed ? 'checked' : ''}> Realizada
                    <button onclick="editNote(${note.id})">Editar nota</button>
                    <button onclick="deleteNote(${note.id})">Borrar nota</button>
                </div>
            `;
            container.innerHTML += noteCard;
        });
    }
}

function saveNote() {
    const titleInput = document.getElementById('title');
    const textArea = document.getElementById('text');
    const title = titleInput.value.trim();
    const text = textArea.value.trim();

    if (title !== '' && text !== '') {
        const note = { id: Date.now(), title, text, completed: false }; // Usar un timestamp como id
        notes.push(note);
        saveNotesToLocalStorage(); // Guardar notas en el almacenamiento local
        renderNotes();
        clearFields();
    } else {
        alert('Por favor, completa tanto el título como el texto de la nota.');
    }
}

function editNote(id) {
    const noteToEdit = notes.find(note => note.id === id);
    const titleInput = document.getElementById('title');
    const textArea = document.getElementById('text');
    titleInput.value = noteToEdit.title;
    textArea.value = noteToEdit.text;
}

function clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('text').value = '';
}

function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);
    saveNotesToLocalStorage(); // Actualizar las notas en el almacenamiento local después de eliminar
    renderNotes();
}

function toggleCompleted(id) {
    const note = notes.find(note => note.id === id);
    note.completed = !note.completed;
    saveNotesToLocalStorage(); // Actualizar las notas en el almacenamiento local después de cambiar el estado completado
    renderNotes();
}

function filterNotes() {
    const searchInput = document.getElementById('search');
    const searchTerm = searchInput.value.toLowerCase();
    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(searchTerm) || note.text.toLowerCase().includes(searchTerm);
    });
    renderNotes(filteredNotes);
}

function saveNotesToLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(notes)); // Guardar notas en el almacenamiento local
}

function loadNotesFromLocalStorage() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        notes = JSON.parse(savedNotes); // Cargar notas del almacenamiento local
        renderNotes();
    }
}

window.onload = function() {
    loadNotesFromLocalStorage();
};

