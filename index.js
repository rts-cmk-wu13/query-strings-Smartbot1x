let favorites = readFromLocalStorage("favorites") || [];
console.log(favorites);

// method 1
/* if (!favorites) {
    favorites = [];
} */
// method 2 
  !favorites && favorites == []; 




fetch("/data/destinations.json")
    .then(response => response.json())
    .then(data => {
        let sectionElm = document.createElement("section");
        sectionElm.innerHTML = data.destinations.map(destination => {
            return `
                <article class="card">
                    <figure class="card_imgcontainer">
                        <img src="/img/${destination.image}" style="view-transition-name: image-transition-${destination.id};">
                    </figure>
                    <div class="card__flex-bttns">   
                    <button class="card__favoritebtn ${favorites.includes(destination.id.toString()) ? "card__favoritebtn--selected" : ""} " data-favid="${destination.id}"> heart </i> </button>
                    <a href="destination.html?id=${destination.id}">
                       more
                    </a></div>
                </article>
            `;
        }).join("");

        sectionElm.querySelectorAll(".card__favoritebtn").forEach(function(button) {
            button.addEventListener("click", function(event) {
                let currentId = event.target.dataset.favid;
                if (favorites.includes(currentId)) {
                    let newFavorites = favorites.filter(id => id !== currentId);
                    favorites = newFavorites;
                    console.log(favorites);
                } else {
                    favorites.push(currentId);
                    console.log(favorites);
                }
                saveToLocalStorage("favorites", favorites);
            });
        });
        

        document.querySelector('#root').appendChild(sectionElm);
    })
