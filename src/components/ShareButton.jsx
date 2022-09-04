import { useState } from 'react';
// @mui
import { MenuItem, Popover, Box } from '@mui/material';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import IconButtonAnimate from './CardSlider/IconButtonAnimation';

const ShareButton = ({ sx }) => {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const SOCIALS = [
    {
      name: 'FaceBook',
      icon: <FacebookIcon />,
      socialColor: '#1877F2',
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon />,
      socialColor: '#E02D69',
    },
    {
      name: 'Linkedin',
      icon: <LinkedInIcon />,
      socialColor: '#007EBB',
    },
    {
      name: 'Twitter',
      icon: <TwitterIcon />,
      socialColor: '#00AAEC',
    },
  ];

  return (
    <>
      <IconButtonAnimate onClick={handleOpen}>
        <ShareOutlinedIcon sx={sx} fontSize='small' />
      </IconButtonAnimate>

      <Popover
        open={Boolean(open)}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        PaperProps={{
          sx: { width: 220, p: 1 },
        }}
      >
        {SOCIALS.map((option) => (
          <MenuItem key={option.name} onClick={handleClose} sx={{ typography: 'body2' }}>
            <Box
              sx={{ width: 24, height: 24, mr: 2, color: option.socialColor }}
            >
              {option.icon}
            </Box>
            Share via {option.name}
          </MenuItem>
        ))}
      </Popover>
    </>

  );
};

export default ShareButton;
