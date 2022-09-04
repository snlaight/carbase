/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { useAuth } from '@utils/useAuth';
import { useFormFields } from '@utils/useFormFields';
import { Box, Avatar, TextField, Grid, Container, Button, Typography, Modal } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';

const FORM_VALUES = {
  email: '',
  password: '',
};

const modalStyle = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: '#fff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Auth = () => {
  const { handleSignIn, handleSignUp, signInWithGithub, modalOpen, setIsModalOpen } = useAuth();

  const [isSignIn, setIsSignIn] = useState(false);

  const handleClose = () => setIsModalOpen(false);

  const [values, handleChange] = useFormFields(FORM_VALUES);

  const handleSubmit = (e) => {
    e.preventDefault();
    isSignIn ? handleSignIn(values) : handleSignUp(values);
  };

  return (

    <Container component='main' maxWidth='xs'>
      <Modal open={modalOpen} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Avatar sx={{ m: 1 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5' component='h1'>
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </Typography>
          <Button onClick={signInWithGithub}>
            <GitHubIcon sx={{ mr: 1 }} />
            {isSignIn ? 'Sign In' : 'Sign Up'} with Github
          </Button>
          <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField margin='normal' required fullWidth id='email' label='Email Address' name='email' autoComplete='email' onChange={handleChange} />
            <TextField margin='normal' fullWidth name='password' label='Password' type='password' id='password' helperText='Leave empty for passwordless sign-in.' onChange={handleChange} />

            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}> {isSignIn ? 'Sign In' : 'Sign Up'} </Button>
            <Grid container>
              <Button onClick={() => setIsSignIn((prevState) => !prevState)}>
                {isSignIn ? 'Need an account? Sign Up' : 'Have an account? Sign In'}
              </Button>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};
export default Auth;
