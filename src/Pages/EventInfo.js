import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaStepBackward } from 'react-icons/fa'
import '../Styles/EventInfo.css';

const EventInfo = () => {
  const apiInfo = useSelector((state) => state.Events.eventInfo?.[0] ?? {})
  const parameters = useSelector((state) => state.Events.parameters)
 
  return(
    <>
      <NavLink to={`../country/${parameters.countryCode}`} id='backArrow'><FaStepBackward style={{fontSize: '20px', color: 'red'}}/> </NavLink>
      <h1 id='eventName'>{apiInfo.name ?? ''}</h1>
      <div id='basicInfo'>
        <div id='eventImageContainer'>
          <img alt='event' src={apiInfo.image ?? ''} style={{height: '150px'}}/>
        </div>
        <div id='details'>
          <div id="prices">
            <p id="minPrice"><b>Min Price: </b>{apiInfo.prices?.[0]?.min ?? 'Not available'}{apiInfo.prices?.[0]?.currency ?? ''}</p>
            <p id="maxPrice"><b>Max Price: </b>{apiInfo.prices?.[0]?.max ?? 'Not available'}{apiInfo.prices?.[0]?.currency ?? ''}</p>
          </div>
          <div id='dates'>
            <p id='date'><b>Date: </b>{apiInfo.startDate ?? ''}</p>
            <p id='time'><b>Local Time: </b> {apiInfo.startTime ?? ''}</p>
          </div>
          <div id='genres'>
            <p id='genre'><b>Genre: </b>{apiInfo.genre ?? ''}</p>
            <p id='subGenre'><b>Sub Genre: </b>{apiInfo.subGenre ?? ''}</p>
          </div>
          <div id='city'>
            <p><b>City: </b>{apiInfo.city ?? ''}</p>
          </div>
          <div id='purchaseContainer'>
            <a href={apiInfo.purchase ?? ''}  target="_blank" rel="noreferrer"> PURCHASE </a>
          </div>
        </div>
      </div>
      <p id='eventDescription'>{apiInfo.info ?? ''}</p>
      <div id='seatMapContainer' >
        <img id='seatMap' src={apiInfo.seat ?? ''} alt='seatmap'/>
      </div>
    </>
  )
}

export default EventInfo
