const yearsList = [
  '2022',
  '2021',
  '2020',
  '2019',
  '2018',
  '2017',
  '2016',
  '2015',
  '2014',
  '2013',
  '2012',
  '2011',
  '2010',
  '2009',
  '2008',
  '2007',
  '2006',
  '2005',
  '2004',
  '2003',
  '2002',
  '2001',
  '2000',
  '1999',
  '1998',
  '1997',
  '1996',
  '1995',
  '1994',
  '1993',
  '1992',
  '1991',
  '1990',
  '1989',
  '1988',
  '1987',
  '1986',
  '1985',
  '1984',
  '1983',
  '1982',
  '1981',
  '1980',
  '1979',
  '1978',
  '1977',
  '1976',
  '1975',
  '1974',
  '1973',
  '1972',
  '1971',
  '1970',
  '1969',
  '1968',
  '1967',
  '1966',
  '1965',
  '1964',
  '1963',
  '1962',
  '1961',
  '1960',
];

const manuFacturers = [
  {
    image: 'assets/img/car-finder/icons/sedan.svg',
    title: 'Sedan',
    slug: 'sedan',
    id: 0,
  },
  {
    image: 'assets/img/car-finder/icons/sport.svg',
    title: 'Sport Coupe',
    slug: 'sport-coupe',
    id: 2,
  },
  {
    image: 'assets/img/car-finder/icons/suv.svg',
    title: 'SUV',
    slug: 'suv',
    id: 3,
  },
  {
    image: 'assets/img/car-finder/icons/wagon.svg',
    title: 'Wagon',
    slug: 'wagon',
    id: 4,
  },
  {
    image: 'assets/img/car-finder/icons/mpv.svg',
    title: 'VAN',
    slug: 'VAN',
    id: 5,
  },
  {
    image: 'assets/img/car-finder/icons/pickup.svg',
    title: 'Truck',
    slug: 'Truck',
    id: 8,
  },
  {
    image: 'assets/img/car-finder/icons/hashback.png',
    title: 'Hatchback',
    slug: 'Hatchback',
    id: 1,
  },
  {
    image: 'assets/img/car-finder/icons/minibus.png',
    title: 'Mini_Bus',
    slug: 'Mini_Bus',
    id: 6,
  },

  {
    image: 'assets/img/car-finder/icons/bus.png',
    title: 'Bus',
    slug: 'Bus',
    id: 7,
  },
  {
    image: 'assets/img/car-finder/icons/machiniry.png',
    title: 'Machinery',
    slug: 'Machinery',
    id: 9,
  },
];

const carsData = [
  {
    id: '13453452',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: [
      { img: 'assets/img/car-finder/catalog/1/1.jpg' },
      { img: 'assets/img/car-finder/catalog/1/1.jpg' },
      { img: 'assets/img/car-finder/catalog/1/3.jpg' },
      { img: 'assets/img/car-finder/catalog/1/4.jpg' },
      { img: 'assets/img/car-finder/catalog/1/5.jpg' },
      { img: 'assets/img/car-finder/catalog/1/6.jpg' },
      { img: 'assets/img/car-finder/catalog/1/7.jpg' },
      { img: 'assets/img/car-finder/catalog/1/8.jpg' },
      { img: 'assets/img/car-finder/catalog/1/9.jpg' },
      { img: 'assets/img/car-finder/catalog/1/10.jpg' },
    ],
    year: '1995',
    title: 'Ford Truck Lifted',
    price: '$24,000',
    country: 'Chicago',
    mileage: '278',
    eng: 'Manual',
    fuel: 'Diesel',
  },
  {
    id: '1564567',
    verified_btn: 'Used',
    btn: 'Certified',
    btn_color: 'bg-success',
    image: [
      { img: 'assets/img/car-finder/catalog/2/1.jpg' },
      { img: 'assets/img/car-finder/catalog/2/1.jpg' },
      { img: 'assets/img/car-finder/catalog/2/3.jpg' },
      { img: 'assets/img/car-finder/catalog/2/4.jpg' },
      { img: 'assets/img/car-finder/catalog/2/5.jpg' },
      { img: 'assets/img/car-finder/catalog/2/6.jpg' },
      { img: 'assets/img/car-finder/catalog/2/7.jpg' },
      { img: 'assets/img/car-finder/catalog/2/8.jpg' },
      { img: 'assets/img/car-finder/catalog/2/9.jpg' },
      { img: 'assets/img/car-finder/catalog/2/10.jpg' },
    ],
    year: '2018',
    title: 'Mercedes Benz C300 Sport',
    price: '$53,400',
    country: 'San Francisco',
    mileage: '35',
    eng: 'Automatic',
    fuel: 'Hybrid',
  },
  {
    id: '12345655',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: [
      { img: 'assets/img/car-finder/catalog/3/1.jpg' },
      { img: 'assets/img/car-finder/catalog/3/1.jpg' },
      { img: 'assets/img/car-finder/catalog/3/3.jpg' },
      { img: 'assets/img/car-finder/catalog/3/4.jpg' },
      { img: 'assets/img/car-finder/catalog/3/5.jpg' },
      { img: 'assets/img/car-finder/catalog/3/6.jpg' },
      { img: 'assets/img/car-finder/catalog/3/7.jpg' },
      { img: 'assets/img/car-finder/catalog/3/8.jpg' },
      { img: 'assets/img/car-finder/catalog/3/9.jpg' },
      { img: 'assets/img/car-finder/catalog/3/10.jpg' },
    ],
    year: '2019',
    title: 'Mazda MX-5 Miata Convertible',
    price: '$36,500',
    country: 'Los Angeles',
    mileage: '18',
    eng: 'Manual',
    fuel: 'Gasoline',
  },
  {
    id: '4444431',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: [
      { img: 'assets/img/car-finder/catalog/4/1.jpg' },
      { img: 'assets/img/car-finder/catalog/4/1.jpg' },
      { img: 'assets/img/car-finder/catalog/4/3.jpg' },
      { img: 'assets/img/car-finder/catalog/4/4.jpg' },
      { img: 'assets/img/car-finder/catalog/4/5.jpg' },
      { img: 'assets/img/car-finder/catalog/4/6.jpg' },
      { img: 'assets/img/car-finder/catalog/4/7.jpg' },
      { img: 'assets/img/car-finder/catalog/4/8.jpg' },
      { img: 'assets/img/car-finder/catalog/4/9.jpg' },
      { img: 'assets/img/car-finder/catalog/4/10.jpg' },
    ],
    year: '2019',
    title: 'Nissan 370Z Nismo',
    price: '$37,900',
    country: 'New York',
    mileage: '16',
    eng: 'Automatic',
    fuel: 'Gasoline',
  },
  {
    id: '155552',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: [
      { img: 'assets/img/car-finder/catalog/5/1.jpg' },
      { img: 'assets/img/car-finder/catalog/5/1.jpg' },
      { img: 'assets/img/car-finder/catalog/5/3.jpg' },
      { img: 'assets/img/car-finder/catalog/5/4.jpg' },
      { img: 'assets/img/car-finder/catalog/5/5.jpg' },
      { img: 'assets/img/car-finder/catalog/5/6.jpg' },
      { img: 'assets/img/car-finder/catalog/5/7.jpg' },
      { img: 'assets/img/car-finder/catalog/5/8.jpg' },
      { img: 'assets/img/car-finder/catalog/5/9.jpg' },
    ],
    year: '2018',
    title: 'BMW 640 XI Gran Turismo',
    price: '$44,300',
    country: 'New Jersey',
    mileage: '10',
    eng: 'Automatic',
    fuel: 'Gasoline',
  },
  {
    id: '1756734',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: [
      { img: 'assets/img/car-finder/catalog/6/1.jpg' },
      { img: 'assets/img/car-finder/catalog/6/1.jpg' },
      { img: 'assets/img/car-finder/catalog/6/3.jpg' },
      { img: 'assets/img/car-finder/catalog/6/4.jpg' },
      { img: 'assets/img/car-finder/catalog/6/5.jpg' },
      { img: 'assets/img/car-finder/catalog/6/6.jpg' },
      { img: 'assets/img/car-finder/catalog/6/7.jpg' },
      { img: 'assets/img/car-finder/catalog/6/8.jpg' },
      { img: 'assets/img/car-finder/catalog/6/9.jpg' },
      { img: 'assets/img/car-finder/catalog/6/10.jpg' },
    ],
    year: '2015',
    title: 'Toyota GT86',
    price: '$16,000',
    country: 'Chicago',
    mileage: '46',
    eng: 'Manual',
    fuel: 'Gasoline',
  },
  {
    id: '75675671',
    verified_btn: 'Used',
    btn: 'Certified',
    btn_color: 'bg-success',
    image: [
      { img: 'assets/img/car-finder/catalog/7/1.jpg' },
      { img: 'assets/img/car-finder/catalog/7/1.jpg' },
      { img: 'assets/img/car-finder/catalog/7/3.jpg' },
      { img: 'assets/img/car-finder/catalog/7/4.jpg' },
      { img: 'assets/img/car-finder/catalog/7/5.jpg' },
      { img: 'assets/img/car-finder/catalog/7/6.jpg' },
      { img: 'assets/img/car-finder/catalog/7/7.jpg' },
      { img: 'assets/img/car-finder/catalog/7/8.jpg' },
      { img: 'assets/img/car-finder/catalog/7/9.jpg' },
      { img: 'assets/img/car-finder/catalog/7/10.jpg' },
    ],
    year: '2019',
    title: 'Volkswagen GTI S',
    price: '$29,000',
    country: 'San Francisco',
    mileage: '25',
    eng: 'Automatic',
    fuel: 'Hybrid',
  },
  {
    id: '453453461',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: [
      { img: 'assets/img/car-finder/catalog/8/1.jpg' },
      { img: 'assets/img/car-finder/catalog/8/1.jpg' },
      { img: 'assets/img/car-finder/catalog/8/3.jpg' },
      { img: 'assets/img/car-finder/catalog/8/4.jpg' },
      { img: 'assets/img/car-finder/catalog/8/5.jpg' },
      { img: 'assets/img/car-finder/catalog/8/6.jpg' },
      { img: 'assets/img/car-finder/catalog/8/7.jpg' },
      { img: 'assets/img/car-finder/catalog/8/8.jpg' },
      { img: 'assets/img/car-finder/catalog/8/9.jpg' },
      { img: 'assets/img/car-finder/catalog/8/10.jpg' },
    ],
    year: '2017',
    title: 'Ford Explorer XLT',
    price: '$26,900',
    country: 'Kansas',
    mileage: '34',
    eng: 'Manual',
    fuel: 'Diesel',
  },
  {
    id: '1453452',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: [
      { img: 'assets/img/car-finder/catalog/9/1.jpg' },
      { img: 'assets/img/car-finder/catalog/9/1.jpg' },
      { img: 'assets/img/car-finder/catalog/9/3.jpg' },
      { img: 'assets/img/car-finder/catalog/9/4.jpg' },
      { img: 'assets/img/car-finder/catalog/9/5.jpg' },
      { img: 'assets/img/car-finder/catalog/9/6.jpg' },
      { img: 'assets/img/car-finder/catalog/9/7.jpg' },
      { img: 'assets/img/car-finder/catalog/9/8.jpg' },
      { img: 'assets/img/car-finder/catalog/9/9.jpg' },
      { img: 'assets/img/car-finder/catalog/9/10.jpg' },
    ],
    year: '2018',
    title: 'Ford Explorer XLT',
    price: '$26,900',
    country: 'Kansas',
    mileage: '38',
    eng: 'Manual',
    fuel: 'Diesel',
  },
  {
    id: '4447774431',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: [
      { img: 'assets/img/car-finder/catalog/4/1.jpg' },
      { img: 'assets/img/car-finder/catalog/4/1.jpg' },
      { img: 'assets/img/car-finder/catalog/4/3.jpg' },
      { img: 'assets/img/car-finder/catalog/4/4.jpg' },
      { img: 'assets/img/car-finder/catalog/4/5.jpg' },
      { img: 'assets/img/car-finder/catalog/4/6.jpg' },
      { img: 'assets/img/car-finder/catalog/4/7.jpg' },
      { img: 'assets/img/car-finder/catalog/4/8.jpg' },
      { img: 'assets/img/car-finder/catalog/4/9.jpg' },
      { img: 'assets/img/car-finder/catalog/4/10.jpg' },
    ],
    year: '2019',
    title: 'Nissan 370Z Nismo',
    price: '$37,900',
    country: 'New York',
    mileage: '16',
    eng: 'Automatic',
    fuel: 'Gasoline',
  },
  {
    id: '4446664431',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: [
      { img: 'assets/img/car-finder/catalog/4/1.jpg' },
      { img: 'assets/img/car-finder/catalog/4/1.jpg' },
      { img: 'assets/img/car-finder/catalog/4/3.jpg' },
      { img: 'assets/img/car-finder/catalog/4/4.jpg' },
      { img: 'assets/img/car-finder/catalog/4/5.jpg' },
      { img: 'assets/img/car-finder/catalog/4/6.jpg' },
      { img: 'assets/img/car-finder/catalog/4/7.jpg' },
      { img: 'assets/img/car-finder/catalog/4/8.jpg' },
      { img: 'assets/img/car-finder/catalog/4/9.jpg' },
      { img: 'assets/img/car-finder/catalog/4/10.jpg' },
    ],
    year: '2019',
    title: 'Nissan 370Z Nismo',
    price: '$37,900',
    country: 'New York',
    mileage: '16',
    eng: 'Automatic',
    fuel: 'Gasoline',
  },
  {
    id: '4443434431',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: [
      { img: 'assets/img/car-finder/catalog/4/1.jpg' },
      { img: 'assets/img/car-finder/catalog/4/1.jpg' },
      { img: 'assets/img/car-finder/catalog/4/3.jpg' },
      { img: 'assets/img/car-finder/catalog/4/4.jpg' },
      { img: 'assets/img/car-finder/catalog/4/5.jpg' },
      { img: 'assets/img/car-finder/catalog/4/6.jpg' },
      { img: 'assets/img/car-finder/catalog/4/7.jpg' },
      { img: 'assets/img/car-finder/catalog/4/8.jpg' },
      { img: 'assets/img/car-finder/catalog/4/9.jpg' },
      { img: 'assets/img/car-finder/catalog/4/10.jpg' },
    ],
    year: '2019',
    title: 'Nissan 370Z Nismo',
    price: '$37,900',
    country: 'New York',
    mileage: '16',
    eng: 'Automatic',
    fuel: 'Gasoline',
  },
  {
    id: '444454431',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: [
      { img: 'assets/img/car-finder/catalog/4/1.jpg' },
      { img: 'assets/img/car-finder/catalog/4/1.jpg' },
      { img: 'assets/img/car-finder/catalog/4/3.jpg' },
      { img: 'assets/img/car-finder/catalog/4/4.jpg' },
      { img: 'assets/img/car-finder/catalog/4/5.jpg' },
      { img: 'assets/img/car-finder/catalog/4/6.jpg' },
      { img: 'assets/img/car-finder/catalog/4/7.jpg' },
      { img: 'assets/img/car-finder/catalog/4/8.jpg' },
      { img: 'assets/img/car-finder/catalog/4/9.jpg' },
      { img: 'assets/img/car-finder/catalog/4/10.jpg' },
    ],
    year: '2019',
    title: 'Nissan 370Z Nismo',
    price: '$37,900',
    country: 'New York',
    mileage: '16',
    eng: 'Automatic',
    fuel: 'Gasoline',
  },
  {
    id: '8444',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: [
      { img: 'assets/img/car-finder/catalog/4/1.jpg' },
      { img: 'assets/img/car-finder/catalog/4/1.jpg' },
      { img: 'assets/img/car-finder/catalog/4/3.jpg' },
      { img: 'assets/img/car-finder/catalog/4/4.jpg' },
      { img: 'assets/img/car-finder/catalog/4/5.jpg' },
      { img: 'assets/img/car-finder/catalog/4/6.jpg' },
      { img: 'assets/img/car-finder/catalog/4/7.jpg' },
      { img: 'assets/img/car-finder/catalog/4/8.jpg' },
      { img: 'assets/img/car-finder/catalog/4/9.jpg' },
      { img: 'assets/img/car-finder/catalog/4/10.jpg' },
    ],
    year: '2019',
    title: 'Nissan 370Z Nismo',
    price: '$37,900',
    country: 'New York',
    mileage: '16',
    eng: 'Automatic',
    fuel: 'Gasoline',
  },
  {
    id: '854431',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: [
      { img: 'assets/img/car-finder/catalog/4/1.jpg' },
      { img: 'assets/img/car-finder/catalog/4/1.jpg' },
      { img: 'assets/img/car-finder/catalog/4/3.jpg' },
      { img: 'assets/img/car-finder/catalog/4/4.jpg' },
      { img: 'assets/img/car-finder/catalog/4/5.jpg' },
      { img: 'assets/img/car-finder/catalog/4/6.jpg' },
      { img: 'assets/img/car-finder/catalog/4/7.jpg' },
      { img: 'assets/img/car-finder/catalog/4/8.jpg' },
      { img: 'assets/img/car-finder/catalog/4/9.jpg' },
      { img: 'assets/img/car-finder/catalog/4/10.jpg' },
    ],
    year: '2019',
    title: 'Nissan 370Z Nismo',
    price: '$37,900',
    country: 'New York',
    mileage: '16',
    eng: 'Automatic',
    fuel: 'Gasoline',
  },
  {
    id: '788',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: [
      { img: 'assets/img/car-finder/catalog/4/1.jpg' },
      { img: 'assets/img/car-finder/catalog/4/1.jpg' },
      { img: 'assets/img/car-finder/catalog/4/3.jpg' },
      { img: 'assets/img/car-finder/catalog/4/4.jpg' },
      { img: 'assets/img/car-finder/catalog/4/5.jpg' },
      { img: 'assets/img/car-finder/catalog/4/6.jpg' },
      { img: 'assets/img/car-finder/catalog/4/7.jpg' },
      { img: 'assets/img/car-finder/catalog/4/8.jpg' },
      { img: 'assets/img/car-finder/catalog/4/9.jpg' },
      { img: 'assets/img/car-finder/catalog/4/10.jpg' },
    ],
    year: '2019',
    title: 'Nissan 370Z Nismo',
    price: '$37,900',
    country: 'New York',
    mileage: '16',
    eng: 'Automatic',
    fuel: 'Gasoline',
  },
];

const searchedCarsData = [
  {
    id: '345345341',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: 'assets/img/car-finder/catalog/1/1.jpg',
    year: '1995',
    title: 'Ford Truck Lifted',
    price: '$24,000',
    country: 'Chicago',
    mileage: '278',
    eng: 'Manual',
    fuel: 'Diesel',
  },
  {
    id: '13453234',
    verified_btn: 'Used',
    btn: 'Certified',
    btn_color: 'bg-success',
    image: 'assets/img/car-finder/catalog/2/1.jpg',
    year: '2018',
    title: 'Mercedes Benz C300 Sport',
    price: '$53,400',
    country: 'San Francisco',
    mileage: '35',
    eng: 'Automatic',
    fuel: 'Hybrid',
  },
  {
    id: '11298345',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: 'assets/img/car-finder/catalog/3/1.jpg',
    year: '2019',
    title: 'Mazda MX-5 Miata Convertible',
    price: '$36,500',
    country: 'Los Angeles',
    mileage: '18',
    eng: 'Manual',
    fuel: 'Gasoline',
  },
  {
    id: '189234',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: 'assets/img/car-finder/catalog/4/1.jpg',
    year: '2019',
    title: 'Nissan 370Z Nismo',
    price: '$37,900',
    country: 'New York',
    mileage: '16',
    eng: 'Automatic',
    fuel: 'Gasoline',
  },
  {
    id: '1567656',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: 'assets/img/car-finder/catalog/5/1.jpg',
    year: '2018',
    title: 'BMW 640 XI Gran Turismo',
    price: '$44,300',
    country: 'New Jersey',
    mileage: '10',
    eng: 'Automatic',
    fuel: 'Gasoline',
  },
  {
    id: '1234234',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: 'assets/img/car-finder/catalog/6/1.jpg',
    year: '2015',
    title: 'Toyota GT86',
    price: '$16,000',
    country: 'Chicago',
    mileage: '46',
    eng: 'Manual',
    fuel: 'Gasoline',
  },
  {
    id: '4564561',
    verified_btn: 'Used',
    btn: 'Certified',
    btn_color: 'bg-success',
    image: 'assets/img/car-finder/catalog/7/1.jpg',
    year: '2019',
    title: 'Volkswagen GTI S',
    price: '$29,000',
    country: 'San Francisco',
    mileage: '25',
    eng: 'Automatic',
    fuel: 'Hybrid',
  },
  {
    id: '122222',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: 'assets/img/car-finder/catalog/8/1.jpg',
    year: '2017',
    title: 'Ford Explorer XLT',
    price: '$26,900',
    country: 'Kansas',
    mileage: '34',
    eng: 'Manual',
    fuel: 'Diesel',
  },
  {
    id: '13123312323',
    verified_btn: 'Used',
    btn: '',
    btn_color: '',
    image: 'assets/img/car-finder/catalog/9/1.jpg',
    year: '2018',
    title: 'Ford Explorer XLT',
    price: '$26,900',
    country: 'Kansas',
    mileage: '38',
    eng: 'Manual',
    fuel: 'Diesel',
  },
];

const transmissions = ['AT', 'CAT', 'IAT', 'MT', 'NA'];

const fuelTypes = ['CNG', 'Diesel', 'Petrol'];

const colors = [
  'Beige',
  'Black',
  'Blue',
  'Brown',
  'Dark Blue',
  'Gold',
  'Gray',
  'Green',
  'Light Blue',
  'Light Green',
  'Maroon',
  'Orange',
  'Pearl White',
  'Pink',
  'Purple',
  'Red',
  'Silver',
  'Sky Blue',
  'Two Tone',
  'White',
  'Wine',
  'Yellow',
];

const enginCapacities = [
  '0.7',
  '1',
  '1.2',
  '1.3',
  '1.4',
  '1.5',
  '1.8',
  '12880',
  '13',
  '17',
  '2',
  '2.4',
  '2.5',
  '2.7',
  '2.8',
  '3',
  '3.2',
  '3.5',
  '3.6',
  '3.9',
  '4',
  '4.2',
  '4.3',
  '4.6',
  '4.7',
  '4.8',
  '4.9',
  '5.2',
  '6.4',
  '6.6',
  '658',
  '660',
  '7.5',
  '7.6',
  '7.7',
  '7.8',
  '8.2',
  '85',
];

const countries = [
  { Id: 1, Name: 'Andorra', CountryCode: 'AD' },
  { Id: 2, Name: 'United Arab Emirates', CountryCode: 'AE' },
  { Id: 3, Name: 'Afghanistan', CountryCode: 'AF' },
  { Id: 4, Name: 'Antigua and Barbuda', CountryCode: 'AG' },
  { Id: 5, Name: 'Anguilla', CountryCode: 'AI' },
  { Id: 6, Name: 'Albania', CountryCode: 'AL' },
  { Id: 7, Name: 'Armenia', CountryCode: 'AM' },
  { Id: 8, Name: 'Netherlands Antilles', CountryCode: 'AN' },
  { Id: 9, Name: 'Angola', CountryCode: 'AO' },
  { Id: 10, Name: 'Asia/Pacific Region', CountryCode: 'AP' },
  { Id: 11, Name: 'Antarctica', CountryCode: 'AQ' },
  { Id: 12, Name: 'Argentina', CountryCode: 'AR' },
  { Id: 13, Name: 'American Samoa', CountryCode: 'AS' },
  { Id: 14, Name: 'Austria', CountryCode: 'AT' },
  { Id: 15, Name: 'Australia', CountryCode: 'AU' },
  { Id: 16, Name: 'Aruba', CountryCode: 'AW' },
  { Id: 17, Name: 'Aland Islands', CountryCode: 'AX' },
  { Id: 18, Name: 'Azerbaijan', CountryCode: 'AZ' },
  { Id: 19, Name: 'Bosnia and Herzegovina', CountryCode: 'BA' },
  { Id: 20, Name: 'Barbados', CountryCode: 'BB' },
  { Id: 21, Name: 'Bangladesh', CountryCode: 'BD' },
  { Id: 22, Name: 'Belgium', CountryCode: 'BE' },
  { Id: 23, Name: 'Burkina Faso', CountryCode: 'BF' },
  { Id: 24, Name: 'Bulgaria', CountryCode: 'BG' },
  { Id: 25, Name: 'Bahrain', CountryCode: 'BH' },
  { Id: 26, Name: 'Burundi', CountryCode: 'BI' },
  { Id: 27, Name: 'Benin', CountryCode: 'BJ' },
  { Id: 28, Name: 'Bermuda', CountryCode: 'BM' },
  { Id: 29, Name: 'Brunei Darussalam', CountryCode: 'BN' },
  { Id: 30, Name: 'Bolivia', CountryCode: 'BO' },
  { Id: 31, Name: 'Brazil', CountryCode: 'BR' },
  { Id: 32, Name: 'Bahamas', CountryCode: 'BS' },
  { Id: 33, Name: 'Bhutan', CountryCode: 'BT' },
  { Id: 34, Name: 'Bouvet Island', CountryCode: 'BV' },
  { Id: 35, Name: 'Botswana', CountryCode: 'BW' },
  { Id: 36, Name: 'Belarus', CountryCode: 'BY' },
  { Id: 37, Name: 'Belize', CountryCode: 'BZ' },
  { Id: 38, Name: 'Canada', CountryCode: 'CA' },
  { Id: 39, Name: 'Cocos (Keeling) Islands', CountryCode: 'CC' },
  { Id: 40, Name: 'The Democratic Republic of the Congo', CountryCode: 'CD' },
  { Id: 41, Name: 'Central African Republic', CountryCode: 'CF' },
  { Id: 42, Name: 'Congo', CountryCode: 'CG' },
  { Id: 43, Name: 'Switzerland', CountryCode: 'CH' },
  { Id: 44, Name: 'Cote dIvoire', CountryCode: 'CI' },
  { Id: 45, Name: 'Cook Islands', CountryCode: 'CK' },
  { Id: 46, Name: 'Chile', CountryCode: 'CL' },
  { Id: 47, Name: 'Cameroon', CountryCode: 'CM' },
  { Id: 48, Name: 'China', CountryCode: 'CN' },
  { Id: 49, Name: 'Colombia', CountryCode: 'CO' },
  { Id: 50, Name: 'Costa Rica', CountryCode: 'CR' },
  { Id: 51, Name: 'Cuba', CountryCode: 'CU' },
  { Id: 52, Name: 'Cape Verde', CountryCode: 'CV' },
  { Id: 53, Name: 'Christmas Island', CountryCode: 'CX' },
  { Id: 54, Name: 'Cyprus', CountryCode: 'CY' },
  { Id: 55, Name: 'Czech Republic', CountryCode: 'CZ' },
  { Id: 56, Name: 'Germany', CountryCode: 'DE' },
  { Id: 57, Name: 'Djibouti', CountryCode: 'DJ' },
  { Id: 58, Name: 'Denmark', CountryCode: 'DK' },
  { Id: 59, Name: 'Dominica', CountryCode: 'DM' },
  { Id: 60, Name: 'Dominican Republic', CountryCode: 'DO' },
  { Id: 61, Name: 'Algeria', CountryCode: 'DZ' },
  { Id: 62, Name: 'Ecuador', CountryCode: 'EC' },
  { Id: 63, Name: 'Estonia', CountryCode: 'EE' },
  { Id: 64, Name: 'Egypt', CountryCode: 'EG' },
  { Id: 65, Name: 'Western Sahara', CountryCode: 'EH' },
  { Id: 66, Name: 'Eritrea', CountryCode: 'ER' },
  { Id: 67, Name: 'Spain', CountryCode: 'ES' },
  { Id: 68, Name: 'Ethiopia', CountryCode: 'ET' },
  { Id: 69, Name: 'Europe', CountryCode: 'EU' },
  { Id: 70, Name: 'Finland', CountryCode: 'FI' },
  { Id: 71, Name: 'Fiji', CountryCode: 'FJ' },
  { Id: 72, Name: 'Falkland Islands (Malvinas)', CountryCode: 'FK' },
  { Id: 73, Name: 'Federated States of Micronesia', CountryCode: 'FM' },
  { Id: 74, Name: 'Faroe Islands', CountryCode: 'FO' },
  { Id: 75, Name: 'France', CountryCode: 'FR' },
  { Id: 76, Name: 'Gabon', CountryCode: 'GA' },
  { Id: 77, Name: 'United Kingdom', CountryCode: 'GB' },
  { Id: 78, Name: 'Grenada', CountryCode: 'GD' },
  { Id: 79, Name: 'Georgia', CountryCode: 'GE' },
  { Id: 80, Name: 'French Guiana', CountryCode: 'GF' },
  { Id: 81, Name: 'Guernsey', CountryCode: 'GG' },
  { Id: 82, Name: 'Ghana', CountryCode: 'GH' },
  { Id: 83, Name: 'Gibraltar', CountryCode: 'GI' },
  { Id: 84, Name: 'Greenland', CountryCode: 'GL' },
  { Id: 85, Name: 'Gambia', CountryCode: 'GM' },
  { Id: 86, Name: 'Guinea', CountryCode: 'GN' },
  { Id: 87, Name: 'Guadeloupe', CountryCode: 'GP' },
  { Id: 88, Name: 'Equatorial Guinea', CountryCode: 'GQ' },
  { Id: 89, Name: 'Greece', CountryCode: 'GR' },
  {
    Id: 90,
    Name: 'South Georgia and the South Sandwich Islands',
    CountryCode: 'GS',
  },
  { Id: 91, Name: 'Guatemala', CountryCode: 'GT' },
  { Id: 92, Name: 'Guam', CountryCode: 'GU' },
  { Id: 93, Name: 'Guinea-Bissau', CountryCode: 'GW' },
  { Id: 94, Name: 'Guyana', CountryCode: 'GY' },
  { Id: 95, Name: 'Hong Kong', CountryCode: 'HK' },
  { Id: 96, Name: 'Heard Island and McDonald Islands', CountryCode: 'HM' },
  { Id: 97, Name: 'Honduras', CountryCode: 'HN' },
  { Id: 98, Name: 'Croatia', CountryCode: 'HR' },
  { Id: 99, Name: 'Haiti', CountryCode: 'HT' },
  { Id: 100, Name: 'Hungary', CountryCode: 'HU' },
  { Id: 101, Name: 'Indonesia', CountryCode: 'ID' },
  { Id: 102, Name: 'Ireland', CountryCode: 'IE' },
  { Id: 103, Name: 'Israel', CountryCode: 'IL' },
  { Id: 104, Name: 'Isle of Man', CountryCode: 'IM' },
  { Id: 105, Name: 'India', CountryCode: 'IN' },
  { Id: 106, Name: 'British Indian Ocean Territory', CountryCode: 'IO' },
  { Id: 107, Name: 'Iraq', CountryCode: 'IQ' },
  { Id: 108, Name: 'Islamic Republic of Iran', CountryCode: 'IR' },
  { Id: 109, Name: 'Iceland', CountryCode: 'IS' },
  { Id: 110, Name: 'Italy', CountryCode: 'IT' },
  { Id: 111, Name: 'Jersey', CountryCode: 'JE' },
  { Id: 112, Name: 'Jamaica', CountryCode: 'JM' },
  { Id: 113, Name: 'Jordan', CountryCode: 'JO' },
  { Id: 114, Name: 'Japan', CountryCode: 'JP' },
  { Id: 115, Name: 'Kenya', CountryCode: 'KE' },
  { Id: 116, Name: 'Kyrgyzstan', CountryCode: 'KG' },
  { Id: 117, Name: 'Cambodia', CountryCode: 'KH' },
  { Id: 118, Name: 'Kiribati', CountryCode: 'KI' },
  { Id: 119, Name: 'Comoros', CountryCode: 'KM' },
  { Id: 120, Name: 'Saint Kitts and Nevis', CountryCode: 'KN' },
  { Id: 121, Name: 'Democratic Peoples Republic of Korea', CountryCode: 'KP' },
  { Id: 122, Name: 'Republic of Korea', CountryCode: 'KR' },
  { Id: 123, Name: 'Kuwait', CountryCode: 'KW' },
  { Id: 124, Name: 'Cayman Islands', CountryCode: 'KY' },
  { Id: 125, Name: 'Kazakhstan', CountryCode: 'KZ' },
  { Id: 126, Name: 'Lao Peoples Democratic Republic', CountryCode: 'LA' },
  { Id: 127, Name: 'Lebanon', CountryCode: 'LB' },
  { Id: 128, Name: 'Saint Lucia', CountryCode: 'LC' },
  { Id: 129, Name: 'Liechtenstein', CountryCode: 'LI' },
  { Id: 130, Name: 'Sri Lanka', CountryCode: 'LK' },
  { Id: 131, Name: 'Liberia', CountryCode: 'LR' },
  { Id: 132, Name: 'Lesotho', CountryCode: 'LS' },
  { Id: 133, Name: 'Lithuania', CountryCode: 'LT' },
  { Id: 134, Name: 'Luxembourg', CountryCode: 'LU' },
  { Id: 135, Name: 'Latvia', CountryCode: 'LV' },
  { Id: 136, Name: 'Libyan Arab Jamahiriya', CountryCode: 'LY' },
  { Id: 137, Name: 'Morocco', CountryCode: 'MA' },
  { Id: 138, Name: 'Monaco', CountryCode: 'MC' },
  { Id: 139, Name: 'Republic of Moldova', CountryCode: 'MD' },
  { Id: 140, Name: 'Montenegro', CountryCode: 'ME' },
  { Id: 141, Name: 'Madagascar', CountryCode: 'MG' },
  { Id: 142, Name: 'Marshall Islands', CountryCode: 'MH' },
  { Id: 143, Name: 'Macedonia', CountryCode: 'MK' },
  { Id: 144, Name: 'Mali', CountryCode: 'ML' },
  { Id: 145, Name: 'Myanmar', CountryCode: 'MM' },
  { Id: 146, Name: 'Mongolia', CountryCode: 'MN' },
  { Id: 147, Name: 'Macao', CountryCode: 'MO' },
  { Id: 148, Name: 'Northern Mariana Islands', CountryCode: 'MP' },
  { Id: 149, Name: 'Martinique', CountryCode: 'MQ' },
  { Id: 150, Name: 'Mauritania', CountryCode: 'MR' },
  { Id: 151, Name: 'Montserrat', CountryCode: 'MS' },
  { Id: 152, Name: 'Malta', CountryCode: 'MT' },
  { Id: 153, Name: 'Mauritius', CountryCode: 'MU' },
  { Id: 154, Name: 'Maldives', CountryCode: 'MV' },
  { Id: 155, Name: 'Malawi', CountryCode: 'MW' },
  { Id: 156, Name: 'Mexico', CountryCode: 'MX' },
  { Id: 157, Name: 'Malaysia', CountryCode: 'MY' },
  { Id: 158, Name: 'Mozambique', CountryCode: 'MZ' },
  { Id: 159, Name: 'Namibia', CountryCode: 'NA' },
  { Id: 160, Name: 'New Caledonia', CountryCode: 'NC' },
  { Id: 161, Name: 'Niger', CountryCode: 'NE' },
  { Id: 162, Name: 'Norfolk Island', CountryCode: 'NF' },
  { Id: 163, Name: 'Nigeria', CountryCode: 'NG' },
  { Id: 164, Name: 'Nicaragua', CountryCode: 'NI' },
  { Id: 165, Name: 'Netherlands', CountryCode: 'NL' },
  { Id: 166, Name: 'Norway', CountryCode: 'NO' },
  { Id: 167, Name: 'Nepal', CountryCode: 'NP' },
  { Id: 168, Name: 'Nauru', CountryCode: 'NR' },
  { Id: 169, Name: 'Niue', CountryCode: 'NU' },
  { Id: 170, Name: 'New Zealand', CountryCode: 'NZ' },
  { Id: 171, Name: 'Oman', CountryCode: 'OM' },
  { Id: 172, Name: 'Panama', CountryCode: 'PA' },
  { Id: 173, Name: 'Peru', CountryCode: 'PE' },
  { Id: 174, Name: 'French Polynesia', CountryCode: 'PF' },
  { Id: 175, Name: 'Papua New Guinea', CountryCode: 'PG' },
  { Id: 176, Name: 'Philippines', CountryCode: 'PH' },
  { Id: 177, Name: 'Pakistan', CountryCode: 'PK' },
  { Id: 178, Name: 'Poland', CountryCode: 'PL' },
  { Id: 179, Name: 'Saint Pierre and Miquelon', CountryCode: 'PM' },
  { Id: 180, Name: 'Pitcairn', CountryCode: 'PN' },
  { Id: 181, Name: 'Puerto Rico', CountryCode: 'PR' },
  { Id: 182, Name: 'Palestinian Territory', CountryCode: 'PS' },
  { Id: 183, Name: 'Portugal', CountryCode: 'PT' },
  { Id: 184, Name: 'Palau', CountryCode: 'PW' },
  { Id: 185, Name: 'Paraguay', CountryCode: 'PY' },
  { Id: 186, Name: 'Qatar', CountryCode: 'QA' },
  { Id: 187, Name: 'Reunion', CountryCode: 'RE' },
  { Id: 188, Name: 'Romania', CountryCode: 'RO' },
  { Id: 189, Name: 'Serbia', CountryCode: 'RS' },
  { Id: 190, Name: 'Russian Federation', CountryCode: 'RU' },
  { Id: 191, Name: 'Rwanda', CountryCode: 'RW' },
  { Id: 192, Name: 'Saudi Arabia', CountryCode: 'SA' },
  { Id: 193, Name: 'Solomon Islands', CountryCode: 'SB' },
  { Id: 194, Name: 'Seychelles', CountryCode: 'SC' },
  { Id: 195, Name: 'Sudan', CountryCode: 'SD' },
  { Id: 196, Name: 'Sweden', CountryCode: 'SE' },
  { Id: 197, Name: 'Singapore', CountryCode: 'SG' },
  { Id: 198, Name: 'Saint Helena', CountryCode: 'SH' },
  { Id: 199, Name: 'Slovenia', CountryCode: 'SI' },
  { Id: 200, Name: 'Svalbard and Jan Mayen', CountryCode: 'SJ' },
  { Id: 201, Name: 'Slovakia', CountryCode: 'SK' },
  { Id: 202, Name: 'Sierra Leone', CountryCode: 'SL' },
  { Id: 203, Name: 'San Marino', CountryCode: 'SM' },
  { Id: 204, Name: 'Senegal', CountryCode: 'SN' },
  { Id: 205, Name: 'Somalia', CountryCode: 'SO' },
  { Id: 206, Name: 'Suriname', CountryCode: 'SR' },
  { Id: 207, Name: 'Sao Tome and Principe', CountryCode: 'ST' },
  { Id: 208, Name: 'El Salvador', CountryCode: 'SV' },
  { Id: 209, Name: 'Syrian Arab Republic', CountryCode: 'SY' },
  { Id: 210, Name: 'Swaziland', CountryCode: 'SZ' },
  { Id: 211, Name: 'Turks and Caicos Islands', CountryCode: 'TC' },
  { Id: 212, Name: 'Chad', CountryCode: 'TD' },
  { Id: 213, Name: 'French Southern Territories', CountryCode: 'TF' },
  { Id: 214, Name: 'Togo', CountryCode: 'TG' },
  { Id: 215, Name: 'Thailand', CountryCode: 'TH' },
  { Id: 216, Name: 'Tajikistan', CountryCode: 'TJ' },
  { Id: 217, Name: 'Tokelau', CountryCode: 'TK' },
  { Id: 218, Name: 'Timor-Leste', CountryCode: 'TL' },
  { Id: 219, Name: 'Turkmenistan', CountryCode: 'TM' },
  { Id: 220, Name: 'Tunisia', CountryCode: 'TN' },
  { Id: 221, Name: 'Tonga', CountryCode: 'TO' },
  { Id: 222, Name: 'Turkey', CountryCode: 'TR' },
  { Id: 223, Name: 'TrinCountryCodead and Tobago', CountryCode: 'TT' },
  { Id: 224, Name: 'Tuvalu', CountryCode: 'TV' },
  { Id: 225, Name: 'Taiwan', CountryCode: 'TW' },
  { Id: 226, Name: 'Tanzania', CountryCode: 'TZ' },
  { Id: 227, Name: 'Ukraine', CountryCode: 'UA' },
  { Id: 228, Name: 'Uganda', CountryCode: 'UG' },
  { Id: 229, Name: 'United States Minor Outlying Islands', CountryCode: 'UM' },
  { Id: 230, Name: 'United States', CountryCode: 'US' },
  { Id: 231, Name: 'Uruguay', CountryCode: 'UY' },
  { Id: 232, Name: 'Uzbekistan', CountryCode: 'UZ' },
  { Id: 233, Name: 'Holy See (Vatican City State)', CountryCode: 'VA' },
  { Id: 234, Name: 'Saint Vincent and the Grenadines', CountryCode: 'VC' },
  { Id: 235, Name: 'Venezuela', CountryCode: 'VE' },
  { Id: 236, Name: 'Virgin Islands, British', CountryCode: 'VG' },
  { Id: 237, Name: 'Virgin Islands, U.S.', CountryCode: 'VI' },
  { Id: 238, Name: 'Vietnam', CountryCode: 'VN' },
  { Id: 239, Name: 'Vanuatu', CountryCode: 'VU' },
  { Id: 240, Name: 'Wallis and Futuna', CountryCode: 'WF' },
  { Id: 241, Name: 'Samoa', CountryCode: 'WS' },
  { Id: 242, Name: 'Yemen', CountryCode: 'YE' },
  { Id: 243, Name: 'Mayotte', CountryCode: 'YT' },
  { Id: 244, Name: 'South Africa', CountryCode: 'ZA' },
  { Id: 245, Name: 'Zambia', CountryCode: 'ZM' },
  { Id: 246, Name: 'Zimbabwe', CountryCode: 'ZW' },
];

export {
  manuFacturers,
  carsData,
  searchedCarsData,
  yearsList,
  countries,
  enginCapacities,
  colors,
  transmissions,
  fuelTypes,
};
