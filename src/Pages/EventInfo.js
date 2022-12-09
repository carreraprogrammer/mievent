import { useDispatch, useSelector } from 'react-redux';

const EventInfo = () => {

  const apiId = useSelector((state) => state.Events.eventId)

  return(
    <h1>{apiId}</h1>
  )
}

export default EventInfo