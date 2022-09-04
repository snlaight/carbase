// @mui
import { MenuItem, Checkbox, FormControl, Typography, Box } from '@mui/material';
import Select from '@mui/material/Select';

const RATING_TYPES = [1, 2, 3, 4, 5];

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
    Rating
  </Typography>
);

const RatingFilter = ({ filterRating, onChangeRatingType }) => (
  <FormControl sx={{ minWidth: 120, ...inputStyle }}>
    <Select
      multiple
      displayEmpty
      value={filterRating}
      onChange={onChangeRatingType}
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
      {RATING_TYPES.map((type) => (
        <MenuItem
          key={type}
          value={type}
          sx={{
            p: 0,
            my: 0.5,
            width: { xs: 1, md: 160 },
          }}
        >
          <Checkbox size='small' checked={filterRating.includes(type)} />
          <Box
            key={type}
            display='inline'
          >
            <Box display='inline'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                width={24}
                height={24}
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
            </Box>
          </Box>
          {type}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default RatingFilter;
