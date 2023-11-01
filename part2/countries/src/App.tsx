import { SearchCountryForm } from "./components/SearchCountryForm";
import { useCountries } from "./hooks/useCountries";

const App = () => {
  const { countries, loading } = useCountries();
  return (
    <div
      style={{
        padding: "50px 100px",
      }}
    >
      {loading ? (
        <div>...Loading</div>
      ) : (
        <>
          <h2>Countries Search</h2>
          <SearchCountryForm countries={countries} />
        </>
      )}
    </div>
  );
};

export default App;
