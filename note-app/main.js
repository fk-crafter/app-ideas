document.addEventListener("DOMContentLoaded", function() {
    const addNoteButton = document.getElementById("add-note-button");
    const notesContainer = document.querySelector(".notes-container");
  
    addNoteButton.addEventListener("click", function() {
      const newNote = document.createElement("div");
      newNote.className = "note";
      newNote.innerHTML = `
        <textarea class="note-content" placeholder="Saisissez votre note ici"></textarea>
        <button class="delete-button"><i class="fas fa-trash-alt"></i></button>
      `;
      notesContainer.insertBefore(newNote, addNoteButton);
  
      // Adding animation to the new note
      setTimeout(() => {
        newNote.style.opacity = 1;
        newNote.style.transform = "translateY(0)";
      }, 10);
  
      const deleteButton = newNote.querySelector(".delete-button");
      deleteButton.addEventListener("click", function() {
        notesContainer.removeChild(newNote);
      });
    });
  });
  
