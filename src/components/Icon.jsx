import Icon from '@mui/material/Icon';

import { Box } from '@mui/material';

const Icons = ({ icon, sx, ...other }) => <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;

export default Icons;
