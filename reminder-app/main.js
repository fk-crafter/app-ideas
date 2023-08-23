document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const timeInput = document.getElementById('time');
    const addButton = document.getElementById('add');
    const deleteAllButton = document.getElementById('delete-all');
    const remindersList = document.getElementById('remindersList');

    addButton.addEventListener('click', addReminder);
    deleteAllButton.addEventListener('click', deleteAllReminders);

    loadReminders();

    function addReminder() {
        const task = taskInput.value;
        const time = timeInput.value;

        if (task && time) {
            const reminder = { task, time };
            saveReminder(reminder);
            displayReminder(reminder);
            taskInput.value = '';
            timeInput.value = '';
        }
    }

    function saveReminder(reminder) {
        let reminders = JSON.parse(localStorage.getItem('reminders')) || [];
        reminders.push(reminder);
        localStorage.setItem('reminders', JSON.stringify(reminders));
    }

    function loadReminders() {
        let reminders = JSON.parse(localStorage.getItem('reminders')) || [];
        reminders.forEach(displayReminder);
    }

    function displayReminder(reminder) {
        const reminderDiv = document.createElement('div');
        reminderDiv.className = 'reminder';
        reminderDiv.innerHTML = `
            <span>${reminder.task} à ${reminder.time}</span>
            <button class="delete-button">Supprimer</button>
        `;
        remindersList.appendChild(reminderDiv);

        const deleteButton = reminderDiv.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => deleteReminder(reminderDiv, reminder));
    }

    function deleteReminder(reminderDiv, reminder) {
        let reminders = JSON.parse(localStorage.getItem('reminders')) || [];
        reminders = reminders.filter(item => item !== reminder);
        localStorage.setItem('reminders', JSON.stringify(reminders));
        reminderDiv.remove();
    }

    function deleteAllReminders() {
        localStorage.removeItem('reminders');
        remindersList.innerHTML = '';
    }
});
