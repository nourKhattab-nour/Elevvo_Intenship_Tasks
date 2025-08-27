const API_KEY = "cdbbc9a22c584686b2f144754252708";
const BASE_URL = "https://api.weatherapi.com/v1";

export async function getWeather(city) {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=3`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather");
    }
    return await response.json();
  } catch (error) {
    console.log(error, error.message);
  }
}
