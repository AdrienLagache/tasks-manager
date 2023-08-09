const apiConfig = {
    endpoint: "http://127.0.0.1:8000/api"
}

function init() {

    document.addEventListener('DOMContentLoaded', handleLoadTasks);

    const newTaskButton = document.querySelector('.create-task-container button');
    newTaskButton.addEventListener('click', handleCreateTask);

    const formElement = document.querySelector('.modal-dialog form');
    formElement.addEventListener('submit', handleSubmitNewTask);
}

// document.addEventListener('DOMContentLoaded', init);
init()











