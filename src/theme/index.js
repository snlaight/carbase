import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import palette from './palette';
import shadows from './shadows';

const baseTheme = (mode, paletteType) => responsiveFontSizes(
  createTheme({
    palette: palette(mode, paletteType),
    shape: { borderRadius: 8 },
    layout: {
      contentWidth: 1236,
    },
    shadows: shadows(mode),
    typography: {
      fontFamily: '"Inter", sans-serif',
      button: {
        textTransform: 'none',
        fontWeight: 'medium',
      },
    },
    zIndex: {
      appBar: 1200,
      drawer: 1300,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          label: {
            fontWeight: 600,
          },
          containedSecondary: mode === 'light' ? { color: 'white' } : {},
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            '&:hover': {
              backgroundColor: '#ffd362',
            },
            '&.Mui-selected': {
              backgroundColor: '#ffd362',
            },
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: 'text.primary',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
    },
  }),
);

export default baseTheme;
