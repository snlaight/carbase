// @mui
import { alpha } from '@mui/material/styles';
import { Stack, IconButton, Button, Link, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const SocialsButton = ({ initialColor = false, simple = true, links = {}, sx, ...other }) => {
  const SOCIALS = [
    {
      name: 'FaceBook',
      icon: <FacebookIcon />,
      socialColor: '#1877F2',
      path: links.facebook || '#facebook-link',
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon />,
      socialColor: '#E02D69',
      path: links.instagram || '#instagram-link',
    },
    {
      name: 'Linkedin',
      icon: <LinkedInIcon />,
      socialColor: '#007EBB',
      path: links.linkedin || '#linkedin-link',
    },
    {
      name: 'Twitter',
      icon: <TwitterIcon />,
      socialColor: '#00AAEC',
      path: links.twitter || '#twitter-link',
    },
  ];

  return (
    <Stack direction='row' flexWrap='wrap' alignItems='center'>
      {SOCIALS.map((social) => {
        const { name, icon, path, socialColor } = social;
        return simple ? (
          <Link key={name} href={path}>
            <IconButton
              color='inherit'
              sx={{
                ...(initialColor && {
                  color: socialColor,
                  '&:hover': {
                    bgcolor: alpha(socialColor, 0.08),
                  },
                }),
                ...sx,
              }}
              {...other}
            >
              <Box sx={{ width: 20, height: 20 }}>
                {icon}
              </Box>
            </IconButton>
          </Link>
        ) : (
          <Button
            key={name}
            href={path}
            color='inherit'
            variant='outlined'
            size='small'
            startIcon={icon}
            sx={{
              m: 0.5,
              flexShrink: 0,
              ...(initialColor && {
                color: socialColor,
                borderColor: socialColor,
                '&:hover': {
                  borderColor: socialColor,
                  bgcolor: alpha(socialColor, 0.08),
                },
              }),
              ...sx,
            }}
            {...other}
          >
            {name}
          </Button>
        );
      })}
    </Stack>
  );
};

export default SocialsButton;
