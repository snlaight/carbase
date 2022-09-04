/* eslint-disable no-shadow */

import { useTheme, styled } from '@mui/material/styles';
import { Box, Stack } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import IconButtonAnimate from './IconButtonAnimation';

const BUTTON_SIZE = 40;

const ArrowStyle = styled(IconButtonAnimate)(({ theme }) => ({
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
  cursor: 'pointer',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));

const SliderArrows = ({
  customIcon,
  onNext,
  onPrevious,
  children,
  ...other }) => {
  const theme = useTheme();
  const isRTL = theme.direction === 'rtl';

  const style = {
    position: 'absolute',
    mt: -2.5,
    top: '50%',
    zIndex: 9,
  };

  const leftIcon = (isRTL) => (
    <ArrowRightAltIcon
      sx={{
        width: 24,
        height: 24,
        transform: ' scaleX(-1)',
        ...(isRTL && { transform: ' scaleX(1)' }),
      }}
    />
  );

  const rightIcon = (isRTL) => (
    <ArrowRightAltIcon
      sx={{
        width: 24,
        height: 24,
        transform: ' scaleX(1)',
        ...(isRTL && { transform: ' scaleX(1)' }),
      }}
    />
  );

  if (children) {
    return (
      <Box {...other}>
        <Box className='arrow left' sx={{ ...style, left: 0 }}>
          <ArrowStyle onClick={onPrevious}>{leftIcon(isRTL)}</ArrowStyle>
        </Box>

        {children}

        <Box className='arrow right' sx={{ ...style, right: 0 }}>
          <ArrowStyle onClick={onNext}>{rightIcon(isRTL)}</ArrowStyle>
        </Box>
      </Box>
    );
  }

  return (
    <Stack direction='row' spacing={2} {...other}>
      <ArrowStyle onClick={onPrevious}>{leftIcon(isRTL)}</ArrowStyle>
      <ArrowStyle onClick={onNext}>{rightIcon(isRTL)}</ArrowStyle>
    </Stack>
  );
};

export default SliderArrows;
