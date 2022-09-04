/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Avatar, TextField, Grid, Stack, Button, Typography, Input } from '@mui/material';
import DriveEtaTwoToneIcon from '@mui/icons-material/DriveEtaTwoTone';

import { useAuth } from '@utils/useAuth';
import { useFormFields } from '@utils/useFormFields';
import { useMessage } from '@utils/useMessage';
import { supabase } from '@utils/supabase';

const FORM_VALUES = {
  make: '',
  model: '',
  year: '',
  price: '',
  description: '',
  image: '',
  imageType: '',
};

const NewCar = () => {
  const [values, handleChange] = useFormFields(FORM_VALUES);
  const { handleMessage } = useMessage();
  const { user } = useAuth();

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      spacing={4}
      sx={{ minHeight: '100vh', pt: '80px' }}
    >
      <Grid container item md={12} gap={5}>
        <Grid>
          <Grid>
            <Stack
              gap={2}
              justifyContent='center'
              alignItems='center'
            >
              <label htmlFor='avatar-input'>
                <Input
                  id='avatar-input'
                  type='file'
                  sx={{
                    display: 'none',
                  }}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    values.image = file;
                    values.imageType = file.type;
                  }}
                  name='image'
                />
                <input
                  id='file'
                  type='hidden'
                  name='image'
                />
                <Avatar
                  variant='rounded'
                  sx={{
                    cursor: 'pointer',
                    width: {
                      xs: '420px',
                      md: '460px',
                      lg: '700px',
                    },
                    height: {
                      xs: '120px',
                      md: '160px',
                      lg: '200px',
                    },
                  }}
                >
                  <DriveEtaTwoToneIcon fontSize='large' />
                </Avatar>
                <Typography variant='subtitle2' sx={{ textAlign: 'center' }}>
                  Upload Image
                </Typography>
              </label>
            </Stack>
          </Grid>
          <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  label='Make'
                  name='make'
                  value={values.make}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label='Model'
                  name='model'
                  value={values.model}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label='Year'
                  name='year'
                  value={values.year}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label='Price'
                  name='price'
                  value={values.price}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  label='Description'
                  name='description'
                  value={values.description}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
      <Grid container item xs={12} md={12}>
        <Button
          variant='contained'
          color='primary'
          onClick={async () => {
            const { data: imageUrl, error: imageError } = await supabase.storage.from('images').upload(`public/${Date.now()}_${values.model}`, values.image, { cacheControl: 3600, upsert: false, contentType: values.imageType });
            if (imageError) {
              handleMessage({
                message: 'Error uploading image',
                type: 'error',
              });
              return;
            }
            const { make, model, year, price, description } = values;
            const car = {
              make,
              model,
              year,
              price,
              description,
              image: imageUrl.Key,
              owned_by: user.id,
            };
            const { data, error } = await supabase.from('cars').insert(car);
            if (error) {
              handleMessage({
                message: error.message,
                type: 'error',
              });
            }
            if (data) {
              handleMessage({
                message: 'Car added successfully',
                type: 'success',
              });
              handleChange(FORM_VALUES);
            }
          }}
        >
          Add Car
        </Button>
      </Grid>
    </Grid>

  );
};

export default NewCar;
