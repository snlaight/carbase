// @mui
import { MenuItem, Checkbox, FormControl, Typography } from '@mui/material';
import Select from '@mui/material/Select';

// ----------------------------------------------------------------------
const BRAND_TYPES = ['Tesla', 'BMW', 'Ferarri', 'Audi', 'Mercedes', 'Porsche'];

const inputStyle = {
  maxWidth: { xs: 1, md: 120 },
  '& .MuiFilledInput-input': { py: { xs: '15px', md: 0.5 }, fontWeight: '700' },
  '& .MuiSvgIcon-root': { color: 'text.disabled', width: 18, height: 18 },
};

const MenuProps = {
  PaperProps: {
    sx: {
      px: 1,
      '& .MuiList-root': {
        py: 0.5,
      },
    },
  },
};

const placeholder = (
  <Typography variant='body2' sx={{ color: 'text.disabled' }}>
    Brand type
  </Typography>
);

const BrandFilter = ({ filterType, onChangeBrandType }) => (
  <FormControl sx={{ minWidth: 120, ...inputStyle }}>
    <Select
      multiple
      displayEmpty
      value={filterType}
      onChange={onChangeBrandType}
      MenuProps={MenuProps}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return placeholder;
        }
        return (
          <Typography variant='subtitle2' component='span'>
            {selected.join(', ')}
          </Typography>
        );
      }}
    >
      {BRAND_TYPES.map((type) => (
        <MenuItem
          key={type}
          value={type}
          sx={{
            p: 0,
            my: 0.5,
            width: { xs: 1, md: 160 },
          }}
        >
          <Checkbox size='small' checked={filterType.includes(type)} />
          {type}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default BrandFilter;
