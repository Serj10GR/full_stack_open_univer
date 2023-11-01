import { Country } from "../types/country";
import { WeatherInfo } from "./WeatherInfo";

type SingleCountryInfoProps = {
  country: Country;
};

export const SingleCountryInfo = ({
  country: {
    name,
    capital,
    area,
    languages,
    flags,
    capitalInfo: { latlng },
  },
}: SingleCountryInfoProps) => {
  const capitals = capital.join(", ");
  const langValues = Object.values(languages);

  return (
    <div>
      <h1>{name.common}</h1>
      <div>capital: {capitals}</div>
      <div>area: {area}</div>

      <div>
        <h3>languages</h3>
        <ul>
          {langValues.map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      </div>
      <img
        style={{
          width: "200px",
          height: "100px",
          objectFit: "contain",
        }}
        src={flags.png}
        alt={flags.alt}
      />

      <WeatherInfo latlng={latlng} capital={capital[0]} />
    </div>
  );
};
