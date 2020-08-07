const container = document.querySelector(".container")
const teams = [
    { name: "Agropecuario Argentino", image: "images/escudo1.png" },
    { name: "All Boys", image: "images/escudo2.png" },
    { name: "Almagro", image: "images/escudo3.png" },
    { name: "Alvarado", image: "images/escudo4.png" },
    { name: "Atlanta", image: "images/escudo5.png" },
    { name: "Atlético Rafaela", image: "images/escudo6.png" },
    { name: "Barracas Central", image: "images/escudo7.png" },
    { name: "Brown Adrogué", image: "images/escudo8.png" },
    { name: "Guillermo Brown", image: "images/escudo9.png" },
];

const showTeams = () => {
    let output = ""
    teams.forEach(
        ({ name, image }) =>
            (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">See</a>
                </div>
                `)
    );
    container.innerHTML = output
};

document.addEventListener("DOMContentLoaded", showTeams);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    });
}


