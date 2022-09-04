/* eslint-disable comma-dangle */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import { MessageProvider } from '@context/MessageContext';
import { AuthProvider } from '@context/AuthContext';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import baseTheme from '@theme';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={baseTheme('light', 'main')}>
      <CssBaseline />
      <BrowserRouter>
        <MessageProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </MessageProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
