import mongoose from "mongoose";

export interface Location {
   title?: string;
  street?: string;
  landmark?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  location: {
    type: 'Point';
    coordinates: [number, number]; // [longitude, latitude]
  };
  createdAt?: Date;
  updatedAt?: Date;
}