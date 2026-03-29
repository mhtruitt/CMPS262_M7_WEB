const formEl = document.querySelector('.form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData)

    //Validate that the fields have data results
    if (data.name = "" || data.year = "" || data.studio = "" || data.genre = "" || data.rating = "" || data.status = ""){
        $.toaster({priority: 'danger', title: 'Error', message: 'Oops! Something broke!'});
    }
    else {
        fetch('https://clevergaming-app.onrender.com/api/games/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data => console.log(data))
        .then(error => console.log(error))
        $.toaster({priority: 'success', title: 'Game Added!', message: 'Game added successfully!'});

    }

});
