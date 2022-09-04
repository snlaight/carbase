import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

import { styled } from '@mui/material/styles';
import { Box, Autocomplete, InputAdornment, TextField } from '@mui/material';
import { createFilterOptions } from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Image, SearchNotFound } from '@components';

import carDetails  from '@utils/data/carDetails';



const RootStyle = styled('div')(() => ({
  width: '100%',
  '& .MuiAutocomplete-root': {
    '& .MuiInputAdornment-root': {
      marginTop: '0 !important',
    },
    '& .MuiFilledInput-root': {
      height: 56,
      padding: '0 12px',
    },
  },
}));


const LocationsFilter = ({ filterLocation, onChangeLocation }) =>  (
    <RootStyle>
      <Autocomplete
        autoHighlight
        options={carDetails.countries}
        getOptionLabel={(option) => option.label}
        filterOptions={createFilterOptions({
          stringify: (option) => option.label + option.code,
        })}
        value={filterLocation}
        onChange={(event, value) => onChangeLocation(value)}
        noOptionsText={<SearchNotFound keyword={filterLocation?.label} />}
        renderInput={(params) => (
          <TextField
            {...params}

            placeholder="Locations"
            InputProps={{
              ...params.InputProps,
              autoComplete: 'search',
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option.label, inputValue);
          const parts = parse(option.label, matches);
          return (
            <Box component="li" {...props}>
              <Image
                alt="flag country"
                src={`https://flagcdn.com/${option.code.toLowerCase()}.svg`}
                sx={{
                  mr: 1,
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                  borderRadius: '50%',
                }}
              />

              {parts.map((part, index) => (
                <Box
                  key={index}
                  component="span"
                  sx={{
                    ...(part.highlight && {
                      fontWeight: 'fontWeightBold',
                    }),
                  }}
                >
                  {part.text}
                </Box>
              ))}
            </Box>
          );
        }}
      />
    </RootStyle>
  );


export default LocationsFilter;
