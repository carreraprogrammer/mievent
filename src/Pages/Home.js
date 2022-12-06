import { NavLink } from 'react-router-dom';

const Home =  () => {
    return (
      <>
        <h1>The home page is working</h1>
        <NavLink to='./Country' end>This button should conduce to the Country page</NavLink>
      </>
    )
}

export default Home

