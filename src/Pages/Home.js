import { NavLink } from 'react-router-dom';
import { VscFoldDown } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import { filterCountry } from '../Redux/EventsSlice';
import '../Styles/Home.css'

const Home =  () => {
  const dispatch = useDispatch();

  const countries = [
      {countryCode: 'US', countryName: 'UNITED STATES', page: 0}, 
      {countryCode: 'CA', countryName: 'CANADA', page: 0}, 
      {countryCode: 'GB', countryName: 'UNITED KINGDOM', page: 0},  
      {countryCode: 'ZA', countryName: 'SOUTH AFRICA', page: 0}, 
      {countryCode: 'ES', countryName: 'SPAIN', page: 0}, 
      {countryCode: 'AU', countryName: 'AUSTRALIA', page: 0}, 
      {countryCode: 'DE', countryName: 'GERMANY', page: 0}, 
      {countryCode: 'NL', countryName: 'NETHERLANDS', page: 0},
      {countryCode: 'NO', countryName: 'NORWAY', page: 0},
      {countryCode: 'IT', countryName: 'ITALY', page: 0},
      {countryCode: 'NZ', countryName: 'NEW ZELAND', page: 0},
      {countryCode: 'PL', countryName: 'POLAND', page: 0},

    ]
  
  const handleClick = (code, page, name) => {
    const parameters = {
      countryCode: code,
      page: page,
      countryName: name,
    }
     dispatch(filterCountry(parameters))
  }

    return (
      <div id="homeContainer">
        <header>
          <div id="headerImage">
          </div>
          <div id="headerText">
            <h1>WELLCOME TO MiEVENT</h1>
            <p id='headerDescription'>A place where you can find your dream event, anywhere</p>
            <a id='discoverAction' href='#countryGrid'>
              <VscFoldDown style={{color: 'white'}}/>
            </a>
          </div>
        </header>
        <h2 id='gridTitle'>EVENTS BY COUNTRY</h2>
        <h2 id='desktopGridTitle'>CHOOSE YOUR COUNTRY!</h2>
        <hr />
        <div id="countryGrid">
        {countries.map((country) => (
          <div className='countryContainer' key={country.countryCode}>
            <NavLink 
              to={`./country/${country.countryCode}`} 
              key={country.countryCode} 
              onClick={() => handleClick(country.countryCode, country.page, country.countryName)}
              className={`countryLink ${country.countryCode}`}>
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

