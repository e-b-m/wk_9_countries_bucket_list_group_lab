import { useState } from "react";

const CountryForm = ({addNewCountry}) => {
    const [newCountry, setNewCountry] = useState("");
    // const [newIngredients, setNewIngredients] = useState();
    // const [newRating, setNewRating] = useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
      const newCountryInput = {
        countryName: newCountry,
        // ingredients: newIngredients.split(","),
        // rating: newRating
      };
      addNewCountry(newCountryInput);
}

return (
    <section className="newCountryForm container">
      <h2>New Country Form:</h2>
      <form className="newCountryForm__form" onSubmit={handleSubmit}>

          <label className="newCountryForm__label" htmlFor="commonName">Country Name:</label>
          <input 
            type="text" className="newCountryForm__input" id="commonName" 
            required
            value={newCountry}
            onChange={(event) => setNewCountry(event.target.value)}/>

          <input className="newCountryForm__submit" type="submit" value="Submit" id="submitButton" />
      </form>
    </section>
  )
}

export default CountryForm;