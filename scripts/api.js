const apiUrl = "https://api.rawg.io/api";
const apiKey = "064c6f5b9e0f4e6c961f35e4dd0a52ff";

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.results);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function fetchGamesOrderMetacritic() {
    return fetchData(
        `${apiUrl}/games?key=${apiKey}&ordering=-metacritic&page_size=20`
    ).then((data) => data.results);
}

export async function fetchGameByName(title) {
    return fetchData(
        `${apiUrl}/games?key=${apiKey}&ordering=-released&search=${title}`
    ).then((data) => data.results);
}

export async function fetchPlatforms() {
    return fetchData(
        `${apiUrl}/platforms?key=${apiKey}&ordering=-games_count&page_size=10`
    ).then((data) => data.results);
}

export async function fetchGameById(id) {
    const url = `${apiUrl}/games/${id}?key=${apiKey}`;
    return fetchData(url);
}
