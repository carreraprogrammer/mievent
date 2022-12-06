import { NavLink } from 'react-router-dom';

const Country = () => {
    return (
      <>
        <h1>The country page is working</h1>
        <NavLink to='./event'>This button should conduce to the Event information</NavLink>
      </>   
    )
}

export default Country
