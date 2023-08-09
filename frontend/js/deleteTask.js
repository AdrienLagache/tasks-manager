async function handleDeleteTask(event) {

    event.preventDefault();

    const currentElement = event.target.parentNode;
    const currentElementId = currentElement.dataset.id;

    await deleteTasks(currentElementId);

    currentElement.remove();
}

async function deleteTasks(id) {

    const myInit = {
        method: 'DELETE'
    }

    let endpoint = apiConfig.endpoint + "/tasks/" + id;
    
    await fetch(endpoint, myInit);
}