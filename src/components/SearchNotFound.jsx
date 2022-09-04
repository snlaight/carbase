import { Paper, Typography } from '@mui/material';

const SearchNotFound = ({ keyword = '', ...other }) => (
  <Paper {...other} elevation={0}>
    <Typography gutterBottom align='center' variant='subtitle1'>
      Not Found
    </Typography>
    <Typography variant='body2' align='center'>
      No results found for
      <strong>{` ${keyword} `}</strong>.<br /> Try checking for typos or using complete words.
    </Typography>
  </Paper>
);

export default SearchNotFound;
