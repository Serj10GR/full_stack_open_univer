import { useWeather } from "../hooks/useWeather";

type WeatherInfoProps = {
  capital: string;
  latlng: Array<number>;
};

export const WeatherInfo = ({ latlng, capital }: WeatherInfoProps) => {
  const [lat, lng] = latlng;
  const { weatherInfo, error } = useWeather({ lat, lng });

  if (error) {
    return (
      <small
        style={{
          color: "red",
          display: "block",
          marginTop: "10px",
        }}
      >
        Can't get weather info: {error?.message}
      </small>
    );
  }

  if (!weatherInfo) {
    return "...Loading";
  }

  const icon = weatherInfo.weather[0];

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <p>temperature: {weatherInfo.main.temp} Celcius</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon.icon}@2x.png`}
        alt={icon.description}
      />
      <p>wind: {weatherInfo.wind.speed} m/s</p>
    </div>
  );
};
