import { fetchGameByName, fetchGamesOrderMetacritic } from "./api.js";

function filterGames(games) {
    return games.filter(
        (game) => game.esrb_rating !== null && game.esrb_rating.id != 5
    );
}

function generateContainer(games, title) {
    const task = document.createElement("div");
    task.classList.add("task");

    const taskTitle = document.createElement("h2");
    taskTitle.classList.add("task-title");
    taskTitle.textContent = title;
    task.appendChild(taskTitle);

    const gamesContainer = document.createElement("div");
    gamesContainer.classList.add("games-container");
    task.appendChild(gamesContainer);

    games.forEach((game) => {
        let artwork = game.background_image;
        if (artwork === null) {
            artwork = "../assets/no_image.png";
        }
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");
        gamesContainer.appendChild(gameCard);
        gameCard.innerHTML = `
      <img class="game-img" src="${artwork}" />
        <div class="game-title">${game.name}</div>
        <div class="game-release-date">${game.released}</div>
        <div class="game-rating">${game.metacritic}/100</div>
      `;
    });
    // const line = document.createElement("hr");
    // task.appendChild(line);
    document.body.appendChild(task);
}

//task 1.
fetchGamesOrderMetacritic()
    .then((games) =>
        generateContainer(
            filterGames(games),
            "Task 1. - Metacritic Top 20 Games"
        )
    )
    .catch(console.error);

//task 2.
const gameName = prompt("Enter game title: ");
fetchGameByName(gameName).then((games) =>
    generateContainer(
        games.slice(0, 10),
        `Task 2. - 10 Games containing similar to "${gameName}"`
    )
);
