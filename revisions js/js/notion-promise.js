console.log('Notion promise');

const maPromesse = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Test promesse");
        reject("Test erreur");
    }, 3000)
});

maPromesse
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error);
    })


// fetch
// Utilisation de la promesse fetch avec l'url de l'api
fetch('https://data.education.gouv.fr/api/v2/catalog/datasets')
    // Lorsque la promesse renvoi une réponse, on formate les données en json
    .then((response) => {
        return response.json();
    })
    // On récupère les données formatées 
    .then((data) => {
        console.log(data);

        for (const iterator of data.datasets) {
            console.log(iterator.dataset.dataset_id);
        }
    })
