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
        <NavLink to='./country/event'>This button should conduce to the Event information</NavLink>
        {events.map((event) => <h3 key={event.id}>{event.name}</h3>)}
      </>   
    )
}

export default Country
