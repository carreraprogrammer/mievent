import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
)

/* const eventsArray = async (countryCode, page) => {
  const events = await fetch (`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${countryCode}&apikey=uE2X0AQk9MkPAgeiAz7SljZM9hEG6X2B&locale=*&page=${page}`)
  .then(response => response.json())
  .then(response => response._embedded.events)
const eventsApi = events.map((event) => {
    const eventInfo = {
    name: event.name,
    cardImage: event.images[1].url,
    image: event.images[3].url,
    info: event.info,
    startDate: event.dates.start.localDate,
    startTime: event.dates.start.localTime,
    status: event.dates.status.code,
    prices: event.priceRanges,
    externalLinks: event.externalLinks,
    purchase: event.url,
    genre: event.classifications[0].genre.name,
    subGenre: event.classifications[0].subgenre,
    city: event._embedded.venues[0].city.name,
  }
  return eventInfo
})
  return eventsApi
}


console.log(eventsArray('US', 0))*/