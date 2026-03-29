const API_URL = "https://clevergaming-app.onrender.com/api/accounts/";

fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
        const formattedData = data.map(clever => [
            clever.accountId,
            clever.name,
            clever.studio,
            clever.year,
            clever.genre,
            clever.ign_rating,
            clever.status
        ]);

        new gridjs.Grid({
            columns: ["ID", "Name", "Studio", "Year", "Genre", "IGN Rating", "Status"],
            data: formattedData,
            search: true,
            pagination: {
                enabled: true,
                limit: 5,
            },
            resizable: true,
            style: {
                table: {
                    border: '1px solid #ccc',
                },
                th: {
                    backgroundColor: '#f4f4f4',
                    text-align: 'left',
                },
                td: {
                    "padding": '8px',
                    "border-bottom": '1px solid #ddd',
                }
            }
        }).render(document.getElementById("grid-container"));
    })
    .catch(error => console.error("Error fetching data:", error));
