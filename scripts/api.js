const apiUrl = "https://api.rawg.io/api";
const apiKey = "064c6f5b9e0f4e6c961f35e4dd0a52ff";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchGamesOrderMetacritic() {
  return fetchData(
    `${apiUrl}/games?key=${apiKey}&ordering=-metacritic&page_size=20`
  );
}
