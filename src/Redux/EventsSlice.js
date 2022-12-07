import  { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getEvents = createAsyncThunk(
 'Events/getEvents',
  async (countryCode, page) => {
    const events = await fetch (`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${countryCode}&apikey=PGGUMOvxBDA4IqUYAvrgPbbdizZEGw9i&locale=*&page=${page}`)
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
      status: event.status.code,
      currency: event.priceRanges[0].currency,
      maxPrice: event.priceRanges[0].max,
      minPrice: event.priceRanges[0].min,
      purchase: event.url,
      genre: event.genre.name,
      subGenre: event.subGenre.name,
      timeZone: event.dates.timeZone,
      city: event._embedded.venues[0].city.name,
    }
    return eventInfo
  })
    return eventsApi
  }
)

const initialState = {country: 'US', data: [], page: 20}

const eventsSlice = createSlice(
  {
    name: 'events',
    initialState,
    reducers: {},
    extraReducers: (Builder) => {
        Builder.addCase(getEvents.fulfilled, (state, action) => {
            state.data = action.payload;
        })
     }    
  }
)
