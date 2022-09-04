import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { styled } from '@mui/material/styles';
import { Box, Autocomplete, InputAdornment, TextField } from '@mui/material';
import carDetails from '@utils/data/carDetails';
import { SearchNotFound } from '@components';

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

// ----------------------------------------------------------------------

const ManufactureFilter = ({ filterCategories, onChangeCategory }) => (
  <RootStyle>
    <Autocomplete
      autoHighlight
      options={carDetails.carBrand}
      getOptionLabel={(option) => option}
      value={filterCategories}
      onChange={(event, value) => onChangeCategory(value)}
      noOptionsText={<SearchNotFound keyword={filterCategories} />}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder='Manufacture'
          InputProps={{
            ...params.InputProps,
            autoComplete: 'search',
            startAdornment: (
              <InputAdornment position='start'>
                <LocalShippingIcon
                  sx={{ width: 24, height: 24, color: 'text.disabled', flexShrink: 0, mr: 1 }}
                />
              </InputAdornment>
            ),
          }}
        />
      )}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option, inputValue);
        const parts = parse(option, matches);
        return (
          <Box component='li' {...props}>
            {parts.map((part, index) => (
              <Box
                key={index}
                component='span'
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

export default ManufactureFilter;
