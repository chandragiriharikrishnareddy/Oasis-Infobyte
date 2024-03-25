function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() !== '') {
        createTaskElement(taskInput.value, false);
        taskInput.value = ''; 
    }
}

function createTaskElement(taskContent, isCompleted) {
    const tasksList = isCompleted ? document.getElementById('completedTasks') : document.getElementById('pendingTasks');

    const li = document.createElement('li');
    li.textContent = taskContent;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete-btn';
    completeButton.onclick = function() {
        tasksList.removeChild(li);
        createTaskElement(taskContent, !isCompleted);
    };

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    editButton.onclick = function() {
        const newTaskContent = prompt('Edit your task', taskContent);
        if (newTaskContent.trim() !== '') {
            li.firstChild.textContent = newTaskContent;
        }
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function() {
        tasksList.removeChild(li);
    };

    li.appendChild(completeButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    tasksList.appendChild(li);
}

document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
