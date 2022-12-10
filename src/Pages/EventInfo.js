import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaStepBackward } from 'react-icons/fa'
import '../Styles/EventInfo.css';

const EventInfo = () => {
  const apiInfo = useSelector((state) => state.Events.eventInfo)
  const parameters = useSelector((state) => state.Events.parameters)

  const handleDisplay = () => {
    if(apiInfo[0].seatMap().length > 0) {
      return {display: 'block'}
    } else {
      return {display: 'none'}
    }
  }
 
  return(
    <>
      <NavLink to={`../country/${parameters.countryCode}`} id='backArrow'><FaStepBackward style={{fontSize: '20px', color: 'red'}}/> </NavLink>
      <h1 id='eventName'>{apiInfo[0].name}</h1>
      <div id='basicInfo'>
        <div id='eventImageContainer'>
          <img alt='event' src={apiInfo[0].image} style={{height: '150px'}}/>
        </div>
        <div id='details'>
          <div id="prices">
            <p id="minPrice"><b>Min Price: </b>{apiInfo[0].prices[0].min}{apiInfo[0].prices[0].currency}</p>
            <p id="maxPrice"><b>Max Price: </b>{apiInfo[0].prices[0].max}{apiInfo[0].prices[0].currency}</p>
          </div>
          <div id='dates'>
            <p id='date'><b>Date: </b>{apiInfo[0].startDate}</p>
            <p id='time'><b>Local Time: </b> {apiInfo[0].startTime}</p>
          </div>
          <div id='genres'>
            <p id='genre'><b>Genre: </b>{apiInfo[0].genre}</p>
            <p id='subGenre'><b>Sub Genre: </b>{apiInfo[0].genre}</p>
          </div>
          <div id='city'>
            <p><b>City: </b>{apiInfo[0].city}</p>
          </div>
          <div id='purchaseContainer'>
            <a href={apiInfo[0].purchase}  target="_blank" rel="noreferrer"> PURCHASE </a>
          </div>
        </div>
      </div>
      <p id='eventDescription'>{apiInfo[0].info}</p>
      <div id='seatMapContainer'>
        <img id='seatMap' src={apiInfo[0].seatMap()} alt='seatmap' style={handleDisplay('seatMap')}/>
      </div>
    </>
  )
}

export default EventInfo
