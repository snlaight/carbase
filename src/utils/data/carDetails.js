import { carName, carBrand } from './name';
import { car, company, carGallery } from './image';
import { rating, year, price, seatCount } from './number';
import { description } from './text';
import { fullAddress, country, countries } from './address';
import { fuelType, driveType } from './carType';

const carDetails = {
  id: (index) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`,
  address: {
    fullAddress: (index) => fullAddress[index],
    country: (index) => country[index],
  },
  name: {
    carName: (index) => carName[index],
    carBrand: (index) => carBrand[index],
  },
  text: {
    description: (index) => description[index],
  },
  number: {
    rating: (index) => rating[index],
    year: (index) => year[index],
    price: (index) => price[index],
    priceSale: (index) => price[index] - (price[index] * 0.1),
    seatCount: (index) => seatCount[index],
  },
  image: {
    car: (index) => car[index],
    company: (index) => company[index],
  },
  gallery: (index) => carGallery[index],
  type: {
    fuelType: (index) => fuelType[index],
    driveType: (index) => driveType[index],
  },
  countries,
  carBrand,
};

export default carDetails;
