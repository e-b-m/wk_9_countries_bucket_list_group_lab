
import CountryCard from './CountryCard'

const CountryList = ({ countries }) => {

    let mappedCountries = countries.forEach((country) => {
        return <p>Hello again</p>
    })
    
  return (
    <section className="countryList container">
        <div className="countryCardContainer">
            {mappedCountries}
        </div>
    </section>
  )
}

export default CountryList; 