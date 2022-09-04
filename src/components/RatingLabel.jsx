import StarIcon from '@mui/icons-material/Star';

import { Typography, Stack, Link } from '@mui/material';

import { fShortenNumber } from '@utils/formatNumber';

const RatingLabel = ({ reviews, ratings, ...other }) => (
  <Stack spacing={0.5} direction='row' alignItems='center' {...other}>
    <StarIcon sx={{ width: 18, height: 18 }} />
    <Typography variant='caption' sx={{ fontSize: '14px' }}>{Number.isInteger(ratings) ? `${ratings}.0` : ratings}</Typography>

    {reviews && (
    <Link variant='body2' href='/' sx={{ color: 'text.light' }}>
      ({fShortenNumber(reviews)} reviews)
    </Link>
    )}
  </Stack>
);

export default RatingLabel;
