function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    
    if (taskText === '') {
        alert('Kuch to likhein!');
        return;
    }
    
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="edit-btn" onclick="editTask(this)">Edit</button>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    
    taskList.appendChild(li);
    input.value = '';
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const span = li.querySelector('span');
    const currentText = span.innerText;
    
    if (button.innerText === 'Edit') {
        span.innerHTML = `<input type="text" value="${currentText}">`;
        button.innerText = 'Save';
    } else {
        const input = li.querySelector('input');
        span.innerText = input.value;
        button.innerText = 'Edit';
    }
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}