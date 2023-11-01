import { useState } from "react";
import { Country } from "../types/country";
import { FoundCountryOption } from "./FoundCountryOption";
import { SingleCountryInfo } from "./SingleCountryInfo";

type SearchCountryResultsProps = {
  countries: Array<Country>;
};

export const SearchCountryResults = ({
  countries,
}: SearchCountryResultsProps) => {
  const [singleCountryToShow, setSingleCountryToShow] = useState(
    countries.length === 1 ? countries[0] : null
  );

  if (!countries.length) {
    <p style={{ margin: "10px 0" }}>No results found!</p>;
  }

  // show single country if only one found, or set mannualy from show button
  if (singleCountryToShow || countries.length === 1) {
    return <SingleCountryInfo country={singleCountryToShow || countries[0]} />;
  }

  // don't show results if more then 10
  if (countries.length > 10) {
    return (
      <p style={{ margin: "10px 0" }}>
        To many matches, please make the search more specific
      </p>
    );
  }

  return (
    <div>
      {countries.map((c) => (
        <FoundCountryOption
          key={c.name.official}
          name={c.name.common}
          onShowClick={() => setSingleCountryToShow(c)}
        />
      ))}
    </div>
  );
};
