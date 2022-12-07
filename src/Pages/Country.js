import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getEvents } from '../Redux/EventsSlice'
import { ImSearch } from 'react-icons/im'
import '../Styles/Country.css'

const Country = () => {

  const dispatch = useDispatch();
 
  
  const events = useSelector((state) => state.Events.data)
  const parameters = useSelector((state) => state.Events.parameters)

  console.log(parameters)

  useEffect(() => {
    if (events.length >= 0) {
      dispatch(getEvents(parameters));}
  });

    return (
      <>
        <form id='searchBar'>
          <input type='text' id='searchInput' />
          <button type='submit' id='searchBtn'><ImSearch style={{color: 'red', fontSize: '1rem'}}/></button>
        </form>
        <div id='eventsGrid'>
        {events.map((event) => (
          <div className='eventCard' key={event.id}>
            <img src={event.cardImage} alt='event' style={{width: '125px', height: '60px'}}/>
            <h5 >{event.name}</h5>
            <p>{event.genre}</p>
          </div>
          ))}
        </div>
      </>   
    )
}

export default Country
