const contenedor = document.querySelector(".container");

let pokemons;
async function traerInfo() {
  const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0");
  const data = await respuesta.json();
  console.log(data);
  data.results.forEach(async (pokemon) => {
      const respPoke = await fetch(`${pokemon.url}`)
      const dataPoke = await respPoke.json()
      console.log(dataPoke);
    contenedor.innerHTML += `<div class="card">
    <div class="card__thumnail">
        <div class="card__types">
            <h6 class="card_type">${dataPoke.types[0].type.name}</h6>
        </div>
        <img class="card__img" src="${dataPoke.sprites.front_default}" alt="">
        <div class="card__stats">
            <h3 class="card__name">${pokemon.name}</h3>
            <ul class="card__stats-list">
                <li class="card__stat">ID : <span class="card__stat-points">${dataPoke.id}</span></li>
                <li class="card__stat">Power : <span class="card__stat-points">${dataPoke.stats[5].base_stat}</span></li>
                <li class="card__stat">Damage : <span class="card__stat-points">${dataPoke.stats[2].base_stat}</span></li>
                <li class="card__stat">Ability : <span class="card__stat-points">${dataPoke.abilities[0].ability.name}</span></li>
                <li class="card__stat">Attacks : <span class="card__stat-points">${dataPoke.stats[1].base_stat}</span></li>
                <li class="card__stat">Health : <span class="card__stat-points">${dataPoke.stats[0].base_stat}</span></li>
                <li class="card__stat">Friendly : <span class="card__stat-points">${dataPoke.stats[4].base_stat}</span></li>
            </ul>
            <h5 class="card__footer">Pokemon Cards</h5>
        </div>
    </div>
</div>`;
  });
}

traerInfo();

