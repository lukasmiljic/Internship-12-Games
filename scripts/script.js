import { fetchGamesOrderMetacritic } from "./api.js";
fetchGamesOrderMetacritic();

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
    document.body.appendChild(task);
}

fetchGamesOrderMetacritic()
    .then((games) =>
        generateContainer(games, "Task 1. - Metacritic Top 20 Games")
    )
    .catch(console.error);
