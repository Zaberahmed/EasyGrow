interface Location {
  longitude: number;
  latitude: number;
}

interface Land {
  name: string;
  size: number;
  ownerId?: string;
  location: Location[];
  description: string;
  price: number;
  LeasedBy?: string | undefined;
  crops?: string[];
  offers?: string | undefined;
}
