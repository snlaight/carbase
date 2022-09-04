import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme } from '@mui/material/styles';

import logo from '@assets/images/carbase-dark.png';
import Container from './Container';

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      borderTop={`10px solid ${theme.palette.primary.dark}`}
      bgcolor={theme.palette.background.header}
    >
      <Container paddingY={4}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              width='100%'
              flexDirection={{ xs: 'column', sm: 'row' }}
            >
              <Box
                display='flex'
                component='a'
                underline='none'
                href='/'
                title='Carbase'
                height={84}
                width={95}
              >
                <img src={logo} alt='carbase logo' width='150px' height='70px' />
              </Box>
              <Box display='flex' flexWrap='wrap' alignItems='center'>
                <Box marginTop={1} marginRight={2}>
                  <Link
                    underline='none'
                    component='a'
                    href='/'
                    color='textPrimary'
                    variant='subtitle2'
                  >
                    <FacebookIcon />
                  </Link>
                </Box>
                <Box marginTop={1} marginRight={2}>
                  <Link
                    underline='none'
                    component='a'
                    href='/'
                    color='textPrimary'
                    variant='subtitle2'
                  >
                    <TwitterIcon />
                  </Link>
                </Box>
                <Box marginTop={1}>
                  <Link
                    underline='none'
                    component='a'
                    href='/'
                    color='textPrimary'
                    variant='subtitle2'
                  >
                    <InstagramIcon />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography
              align='center'
              variant='subtitle2'
              color='textSecondary'
              gutterBottom
            >
              &copy; Carbase. {new Date().getFullYear()}. All Rights Reserved
            </Typography>
            <Typography
              align='center'
              variant='caption'
              color='textSecondary'
              component='p'
            >
              When you visit or interact with our sites, services or tools, we or our
              authorised service providers may use cookies for storing information to
              help provide you with a better, faster and safer experience and for
              marketing purposes.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
