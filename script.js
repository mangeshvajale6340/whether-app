async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'your_api_key'; // Use OpenWeatherMap API
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();
  const result = document.getElementById('weatherResult');

  if (data.cod === 200) {
    result.innerHTML = `<h3>${data.name}</h3>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].description}</p>`;
  } else {
    result.innerHTML = '<p>City not found!</p>';
  }
}