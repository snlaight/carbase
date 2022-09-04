import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, AppBar, Typography } from '@mui/material/';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '@assets/images/carbase-dark.png';

import { useAuth } from '@utils/useAuth';
import { HEADER_DESKTOP_HEIGHT } from '@utils/constants';
import useOffSetTop from '@utils/hooks/useOffSetTop';

import { ToolbarShadowStyle, ToolbarStyle } from '@components/Header/HeaderToolbarStyle';
import { Container } from '@components';

const Topbar = () => {
  const { setIsModalOpen, user, handleSignOut } = useAuth();

  const isScrolling = useOffSetTop(HEADER_DESKTOP_HEIGHT);
  const theme = useTheme();
  const navigate = useNavigate();
  const isLight = theme.palette.mode === 'light';
  const isTransparent = false;

  return (
    <AppBar position='fixed' elevation={0} sx={{ backgroundColor: 'transparent' }}>
      <ToolbarStyle disableGutters transparent={isTransparent} scrolling={isScrolling}>
        <Container paddingY={{ xs: 1 / 2, sm: 1, md: 4 }}>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            width='100%'
          >
            <Box display='flex' alignItems='center'>
              <Box
                display='flex'
                alignItems='baseline'
                component='a'
                underline='none'
                href='/'
                title='carbase'
                height={{ xs: 28, md: 32 }}
                width={75}
              >
                <img src={logo} width='75px' height='35px' />
              </Box>
            </Box>
            <Box display='flex' alignItems='center'>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems='center'>
                <Box>
                  <Link
                    underline='none'
                    component='a'
                    href='/'
                    color='textPrimary'
                    fontSize='14px'
                    fontWeight='600'
                    sx={{
                      ...(isTransparent && {
                        color: 'white',
                      }),
                      ...(isScrolling && isLight && { color: 'text.primary' }),
                    }}
                  >
                    Home
                  </Link>
                </Box>
                <Box marginX={2}>
                  <Link
                    underline='none'
                    component='a'
                    href='/services'
                    color='textPrimary'
                    fontSize='14px'
                    fontWeight='600'
                    sx={{
                      ...(isTransparent && {
                        color: 'white',
                      }),
                      ...(isScrolling && isLight && { color: 'text.primary' }),
                    }}
                  >
                    Services
                  </Link>
                </Box>
                <Box marginX={2}>
                  <Link
                    underline='none'
                    component='a'
                    href='/cars'
                    color='textPrimary'
                    fontSize='14px'
                    fontWeight='600'
                    sx={{
                      ...(isTransparent && {
                        color: 'white',
                      }),
                      ...(isScrolling && isLight && { color: 'text.primary' }),
                    }}
                  >
                    Catalogue
                  </Link>
                </Box>
                <Box marginX={2}>
                  <Link
                    underline='none'
                    component='a'
                    href='/register'
                    color='textPrimary'
                    fontSize='14px'
                    fontWeight='600'
                    sx={{
                      ...(isTransparent && {
                        color: 'white',
                      }),
                      ...(isScrolling && isLight && { color: 'text.primary' }),
                    }}
                  >
                    Contact Us
                  </Link>
                </Box>
                <Box marginX={2}>
                  <Link
                    underline='none'
                    component='a'
                    href='/register'
                    color='textPrimary'
                    fontSize='14px'
                    fontWeight='600'
                    sx={{
                      ...(isTransparent && {
                        color: 'white',
                      }),
                      ...(isScrolling && isLight && { color: 'text.primary' }),
                    }}
                  >
                    Help
                  </Link>
                </Box>
                <Box marginRight={2}>
                  {user ? (
                    <Button
                      variant='outlined'
                      color='primary'
                      size='small'
                      sx={{
                        ...(isTransparent && {
                          color: 'white',
                        }),
                        ...(isScrolling && isLight && { color: 'text.primary' }),
                      }}
                      onClick={() => navigate('/cars/new', { replace: true })}
                    >
                      Add Car
                    </Button>
                  ) : (
                    <Button
                      component='a'
                      href='/register'
                      variant='outlined'
                      color='primary'
                      size='small'
                      sx={{
                        ...(isTransparent && {
                          color: 'white',
                        }),
                        ...(isScrolling && isLight && { color: 'text.primary' }),
                      }}
                    >
                      Register
                    </Button>
                  ) }

                </Box>
                <Box>
                  {user ? (
                    <Typography variant='subtitle2'>
                      Logout
                      <IconButton aria-label='delete' onClick={handleSignOut}>
                        <LogoutIcon sx={{ color: '#fff' }} />
                      </IconButton>
                    </Typography>
                  )
                    : (
                      <Button
                        variant='outlined'
                        color='primary'
                        onClick={() => setIsModalOpen(true)}
                      >
                        Sign In
                      </Button>
                    )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </ToolbarStyle>
      {isScrolling && <ToolbarShadowStyle />}
    </AppBar>
  );
};

export default Topbar;
