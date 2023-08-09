async function handleLoadTasks(event) {

    event.preventDefault();

    document.querySelector(".tasklist").textContent = "";
  
    const tasks = await getTasks();

    for (const task of tasks) {
        insertTaskInDom(task);
    }
}

async function getTasks() {

    let endpoint = apiConfig.endpoint + "/tasks";

    const response = await fetch(endpoint);

    const datas = await response.json();

    const tasksList = [];

    for (const data of datas.tasks) {

        const task = {
            id: data.id,
            title: data.title,
            category: data.category
        };

        tasksList.push(task);
    }

    return tasksList;
}

function insertTaskInDom(task) {
    //création de mom <li>
    const taskItem = document.createElement('li');
    taskItem.dataset.id = task.id;
    // création de mon <p> avec le titre
    const taskTitle = document.createElement('p');
    taskTitle.innerHTML = task.title;
    //ajout d'une balise <em> dans mon <p>
    const taskCategory = document.createElement('em');
    taskCategory.innerHTML = task.category.name;

    // ajout de mon <p> et de mon <em> dans mon <li>
    taskItem.append(taskTitle);
    taskItem.append(taskCategory);

    // création de delete
    const deleteElement = document.createElement('div');
    deleteElement.classList.add('delete');
    deleteElement.addEventListener('click', handleDeleteTask);

    // création de edit
    const editElement = document.createElement('div');
    editElement.classList.add('edit');
    editElement.addEventListener('click', handleEditTask);
    // ajout de delete et edit dans mon <li>
    taskItem.append(deleteElement, editElement);
    // ajout de mon <li> dans ma liste <ul>
    const taskListElement = document.querySelector('.tasklist');
    taskListElement.append(taskItem);
}

// document.addEventListener('DOMContentLoaded', handleLoadTasks);