import {
    fetchGameById,
    fetchGameByName,
    fetchGamesOrderMetacritic,
    fetchPlatforms,
} from "./api.js";

function filterGames(games) {
    return games.filter(
        (game) => game.esrb_rating !== null && game.esrb_rating.id != 5
    );
}

function generateContainer(title, taskId) {
    const taskContainer = document.getElementById(taskId);

    const taskTitle = document.createElement("h2");
    taskTitle.classList.add("task-title");
    taskTitle.textContent = title;
    taskContainer.appendChild(taskTitle);

    document.body.appendChild(taskContainer);
    return taskContainer;
}

function generateGameCard(games, task) {
    const innerContainer = document.createElement("div");
    innerContainer.classList.add("games-container");
    task.appendChild(innerContainer);

    games.forEach((game) => {
        let artwork = game.background_image;
        if (artwork === null) {
            artwork = "../assets/no_image.png";
        }
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");
        innerContainer.appendChild(gameCard);
        gameCard.innerHTML = `
        <img class="game-img" src="${artwork}" />
        <div class="game-title">${game.name}</div>
        <div class="game-release-date">${game.released}</div>
        <div class="game-rating">${game.metacritic}/100</div>
    `;
    });
}

function generatePlatformCard(platforms, task) {
    const innerContainer = document.createElement("div");
    innerContainer.classList.add("games-container");
    task.appendChild(innerContainer);

    platforms.forEach((platform) => {
        let artwork = platform.image_background;
        if (artwork === null) {
            artwork = "../assets/no_image.png";
        }
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");
        innerContainer.appendChild(gameCard);
        gameCard.innerHTML = `
          <img class="game-img" src="${artwork}" />
          <div class="game-title">${platform.name}</div>
          <div class="game-release-date">${platform.games_count}</div>
        `;
    });
}

//task 1.
fetchGamesOrderMetacritic()
    .then((games) =>
        generateGameCard(
            games,
            generateContainer("Task 1. - Metacritic Top 20 Games", "task1")
        )
    )
    .catch(console.error);

// // task 2.
// const gameName = prompt("Enter game title: ");
// fetchGameByName(gameName).then((games) =>
//     generateGameCard(
//         games.slice(0, 10),
//         generateContainer(
//             `Task 2. - 10 Games with names similar to "${gameName}"`,
//             "task2"
//         )
//     )
// );

//task 3.
// fetchPlatforms().then((platforms) =>
//     generatePlatformCard(
//         platforms,
//         generateContainer("Task 3. Platforms with the most games", "task3")
//     )
// );

//task 4.
const game = fetchGameById(25097);
console.log(game);
// fetchGameById(25097).then((games) =>
//     generateGameCard(
//         games,
//         generateContainer(`Task 4. - Search game by ID"`, "task4")
//     )
// );
