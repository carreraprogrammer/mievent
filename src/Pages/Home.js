import { NavLink } from 'react-router-dom';
import '../Styles/Home.css'

const Home =  () => {
    const countries = [
      {countryCode: 'US', countryName: 'UNITED STATES'}, 
      {countryCode: 'CA', countryName: 'CANADA'}, 
      {countryCode: 'GB', countryName: 'UNITED KINGDOM'},  
      {countryCode: 'ZA', countryName: 'SOUTH AFRICA'}, 
      {countryCode: 'ES', countryName: 'SPAIN'}, 
      {countryCode: 'AU', countryName: 'AUSTRALIA'}, 
    ]

    return (
      <div id="homeContainer">
        <header>
          <div id="headerImage">
          </div>
          <div id="headerText">
            <h1>WELLCOME TO MIEVENT</h1>
          </div>
        </header>
        <h2 id='gridTitle'>EVENTS BY COUNTRY</h2>
        <div id="countryGrid">
        {countries.map((country) => (
          <div className='countryContainer' key={country.countryCode}>
            <NavLink to={`./${country.countryCode}`} className="countryLink" key={country.countryCode} id={country.countryCode}>
               <h3 className="countryTitle">{country.countryName}</h3>
            </NavLink>
          </div>
        )
      )}
        </div>
      </div>
    )
}

export default Home

