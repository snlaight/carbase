import { useState } from 'react';
import { Box, ToggleButton, ToggleButtonGroup, Button } from '@mui/material';
import { DirectionsCar, AirportShuttle, Search } from '@mui/icons-material';

import FormSelectorControl from './FormControl';

const SearchBar = () => {
  const [buttonType, setButtonType] = useState(() => ['used-cars', 'used-vans']);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [lowPrice, setLowPrice] = useState('');
  const [highPrice, setHighPrice] = useState('');

  const carBrands = [{ key: 1, item: 'Toyota' }, { key: 2, item: 'Isuzu' }, { key: 3, item: 'Audi' }, { key: 4, item: 'Nissan' }];

  const carModels = [{ key: 1, item: 'Sedans' }, { key: 2, item: 'Small Cars' }, { key: 3, item: 'Sports Cars' }, { key: 4, item: 'Wagons' }];

  const lowPrices = [
    { value: 5000, key: 5000, item: '£5500' },
    { value: 5500, key: 5500, item: '£5500' },
    { value: 6000, key: 6000, item: '£6000' },
    { value: 6000, key: 6000, item: '£6000' },
    { value: 6500, key: 6500, item: '£6500' }];

  const highPrices = [
    { value: 7000, key: 7000, item: '£7000' },
    { value: 7500, key: 7500, item: '£7500' },
    { value: 8000, key: 8000, item: '£8000' },
    { value: 9000, key: 9000, item: '£9000' },
    { value: 9500, key: 9500, item: '£9500' }];

  return (
    <Box sx={{
      height: '90px',
      width: '75%',
      display: 'flex',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '25px',
    }}
    >
      <Box sx={{ display: 'flex', width: '30%', justifyContent: 'center', alignItems: 'center' }}>
        <ToggleButtonGroup
          color='primary'
          value={buttonType}
          onChange={(event, newTypes) => {
            setButtonType(newTypes);
          }}
          aria-label='text formatting'

        >
          <ToggleButton
            sx={{
              border: '1px solid #ccc',
              borderRadius: '25px',
              margin: '10px 0 ',

              '&:hover': { backgroundColor: '#3340f2', color: '#fff' },
              '&.Mui-selected': {
                backgroundColor: '#3340f2', color: '#fff',
              },
            }}
            value='used-cars'
            aria-label='used-cars'
          >Used Cars <DirectionsCar sx={{ margin: '0 10px' }} />
          </ToggleButton>
          <ToggleButton
            sx={{
              border: '1px solid #ccc',
              borderRadius: '25px',
              margin: '10px 0',
              '&:hover': { backgroundColor: '#3340f2', color: '#fff' },
              '&.Mui-selected': {
                backgroundColor: '#3340f2', color: '#fff',
              },
            }}
            value='used-vans'
            aria-label='used-vans'

          >Used Vans <AirportShuttle sx={{ margin: '0 10px' }} />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box sx={{ display: 'flex', borderTopRightRadius: '25px', borderBottomRightRadius: '25px', justifyContent: 'center', alignItems: 'center', flexGrow: '1', height: '100%', backgroundColor: '#fff' }}>
        <Box sx={{ display: 'flex' }}>
          <FormSelectorControl
            labelId='select-brand'
            id='select-brand'
            value={brand}
            label='brand'
            onChange={(e) => setBrand(e.target.value)}
            inputLabel='Brands'
            mapItems={carBrands}
          />
          <FormSelectorControl
            labelId='select-model'
            id='select-model'
            value={model}
            label='model'
            onChange={(e) => setModel(e.target.value)}
            inputLabel='Models'
            mapItems={carModels}
          />
        </Box>
        <Box sx={{ display: 'flex', marginLeft: '20px' }}>
          <FormSelectorControl
            labelId='select-low-price'
            id='select-low-price'
            value={lowPrice}
            label='low-price'
            onChange={(e) => setLowPrice(e.target.value)}
            inputLabel='Min Price'
            mapItems={lowPrices}
          />
          <FormSelectorControl
            labelId='select-high-price'
            id='select-high-price'
            value={highPrice}
            label='high-price'
            onChange={(e) => setHighPrice(e.target.value)}
            inputLabel='Max Price'
            mapItems={highPrices}
          />
        </Box>
        <Button variant='contained' sx={{ display: 'flex', backgroundColor: '#3340f2', justifyContent: 'center', alignItems: 'center', color: '#fff', padding: '6px', borderRadius: '15px', cursor: 'pointer' }}>
          <Search />
        </Button>
      </Box>
    </Box>
  );
};

export default SearchBar;
