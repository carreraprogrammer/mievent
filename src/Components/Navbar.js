import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css'
import logo from '../Resources/Images/Logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { cleanState } from '../Redux/EventsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
    const dispatch = useDispatch()


    return (
    <nav>
       <div id='burgerContainer'><GiHamburgerMenu style={{color: 'red', fontSize: '25px'}} /></div>
       <NavLink to='/'><img alt='logo' src={logo} id='logo' onClick={() => dispatch(cleanState())} /></NavLink>
       <ul id='navigation'>
          <NavLink to='/' className={({ isActive }) => (isActive ? 'navigationLink currentPage' : 'navigationLink')} onClick={() => dispatch(cleanState())}>Home</NavLink>
          <NavLink to='/about' className={({ isActive }) => (isActive ? 'navigationLink currentPage' : 'navigationLink')}>About</NavLink>
          <NavLink to='/profile' className={({ isActive }) => (isActive ? 'navigationLink currentPage' : 'navigationLink')}>My profile</NavLink>
       </ul>
    </nav>
    )
}

export default Navbar