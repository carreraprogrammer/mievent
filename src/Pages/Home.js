import { NavLink } from 'react-router-dom';

const Home =  () => {
    const countries = ['US', 'CA', 'GB', 'ZA', 'ES']
    return (
      <>
        <h1>The home page is working</h1>
        {countries.map((country) =>  <NavLink to={`./${country}`} end> {country} page</NavLink> )}
      </>
    )
}

export default Home

