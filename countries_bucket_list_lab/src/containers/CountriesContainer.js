import {useEffect, useState} from "react"; 
import Countries from "../components/Countries";
import CountryList from "../components/CountryList";

const CountryContainer = () => {
    const [countries, setCountries] = useState(""); 
    //const randomNumber = Math.floor(Math.random()*150);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setCountries(data))
    }, []); 

    return (
        countries ? <CountryList countries={countries}/> : <p> Loading countries...</p>
    )
}

export default CountryContainer;