function handleEditTask(event) {
    const taskElement = event.currentTarget.parentNode;
    const taskId = taskElement.dataset.id;
    const taskTitle = taskElement.querySelector('p').textContent;

    getCategories();

    displayCreateForm(taskId, taskTitle);
}

async function updateTask(datas) {
    const response = await fetch(apiConfig.endpoint + '/tasks/' + datas.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datas)
    });

    const task = await response.json();

    return task;
}

function updateTaskInDom(task) {
    const taskElement = document.querySelector('li[data-id = "' + task.id + '"]');
    taskElement.querySelector('p').textContent = task.title;
}