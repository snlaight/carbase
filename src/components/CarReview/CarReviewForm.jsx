import React from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Paper, Button, Rating, TextField, Typography, FormHelperText } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled((props) => <Paper variant='outlined' {...props} />)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: Number(theme.shape.borderRadius) * 2,
}));

// ----------------------------------------------------------------------

const CarReviewForm = ({ onClose }) => {
  console.log('🚀 ~ file: CarReviewForm.jsx ~ line 16 ~ CarReviewForm ~ onClose', onClose);

  return (
    <RootStyle>
      <form>
        <Stack spacing={2.5}>
          <div>
            <Typography variant='h3' paragraph>
              Review
            </Typography>
            <Typography variant='subtitle2' gutterBottom>
              Your rating about this Car:
            </Typography>

          </div>

          <Stack
            direction='row'
            spacing={1.5}
            alignItems='center'
            justifyContent='flex-end'
            sx={{ width: 1 }}
          >
            <Button variant='outlined' onClick={onClose} color='inherit'>
              Cancel
            </Button>

          </Stack>
        </Stack>
      </form>
    </RootStyle>

  );
};

export default CarReviewForm;
