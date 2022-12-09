import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getEvents } from '../Redux/EventsSlice'
import { ImSearch } from 'react-icons/im'
import { RxDotFilled } from 'react-icons/rx'
import '../Styles/Country.css'

const Country = () => {

  const dispatch = useDispatch();
 
  
  const apiEvents = useSelector((state) => state.Events.data)
  const apiParameters = useSelector((state) => state.Events.parameters)
  const [parameters, setParameters] = useState(apiParameters)
  const [events, setEvents] = useState(apiEvents)

  useEffect(() => {
    dispatch(getEvents(parameters));
  }, [dispatch, parameters]);

  const searchEvent = () => {
    const inputValue =  document.getElementById('searchInput').value.toLowerCase();
    let newEvents;
    if(inputValue.length > 0) {
      newEvents =  events.filter((event) => event.name.toLowerCase().indexOf(inputValue) > -1)
    }else {
      newEvents = apiEvents
    }
    setEvents(newEvents);
  }


    return (
      <>
        <div className="countryHeader">
          <div className="rightSide">
            <h1> EVENTS IN {parameters.countryName}</h1>
          </div>
          <div className={`countryHeaderImage ${parameters.countryCode}`}></div>
        </div>
        <h2 id='gridTitle'>{parameters.countryName}</h2>
        <form id='searchBar'>
          <input type='text' id='searchInput' onInput ={() => searchEvent()}/>
          <button type='submit' id='searchBtn' onClick ={(e) => e.preventDefault()}><ImSearch /></button>
        </form>
        <div id='eventsGrid'>
        {events.map((event) => (
          <div className='eventCard' key={event.id}>
            <div className="eventImageContainer">
              <img src={event.cardImage} alt='event' style={{width: '110px', height: '80px'}}/>
            </div>
            <div className='eventInformation'>
              <p className='eventStatus'>
                <RxDotFilled style={{color: 'green', fontSize: '1rem'}} />  
                {event.status}
              </p>
              <h5 className='eventName'>{event.name}</h5>
              <hr className='cardHr' />
              <h6 className='eventCity'><b>City: </b>{event.city}</h6>
              <h6 className='eventGenre'><b>Genre: </b>{event.genre}</h6>
              <h6 className='eventDate'><b>Date: </b>{event.startDate}</h6>
            </div>
          </div>
          ))}
        </div>
        <div className='controlPanel'>
          <button id='nextBtn' 
          onClick={()=> {
            if(parameters.page > 0){
            setParameters({...parameters, page: parameters.page - 1})
            console.log(parameters)}}}
          ><div id="prev"></div></button>
          <p>page {parameters.page}</p>
          <button id='prevBtn'          
          onClick={()=> {
             setParameters({...parameters, page: parameters.page + 1})
             console.log(parameters)
            }}><div id="next"></div></button>
        </div>
      </>   
    )
}

export default Country
