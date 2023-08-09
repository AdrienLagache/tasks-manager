function handleCreateTask() {

    displayCreateForm();

    getCategories();
}

function displayCreateForm(id = '', title = '') {

    const modalElement = document.querySelector('.modal-dialog');
    modalElement.style.display = 'flex';

    modalElement.querySelector('#task-id').value = id;
    modalElement.querySelector('#task-title').value = title;
}

async function getCategories() {

    let fullEndpoint = apiConfig.endpoint + "/categories";
    const response = await fetch(fullEndpoint);
    const datas = await response.json();

    insertCategoriesInDom(datas);
}

function insertCategoriesInDom(categoriesList) {
    //ajout de mon select pour les catégories dans le formulaire d'ajout
    for (categoryObject of categoriesList) {
        optionElement = document.createElement('option');
        optionElement.setAttribute('value', categoryObject.id);
        optionElement.textContent = categoryObject.name;
    
        const selectElement = document.querySelector('#task-category');
        selectElement.append(optionElement);
    }
}

async function handleSubmitNewTask(event) {
    event.preventDefault();    
    const formElement = event.currentTarget;

    const formData = new FormData(formElement);

    const id = formData.get('id');

    if (id === '') {
        const createdTask = await createTask({
            title: formData.get('title'),
            category_id: formData.get('category')
    });    
        insertTaskInDom(createdTask.tasks);

    } else {
        const task = await updateTask({
            title: formData.get('title'),
            id: id
        })

        updateTaskInDom(task);
    }


    hideCreateForm();
}

async function createTask(task) {

    const response = await fetch(apiConfig.endpoint + '/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })

    const createdTask = await response.json();

    return createdTask;
}

function hideCreateForm() {
    const modalElement = document.querySelector('.modal-dialog');
    modalElement.style.display = 'none';
}