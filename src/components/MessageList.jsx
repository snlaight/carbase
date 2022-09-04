import { Stack } from '@mui/material';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InfoIcon from '@mui/icons-material/Info';

const generateAlertType = (type) => {
  switch (type) {
    case 'success':
      return <CheckCircleIcon />;
    case 'error':
      return <HighlightOffIcon />;
    case 'warning':
      return <WarningAmberIcon />;
    case 'info':
      return <InfoIcon />;
    default:
      return <ErrorOutlineIcon />;
  }
};

const Message = ({ message, type }) => (
  generateAlertType(type) && (
    <Snackbar open={message} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} autoHideDuration={6000} sx={{ width: '100%' }}>
      <Alert color={type} icon={generateAlertType(type)}>
        {message}
      </Alert>
    </Snackbar>
  )
);

const MessageList = ({ messages }) => (
  <Stack spacing={1}>
    {messages.map((message, index) => (
      <Message key={index} message={message.message} type={message.type} />
    ))}
  </Stack>
);

export default MessageList;
