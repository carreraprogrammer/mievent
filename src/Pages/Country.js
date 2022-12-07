import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getEvents } from '../Redux/EventsSlice'
import { ImSearch } from 'react-icons/im'
import '../Styles/Country.css'

const Country = () => {

  const dispatch = useDispatch();
 
  
  const events = useSelector((state) => state.Events.data)

  useEffect(() => {
    if (events.length === 0) {
      dispatch(getEvents());
    }
  });

    return (
      <>
        <form id='searchBar'>
          <input type='text' id='searchInput' />
          <button type='submit' id='searchBtn'><ImSearch style={{color: 'red', fontSize: '1rem'}}/></button>
        </form>
        <div id='eventsGrid'>
        {events.map((event) => (
          <div className='eventCard'>
            <img src={event.cardImage} alt='event' style={{width: '300px', height: '200px'}}/>
            <h3 key={event.id}>{event.name}</h3>
          </div>
          ))}
        </div>
      </>   
    )
}

export default Country
