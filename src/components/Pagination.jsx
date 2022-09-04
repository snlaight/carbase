import { Typography, Button } from '@mui/material';

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <div sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Button
        sx={{ margin: '0 20px' }}
        variant='contained'
        color='primary'
        type='button'
        onClick={handlePrev}
      >
        Prev
      </Button>
      <Typography variant='h6' sx={{ margin: '0 20px' }}>
        {currentPage}
      </Typography>
      <Button
        sx={{ margin: '0 20px' }}
        variant='contained'
        color='primary'
        type='button'
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
