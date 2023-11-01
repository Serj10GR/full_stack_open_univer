import { useState } from "react";
import { Input } from "./Input";
import { Country } from "../types/country";
import { SearchCountryResults } from "./SearchCountryResults";

type SearchCountryFormProps = {
  countries: Array<Country>;
};

export const SearchCountryForm = ({ countries }: SearchCountryFormProps) => {
  const [query, setQuery] = useState("");

  const foundCountries = countries.filter(
    (c) =>
      c.name.common.toLowerCase().includes(query.toLowerCase()) ||
      c.name.official.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <Input
        value={query}
        label="find Countries"
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && <SearchCountryResults countries={foundCountries} />}
    </div>
  );
};
