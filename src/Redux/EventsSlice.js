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
        name: event.name ?? '',
        cardImage: event.images[1].url ?? '',
        image: event.images[3].url ?? '',
        info: event.info ?? '',
        id: event.id ?? '',
        startDate: event.dates.start.localDate ?? '',
        startTime: event.dates.start.localTime ?? '',
        status: event.dates.status.code ?? '',
        prices: event.priceRanges ?? '',
        externalLinks: event.externalLinks ?? '',
        purchase: event.url ?? '',
        genre: event.classifications[0].genre.name ?? '',
        subGenre: event.classifications[0].subgenre ?? '',
        city: event._embedded.venues[0].city.name ?? '',
    } ?? {name: 'Event not available'}
    const seatMap = event.hasOwnProperty('seatmap') ? event.seatmap.staticUrl : 'https://us.123rf.com/450wm/infadel/infadel1712/infadel171200119/infadel171200119.jpg?ver=6'
    eventInfo.seat = seatMap

    return eventInfo
  })
    return eventsApi
  }
)

const initialState = {parameters: {countryCode: '', page: 0, countryName: ''}, data: [], eventId: null, }

const eventsSlice = createSlice(
  {
    name: 'events',
    initialState,
    reducers: {
      filterCountry(state, {payload}) {
        const newState = {...state, parameters: payload}
        return  newState
      },
      eventId(state, {payload}) {

        const newState = {...state, eventId: payload, eventInfo: state.data.filter((event) => event.id.indexOf(payload) > -1 )}
        return newState
      },
      setEvents(state, {payload}) {
        const newState = {...state, data: payload}
        return newState
      }
    },
    extraReducers: (Builder) => {
        Builder.addCase(getEvents.fulfilled, (state, action) => {
            const newState = {...state, data: action.payload}
            return newState
        })
     }
  }
)

export default eventsSlice.reducer;
export const { filterCountry, eventId, setEvents } = eventsSlice.actions;
