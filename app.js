let data = ("books.json")

fetch(data)
    // On obtient une réponse que l'on convertit au format .json 



    .then((response) =>


        response.json()
        // La méthode then() renvoie un objet Promise
        .then((data) => {
            console.log(data);




        })


    )