import { useEffect, useState } from "react";
import { Country } from "../types/country";
import axios from "axios";

const API = "https://studies.cs.helsinki.fi/restcountries/api/all";

export const useCountries = () => {
  const [countries, setCountries] = useState<Array<Country>>([]);
  const [countriesLoading, setCountriesLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Array<Country>>(API)
      .then((res) => {
        setCountries(res.data);
        setCountriesLoading(false);
      })
      .catch(() => {
        setCountriesLoading(false);
        alert("Error when fetching countries");
      });
  }, []);

  return {
    countries,
    loading: countriesLoading,
  };
};
