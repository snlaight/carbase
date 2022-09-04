import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// components
import { Image } from '@components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

const PhotoItem = ({ photo }) => (
  <Image
    src={photo}
    ratio='1/1'
    sx={{
      borderRadius: 2,
      cursor: 'pointer',
      border: '5px solid #fff',
    }}
  />
);

const CarGallery = ({ gallery }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <RootStyle>
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          },
        }}
      >
        <PhotoItem photo={gallery[0].carImage} />
        <Box
          sx={{
            display: 'grid',
            gap: 1,
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          {gallery[0].carGallery.map((photo, i) => (
            <PhotoItem key={i} photo={photo.img} />
          ))}
        </Box>
      </Box>
    </RootStyle>
  );
};

export default CarGallery;
