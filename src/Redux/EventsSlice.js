import  { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getEvents = createAsyncThunk(
 'Events/getEvents',
  async (parameters) => {
    const events = await fetch (`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${parameters.countryCode}&apikey=AHTuuCE2MyGGUd2PwzHVkwV3ok9tWVKw&locale=*&page=${parameters.page}`
    )
    .then(response => response.json())
    .then(response => response._embedded.events)
  const eventsApi = events.map((event) => {
      const eventInfo = {
        name: event.name,
        cardImage: event.images[1].url,
        image: event.images[3].url,
        info: event.info,
        id: event.id,
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
)

const initialState = {parameters: {countryCode: '', page: 0, countryName: ''}, data: [] }

const eventsSlice = createSlice(
  {
    name: 'events',
    initialState,
    reducers: {
      filterCountry(state, {payload}) {
        return state = {...state, parameters: payload}
      },
    },
    extraReducers: (Builder) => {
        Builder.addCase(getEvents.fulfilled, (state, action) => {
            state.data = action.payload;
        })
     }
  }
)

export default eventsSlice.reducer;
export const { filterCountry, searchByName  } = eventsSlice.actions;
