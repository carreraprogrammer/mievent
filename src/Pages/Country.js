import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getEvents } from '../Redux/EventsSlice'

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
        <h1>The country page is working</h1>
        <div id='eventsGrid'>
        {events.map((event) => (
          <div className='eventCard'>
            <img src={event.cardImage} alt='event' style={{width: '300px'}}/>
            <h3 key={event.id}>{event.name}</h3>
          </div>
          ))}
        </div>
      </>   
    )
}

export default Country
