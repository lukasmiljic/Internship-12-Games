const apiUrl = "https://api.rawg.io/api";
const apiKey = "464bc085dbbf4f33bcb2ccb39d36a6ec";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchGamesOrderMetacritic() {
  return fetchData(
    `${apiUrl}/games?=key${apiKey}&ordering=-metacritic&page_size=20`
  );
}
