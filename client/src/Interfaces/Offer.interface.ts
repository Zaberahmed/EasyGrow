export interface Offer {
  _id?: string;
  farmerId?: string;
  landId?: string;
  landOwnerId?: string;
  amount: string;
  status: string;
}
export interface Counter {
  offerId: string;
  changeable: {
    counter_offer: number;
  };
}
