import axios from "axios";
import { useEffect, useState } from "react";
import { Weather } from "../types/weather";

type UseWeatherProps = {
  lat: number;
  lng: number;
};

export const useWeather = ({ lat, lng }: UseWeatherProps) => {
  const [weatherInfo, setWeatherInfo] = useState<Weather | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${
      import.meta.env.VITE_WEATHER_KEY
    }&units=metric`;
    axios
      .get<Weather>(API)
      .then((res) => {
        setWeatherInfo(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [lat, lng]);

  return {
    weatherInfo,
    error,
  };
};
