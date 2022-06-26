import { useState, useEffect } from "react";
import Countries from './components/Countries'
import Search from "./components/Search";
import   "./Style/App.css";
const url = "https://restcountries.com/v3.1/all"
const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [countries, setCountires] = useState([])
  const [filteredCountries, setFilteredCountires] = useState(countries)

  const fetchData = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountires(data)
      setFilteredCountires(data)
      setIsLoading(false)
      setError(null)
    }
    catch (err) {
      setIsLoading(false)
      setError(err)
    }
  }
  useEffect(() => {
    fetchData(url)
  }, [])
const handleRemove = (name)=>{
  const filter = filteredCountries.filter((country)=>
  country.name.common !== name)
  setFilteredCountires(filter);
}
const handleSearch=(searchValue)=>{
  let value = searchValue.toLowerCase();
  const newCountries = countries.filter((country)=>{
    const countryName = country.name.common.toLowerCase();
    return countryName.startsWith(value)
  })
  setFilteredCountires(newCountries)
}
  return (
    <>
    <h1>Country App</h1>
    <Search onSearch={handleSearch}/>
    {isLoading && <h2>Lodaing...</h2>}
    {error && <h2>{error.message}</h2>}
    {countries && <Countries 
    propsCountries = { filteredCountries}
    onRemoveCountry={handleRemove}/>}
    </>
  );
};

export default App;
