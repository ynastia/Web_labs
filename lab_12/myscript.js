let container = document.getElementById("data-container");
let info_container = document.getElementById("info-container");

async function show_data(id, loc) {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        if (!response.ok) throw new Error("Failed to fetch data");

        let json = await response.json();

        let div = document.createElement("div");
        let img = document.createElement("img");
        let header = document.createElement("h1");
        let txt = document.createElement("p");

        div.classList = "card-box";
        div.onclick = function () {
            window.location.href = `info.html?id=${id}`;
        };

        img.src = json["sprites"]["front_default"];
        header.innerText = json["forms"][0]["name"];

        if (loc === info_container) {
            txt.innerText =
                "Abilities: " +
                json["abilities"]
                    .map((ability) => ability.ability.name)
                    .join(", ") +
                "\nWeight: " +
                json["weight"];
        }

        div.append(img);
        div.append(header);
        div.append(txt);
        loc.append(div);
    } catch (error) {
        console.error(error);
    }
}

if (container) {
    for (let i = 1; i <= 27; i++) {
        show_data(i, container);
    }
}

if (info_container) {
    let id = new URLSearchParams(window.location.search).get("id");
    if (id) {
        show_data(id, info_container);
    } else {
        info_container.innerHTML = "<p>Invalid Pokémon ID</p>";
    }
}
