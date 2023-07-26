import { Crop } from './Crops.interface';

export interface Location {
  longitude: number;
  latitude: number;
}

export interface Land {
  _id: string;
  name: string;
  size: number;
  ownerId?: string;
  location: Location[];
  duration: string;
  description: string;
  price: number;
  LeasedBy?: string | undefined;
  crops?: Crop[];
  offers?: string | undefined;
}
