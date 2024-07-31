document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter anything to be done');
            return;
        }

        addTask(taskText);
        taskInput.value = '';
    });

    function addTask(text) {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" onclick="toggleComplete(this)">
            <span>${text}</span>
            <button class="delete" onclick="removeTask(this)">&#10005;</button>
        `;
        taskList.appendChild(li);
    }

    window.toggleComplete = function(checkbox) {
        const li = checkbox.parentElement;
        if (checkbox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    }

    window.removeTask = function(button) {
        const li = button.parentElement;
        li.remove();
    }
});
