import { light as lightBlue, dark as darkBlue } from './palette--blue';
import { light as lightGreen, dark as darkGreen } from './palette--green';
import { light as lightMain, dark as darkMain } from './palette--main';

const palette = (themeMode = 'light', paletteType = 'main') => {
  if (paletteType === 'blue') {
    return themeMode === 'dark' ? darkBlue : lightBlue;
  } if (paletteType === 'green') {
    return themeMode === 'dark' ? darkGreen : lightGreen;
  }
  return themeMode === 'dark' ? darkMain : lightMain;
};

export default palette;
