import './App.css';
import CountryContainer from './containers/CountriesContainer';
import CountryCard from './components/CountryCard';
import CountryForm from './containers/CountriesContainer';
import CountryList from './components/CountryList';

function App() {
  return (
  <div>
    <h1>Country Selector</h1>
    <button>Visited</button>
    <CountryContainer />
  </div>
  );
}

export default App;
