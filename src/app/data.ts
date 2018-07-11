import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

export interface IType {
  key: string;
  name: string;
}

export const types: IType[] = [
  {
    key: 'hotel',
    name: 'Hotel'
  },
  {
    key: 'fishing',
    name: 'Fishing'
  },
  {
    key: 'tours',
    name: 'Tours'
  },
  {
    key: 'weather',
    name: 'Weather'
  }
];

export interface IData {
  img: string;
  address: string;
  phone: number;
  name: string;
  description: string;
  weather: {
     title: string;
     icon: string;
     water: number;
     temperature: number;
  };
  social_info: {
     title: string;
     img: string;
     followers: number;
     following: number;
  };
  type: string;
}

const data: IData[] = [
  {
    img: './assets/images/2.jpg',
    name: 'Hotel Name 1',
    description: 'Sed perspiciatis',
    address: 'Et harum quidem',
    phone: 1285968685,
    weather: {
       title: 'Et harum quidem',
       icon: 'cloud',
       water: 26,
       temperature: 30
    },
    social_info: {
       title: 'Nam libero voluptatem',
       img: './assets/images/1.jpg',
       followers: 2850,
       following: 675
    },
    type: 'hotel'
  },
  {
    img: './assets/images/3.jpg',
    name: 'Hotel Name 3',
    description: 'Sed perspiciatis',
    address: 'Et harum quidem',
    phone: 1285968765,
    weather: {
       title: 'Et harum quidem',
       icon: 'cloud',
       water: 28,
       temperature: 34
    },
    social_info: {
       title: 'Nam libero voluptatem',
       img: './assets/images/4.jpg',
       followers: 2850,
       following: 675
    },
    type: 'string'
  },
  {
    img: './assets/images/5.jpg',
    name: 'Hotel Name 4',
    description: 'Sed perspiciatis',
    address: 'Et harum quidem',
    phone: 1285968234,
    weather: {
       title: 'Et harum quidem',
       icon: 'cloud',
       water: 22,
       temperature: 26
    },
    social_info: {
       title: 'Nam libero voluptatem',
       img: './assets/images/6.jpg',
       followers: 2850,
       following: 675
    },
    type: 'tours'
  },
  {
    img: './assets/images/9.jpeg',
    name: 'Hotel Name FISHING',
    description: 'Sed perspiciatis',
    address: 'Et harum quidem',
    phone: 1285968345,
    weather: {
       title: 'Et harum quidem',
       icon: 'cloud',
       water: 22,
       temperature: 26
    },
    social_info: {
       title: 'Nam libero voluptatem',
       img: './assets/images/8.jpeg',
       followers: 2850,
       following: 675
    },
    type: 'fishing'
  },
  {
    img: './assets/images/9.jpeg',
    name: 'Hotel Name tour',
    description: 'Sed perspiciatis',
    address: 'Et harum quidem',
    phone: 1285968685,
    weather: {
       title: 'Et harum quidem',
       icon: 'cloud',
       water: 20,
       temperature: 24
    },
    social_info: {
       title: 'Nam libero voluptatem',
       img: './assets/images/10.jpg',
       followers: 2850,
       following: 675
    },
    type: 'tours'
  },
  {
    img: './assets/images/11.jpeg',
    name: 'Hotel Name 4',
    description: 'Sed perspiciatis',
    address: 'Et harum quidem',
    phone: 1285968685,
    weather: {
       title: 'Et harum quidem',
       icon: 'cloud',
       water: 22,
       temperature: 26
    },
    social_info: {
       title: 'Nam libero voluptatem',
       img: './assets/images/6.jpg',
       followers: 2850,
       following: 675
    },
    type: 'fishing'
  },
  {
    img: './assets/images/6.jpg',
    name: 'Hotel Name 7',
    description: 'Sed perspiciatis',
    address: 'Et harum quidem',
    phone: 1285968685,
    weather: {
       title: 'Et harum quidem',
       icon: 'cloud',
       water: 22,
       temperature: 26
    },
    social_info: {
       title: 'Nam libero voluptatem',
       img: './assets/images/2.jpg',
       followers: 2850,
       following: 675
    },
    type: 'hotel'
  }
];

export const data$: Observable<IData[]> = of(data)
  .pipe(
    delay(2000)
  );
