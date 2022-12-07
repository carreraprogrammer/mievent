import { NavLink } from 'react-router-dom';
import { VscFoldDown } from 'react-icons/vsc'
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
            <NavLink to={`./country`} className="countryLink" key={country.countryCode} id={country.countryCode}>
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

