// This component maps the information for each recipe, returning each as an article containing said information

const CountryCard = ({country}) => {
    // const mappedCountries = countries.map((ingredient, id) => {return <li key={id} className="recipeCard__li">{ingredient}</li>})
  
    return (
      <article className="countryCard">
  
          <h2 className="countryCard__name">{country.name.common}</h2>
          {/* <label htmlFor="countryCard__name">Name:</label> */}
          {/* <ul className="countryCard__name">
            {countries.map((, id) => (
              <li key={id} className="countryCard__li">{commonName}</li>
            ))}
          </ul> */}
      </article>
    )
  }
  
  export default CountryCard
  