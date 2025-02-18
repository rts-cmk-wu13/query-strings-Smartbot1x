
let search = window.location.search;
let params = new URLSearchParams(search);
let id = params.get("id"); 
console.log("ID fra URL:", id); 


if (id) {
  
    fetch('/data/destinations.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Netværksfejl: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log("Data hentet:", data); 

           
            let selectedDestination = data.destinations.find(dest => dest.id === parseInt(id));
            console.log("Valgt destination:", selectedDestination); 

            if (selectedDestination) {
                destHtml(selectedDestination); 
            } else {
                document.getElementById("destinations-container").innerHTML = 
                    `<p>Ingen destination fundet med dette ID.</p>`;
            }
        })
        .catch(error => {
            console.error('Fejl ved hentning af data:', error);
            document.getElementById("destinations-container").innerHTML = 
                `<p>Kunne ikke hente data. Prøv igen senere.</p>`;
        });
} else {
    console.log("Ingen id fundet i URL'en");
    document.getElementById("destinations-container").innerHTML = 
        `<p>Intet ID fundet i URL'en.</p>`;
}


function destHtml(destination) {
    const container = document.getElementById("destinations-container");


    let destinationHtml = `
        <div class="destination-card">
            <div class="dest-img__container">
                <img class="dest__foto" src="/img/${destination.image}" alt="${destination.destination}">
                <button class="dest__bttn">
                    <span class="favorite__icon"><i class="fa-solid fa-heart"></i></span> FAVORIT
                </button>
            </div>
            <div class="destination-card__content">
                <h3 class="desti__place">${destination.destination.toUpperCase()}</h3>
                <h2 class="desti__header">${destination.title}</h2>
                <p class="dest_subtitle">${destination.subtitle}</p>
                <p class="dest__txt">${destination.text}</p>
                <h4 class="dest__Faciliteter">Faciliteter</h4>
                <ul class="dest__Faciliteter-list">
                    ${destination.facilities.map(facility => `<li>${facility}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;

 
    container.innerHTML = destinationHtml;
}









