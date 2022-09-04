import { forwardRef } from 'react';

import { Box, IconButton } from '@mui/material';

const IconButtonAnimate = forwardRef(({ children, size = 'medium', sxWrap, ...other }, ref) => (
  <AnimateWrap size={size} sxWrap={sxWrap}>
    <IconButton size={size} ref={ref} {...other}>
      {children}
    </IconButton>
  </AnimateWrap>
));

export default IconButtonAnimate;

const varSmall = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

const varMedium = {
  hover: { scale: 1.09 },
  tap: { scale: 0.97 },
};

const varLarge = {
  hover: { scale: 1.08 },
  tap: { scale: 0.99 },
};

const AnimateWrap = ({ size, children, sxWrap }) => {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  return (
    <Box
      component='div'
      whileTap='tap'
      whileHover='hover'
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
      sx={{
        display: 'inline-flex',
        ...sxWrap,
      }}
    >
      {children}
    </Box>
  );
};
