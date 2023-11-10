document.addEventListener("DOMContentLoaded", function () {
  const addNoteButton = document.getElementById("add-note-button");
  const notesContainer = document.querySelector(".notes-container");

  function createNoteElement(title, content) {
    const newNote = document.createElement("div");
    newNote.className = "note";
    newNote.innerHTML = `
      <input type="text" class="note-title" value="${title}" placeholder="Titre de la note">
      <textarea class="note-content">${content}</textarea>
      <button class="delete-button"><i class="fas fa-trash-alt"></i></button>
    `;
    notesContainer.insertBefore(newNote, addNoteButton);

    setTimeout(() => {
      newNote.style.opacity = 1;
      newNote.style.transform = "translateY(0)";
    }, 10);

    const deleteButton = newNote.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
      if (confirm("Voulez-vous vraiment supprimer cette note ?")) {
        notesContainer.removeChild(newNote);
        saveNotes();
      }
    });
  }

  function saveNotes() {
    const noteElements = document.querySelectorAll(".note");
    const notes = [];

    noteElements.forEach((noteElement) => {
      const title = noteElement.querySelector(".note-title").value;
      const content = noteElement.querySelector(".note-content").value;
      notes.push({ title, content });
    });

    localStorage.setItem("notes", JSON.stringify(notes));
  }

  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    const notes = JSON.parse(storedNotes);
    notes.forEach((note) => {
      createNoteElement(note.title, note.content);
    });
  }

  addNoteButton.addEventListener("click", function () {
    createNoteElement("", "");
  });
});
