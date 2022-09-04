// @mui
import { MenuItem, Checkbox, FormControl, Typography } from '@mui/material';
import Select from '@mui/material/Select';

const COLOR_TYPES = ['red', 'Blue', 'Green', 'Gray', 'Black', 'White'];

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
    Color
  </Typography>
);

const ColorFilter = ({ filterColor, onChangeColorType }) => (
  <FormControl sx={{ minWidth: 120, ...inputStyle }}>
    <Select
      multiple
      displayEmpty
      value={filterColor}
      onChange={onChangeColorType}
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
      {COLOR_TYPES.map((type) => (
        <MenuItem
          key={type}
          value={type}
          sx={{
            p: 0,
            my: 0.5,
            width: { xs: 1, md: 160 },
          }}
        >
          <Checkbox size='small' checked={filterColor.includes(type)} />
          {type}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default ColorFilter;
