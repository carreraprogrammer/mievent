import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/store';
import EventInfo from '../../Pages/EventInfo';

const eventInfo = {
    name: "Ottawa Senators vs. Anaheim Ducks",
    cardImage: "https://s1.ticketm.net/dam/a/438/0957097f-2ed7-4f77-9efd-44fce49ae438_1562521_ARTIST_PAGE_3_2.jpg",
    image: "https://s1.ticketm.net/dam/a/438/0957097f-2ed7-4f77-9efd-44fce49ae438_1562521_RETINA_PORTRAIT_16_9.jpg",
    info: "For group tickets (an order of 9 or more), please contact the Ottawa Senators: By phone: 613-599-0210 By email: groups@ottawasenators.com Visit our website",
    id: "G5d7Z9853dNr_",
    startDate: "2022-12-12",
    startTime: "19:30:00",
    status: "onsale",
    prices: [{currency:"CAD", max: 238.35, min: 18.35, type:"standard"}],
    purchase: "https://www.ticketmaster.ca/ottawa-senators-vs-anaheim-ducks-ottawa-ontario-12-12-2022/event/31005D02D20E3799",
    genre: "Hockey",
    subGenre: "",
    city: "Kanata"
}

beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(eventInfo),
    });
    render(
      <Router>
        <Provider store={store}>
          <EventInfo />
        </Provider>
      </Router>,
    );
  });
  
  describe('EventInfo', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
  
    it('should render eventInfo', async () => {
      const div = await screen.findByTestId('eventInfoContainer');
      waitFor(() => expect(div.querySelectorAll('img').length).toBe(1));
    });
  });
