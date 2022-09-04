import { useState } from 'react';
import { Grid } from '@mui/material';
import CarCard from './CarCard';
import Pagination from './Pagination';

const CarList = () => {
  const [page, setPage] = useState(1);

  const totalPages = 5;
  return (
    <>
      <Grid container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', overflow: 'auto', paddingTop: '2rem' }}>
        <CarCard />
      </Grid>
      <Pagination currentPage={page} setPage={setPage} totalPages={totalPages} />
    </>
  );
};

export default CarList;
