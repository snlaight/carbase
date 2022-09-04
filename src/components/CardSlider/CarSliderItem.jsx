
import { Typography, Stack, Avatar } from '@mui/material';

export const CarSliderItem = ({ car }) => {
  const { review } = car;

  return (
    <Stack alignItems='center'>
      <Typography
        sx={{
          mt: 2,
          mb: 5,
          lineHeight: 1.75,
          fontSize: { xs: 20, md: 24 },
          fontFamily: (theme) => theme.typography.h1.fontFamily,
        }}
      >
        {review}
      </Typography>
    </Stack>
  );
};

export const CarSliderThumbnailItem = ({ car, isSelected }) => {
  const { avatar } = car;

  return (
    <Stack
      sx={{
        width: 96,
        height: 96,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Avatar
        src={avatar}
        sx={{
          width: 48,
          height: 48,
          opacity: 0.48,
          cursor: 'pointer',
          transition: (theme) => theme.transitions.create('all'),
          ...(isSelected && {
            opacity: 1,
            transform: 'scale(2)',
          }),
        }}
      />
    </Stack>
  );
};
