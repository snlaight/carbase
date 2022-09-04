// @mui
import { Stack, Button, Select, MenuItem, Typography, FormControl } from '@mui/material';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'popular', label: 'Popular' },
];

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

// ----------------------------------------------------------------------

const CarReviewToolbar = ({ sort, totalReview, onOpenReview, onChangeSort }) => {
  console.log('🚀 ~ file: CarReviewToolbar.jsx ~ line 26 ~ CarReviewToolbar ~ totalReview', totalReview);

  return (
    <Stack
      spacing={5}
      alignItems={{ md: 'center' }}
      direction={{ xs: 'column', md: 'row' }}
      sx={{ mb: 5 }}
    >
      <Typography variant='h5' fontWeight='bold' sx={{ width: 1 }}>
        {totalReview} Reviews
      </Typography>

      <Stack direction='row' spacing={2} alignItems='center' flexShrink={0}>
        <FormControl
          variant='outlined'
          sx={{
            minWidth: 160,
            '& .MuiFilledInput-input': { py: '11px' },
          }}
        >
          <Select value={sort} onChange={onChangeSort} MenuProps={MenuProps}>
            {SORT_OPTIONS.map((option) => (
              <MenuItem key={option.value} value={option.value} sx={{ width: 200, my: 0.5 }}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button size='large' variant='contained' onClick={onOpenReview}>
          Write a Review
        </Button>
      </Stack>
    </Stack>
  );
};

export default CarReviewToolbar;
