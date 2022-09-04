import { useState } from 'react';
// @mui
import { Stack, Button, Drawer, Box } from '@mui/material';
// components
import BrandFilter from './BrandFilter';
import PriceFilter from './PriceFilter';
import LocationsFilter from './LocationsFilter';
import ManufactureFilter from './ManufactureFilter';
import RatingFilter from './RatingFilter';
import ColorFilter from './ColorFilter';

// ----------------------------------------------------------------------

const defaultValues = {
  filterCategories: null,
  filterLocation: null,
  filterType: [],
  filterRating: [],
  filterColor: [],
  filterPrice: [0, 100000],
};

const SearchFilters = () => {
  const [filters, setFilters] = useState(defaultValues);

  const handleChangeBrandType = (event) => {
    const {
      target: { value },
    } = event;
    setFilters({
      ...filters,
      filterType: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleChangeRatingType = (event) => {
    const {
      target: { value },
    } = event;
    setFilters({
      ...filters,
      filterRating: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleChangeColorType = (event) => {
    const {
      target: { value },
    } = event;
    setFilters({
      ...filters,
      filterColor: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleChangePrice = (event, newValue) => {
    setFilters({
      ...filters,
      filterPrice: newValue,
    });
  };

  const handleChangeLocation = (keyword) => {
    setFilters({
      ...filters,
      filterLocation: keyword,
    });
  };

  const handleChangeCategory = (keyword) => {
    setFilters({
      ...filters,
      filterCategories: keyword,
    });
  };

  const renderFilters = (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2.5, md: 1 }} sx={{ mt: 2.5 }}>
      <BrandFilter
        filterType={filters.filterType}
        onChangeBrandType={handleChangeBrandType}
      />
      <PriceFilter
        filterPrice={filters.filterPrice}
        onChangePrice={handleChangePrice}
      />
      <ManufactureFilter
        filterCategories={filters.filterCategories}
        onChangeCategory={handleChangeCategory}
      />
      <LocationsFilter
        filterLocation={filters.filterLocation}
        onChangeLocation={handleChangeLocation}
      />
      <ColorFilter
        filterColor={filters.filterColor}
        onChangeColorType={handleChangeColorType}
      />
      <RatingFilter
        filterRating={filters.filterRating}
        onChangeRatingType={handleChangeRatingType}
      />
    </Stack>
  );

  return (
    <>
      {/* -- Desktop -- */}
      <Box
        sx={{
          pt: 5,
          pb: 8,
          display: {
            xs: 'none',
            md: 'block',
          },
        }}
      >
        {renderFilters}
      </Box>
    </>
  );
};

export default SearchFilters;
