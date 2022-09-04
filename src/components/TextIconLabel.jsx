// @mui
import { Stack } from '@mui/material';

const TextIconLabel = ({ icon, value, endIcon = false, sx, ...other }) => (
  <Stack
    direction='row'
    alignItems='center'
    sx={{
      typography: 'body2',
      ...sx,
    }}
    {...other}
  >
    {!endIcon && icon}
    {value}
    {endIcon && icon}
  </Stack>
);

export default TextIconLabel;
