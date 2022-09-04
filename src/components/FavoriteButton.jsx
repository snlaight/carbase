import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import { Checkbox } from '@mui/material';

const FavoriteButton = ({ ...other }) => (
  <Checkbox
    color='themeColor'
    icon={<LocalShippingOutlinedIcon sx={{ width: 20, height: 20 }} />}
    checkedIcon={<LocalShippingIcon sx={{ width: 20, height: 20 }} />}
    {...other}
  />
);

export default FavoriteButton;
