// This is the call that we can use to call all the events that we have available 

const allEvents= async () => {
    const events = await fetch ('https://app.ticketmaster.com/discovery/v2/events?apikey=PGGUMOvxBDA4IqUYAvrgPbbdizZEGw9i&locale=*')
    .then(response => response.json())
    .then(response => console.log(response))
    return events
  }


// We can filter the API information changing some variables, in this case, I want to explore how can I create a event that can change the page and the country of the event

const page = 3 // This page will be placed in the end of the requirement

// We also can filter the events by country using the country code, and this information is placed just before of the API key

const countryCode = 'ES'

// The web page doesn't provide information of the countries that are available with the API, so I will do it manually creating an array

const availableCountries = ['US', 'CA', 'GB', 'ZA', 'ES', 'AU']

const eventsArray = async () => {
    const events = await fetch (`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${countryCode}&apikey=PGGUMOvxBDA4IqUYAvrgPbbdizZEGw9i&locale=*&page=${page}`)
    .then(response => response.json())
    .then(response => console.log(response))
    return events
  }


  