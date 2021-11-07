export interface Deal {
  content: string;
  description: string;
  disclaimer: string;
  features: Array<string>;
  hotels: Array<Hotels>;
  image: string;
  price: number;
  title: string;
}

export interface Hotels {
  id: string;
  price: number;
}

export interface Hotel {
  code: string;
  group: string;
  lat: number;
  lon: number;
  name: string;
  photo: string;
  rating?: {
    avg: string;
    nr: number;
  };
}
