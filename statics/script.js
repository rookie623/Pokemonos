const contenedor = document.querySelector(".container");

let pokemons;
async function traerInfo() {
  const respuesta = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=88&offset=0"
  );
  const data = await respuesta.json();
  //console.log(data);
  data.results.forEach(async (pokemon) => {
    const respPoke = await fetch(`${pokemon.url}`);
    const dataPoke = await respPoke.json();

    //   RENDERIZADO DE POKEMONES
    const card = document.createElement("div");
    card.className = "card";
    const cardThumbnail = document.createElement("div");
    cardThumbnail.className = "card__thumbnail";
    const cardTypes = document.createElement("div");
    cardTypes.className = "card__types";
    const type = document.createElement("h6");
    type.className = "card_type";
    type.innerText = `${dataPoke.types[0].type.name}`;
    const image = document.createElement("img");
    image.classList.add("card__img");
    image.src = `${dataPoke.sprites.front_default}`;
    const cardStats = document.createElement("div");
    cardStats.className = "card__stats";
    const cardName = document.createElement("h3");
    cardName.classList.add("card__name");
    cardName.innerText = `${pokemon.name}`;
    cardStats.appendChild(cardName);
    const statsList = document.createElement("ul");
    statsList.className = "card__stats-list";
    let stat = `<li class="card__stat">ID : <span class="card__stat-points">${dataPoke.id}</span></li>`;
    stat += `<li class="card__stat">Power : <span class="card__stat-points">${dataPoke.stats[5].base_stat}</span></li>`
    stat += `<li class="card__stat">Damage : <span class="card__stat-points">${dataPoke.stats[2].base_stat}</span></li>`
    stat += `<li class="card__stat">Ability : <span class="card__stat-points">${dataPoke.abilities[0].ability.name}</span></li>`
    stat += `<li class="card__stat">Attacks : <span class="card__stat-points">${dataPoke.stats[1].base_stat}</span></li>`
    stat += `<li class="card__stat">Health : <span class="card__stat-points">${dataPoke.stats[0].base_stat}</span></li>`
    stat += `<li class="card__stat">Friendly : <span class="card__stat-points">${dataPoke.stats[4].base_stat}</span></li>`
    statsList.innerHTML = stat;
    cardStats.appendChild(statsList);
    const footerCard = document.createElement("h5");
    footerCard.className = "card__footer";
    footerCard.innerText = "Pokemon Cards";

    if (dataPoke.types[0].type.name == "grass") {
      card.classList.add("card__b--green");
      cardThumbnail.classList.add("card__t--green");
      cardStats.classList.add("card__s--green");
    }
    if (dataPoke.types[0].type.name == "fire") {
      card.classList.add("card__b--red");
      cardThumbnail.classList.add("card__t--red");
      cardStats.classList.add("card__s--red");
    }
    if (dataPoke.types[0].type.name == "water") {
      card.classList.add("card__b--blue");
      cardThumbnail.classList.add("card__t--blue");
      cardStats.classList.add("card__s--blue");
    }

    cardTypes.appendChild(type);
    cardThumbnail.appendChild(cardTypes);
    cardStats.appendChild(footerCard);
    cardThumbnail.appendChild(image);
    cardThumbnail.appendChild(cardStats);
    card.appendChild(cardThumbnail);
    contenedor.appendChild(card);
  });
}

traerInfo();
