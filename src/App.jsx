import { useEffect } from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import AOS from 'aos';

import Divider from '@mui/material/Divider';

import { Topbar, Footer, Auth, MessageList } from '@components';
import { Home, NotFound, CarDetails, CarDetailsPage, NewCar } from '@pages';
import { useMessage } from '@utils/useMessage';
import { Box } from '@mui/material';

const App = () => {
  const { messages } = useMessage();

  useEffect(() => {
    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  });

  return (
    <>
      <Topbar />
      <Auth />
      <Box height={{ xs: 56, sm: 84 }} />
      <main>
        <MessageList messages={messages} />
        <ReactRoutes>
          <Route exact path='/' element={<Home />} />
          <Route path='/cars'>
            <Route path='new' element={<NewCar />} />
            <Route path=':id' element={<CarDetails />} />
          </Route>
          <Route path='/car/:id' element={<CarDetailsPage />} />
          <Route exact path='*' element={<NotFound />} />
        </ReactRoutes>
        <Divider />
      </main>
      <Footer />
    </>
  );
};

export default App;
