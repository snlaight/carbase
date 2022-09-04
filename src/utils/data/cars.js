import carDetails from './carDetails';

export const cars = [...Array(8)].map((_, index) => ({
  id: carDetails.id(index),
  carName: carDetails.name.carName(index),
  carBrand: carDetails.name.carBrand(index),
  carImage: carDetails.image.car(index),
  carGallery: [...Array(4)].map((photo, i) => carDetails.gallery(i)),
  carCompany: carDetails.image.company(index),
  rating: carDetails.number.rating(index),
  carPrice: carDetails.number.price(index),
  carPriceSale: carDetails.number.priceSale(index),
  carSeatCount: carDetails.number.seatCount(index),
  carLocation: carDetails.address.country(index),
  carFuelType: carDetails.type.fuelType(index),
  carDriveType: carDetails.type.driveType(index),
  favorited: index === 2 || index === 4 || false,
}));
