import mongoose from "mongoose";

export enum GearboxType {
  Manual = 'manual',
  Automatic = 'automatic'
}

export enum FuelPolicy {
  LikeForLike = 'likeForlike',
  FreeTank = 'freeTank'
}

export enum CarType {
  Diesel = 'diesel',
  Gasoline = 'gasoline',
  Electric = 'electric',
  Hybrid = 'hybrid',
  PlugInHybrid = 'plugInHybrid',
  Unknown = 'unknown'
}


export interface AdditionalDriver {
  fullName: string
  email: string
  phone: string
  birthDate: Date
}

export enum PaymentMethod {
    ADVANCE = 'advance',
    PAYLATER = 'paylater'
}

export interface Car {
  name: string;
  numberPlate: string;
  location: mongoose.Types.ObjectId[];
  dailyPrice: number | null;
  discountedDailyPrice: number | null;
  biWeeklyPrice: number | null;
  discountedBiWeeklyPrice: number | null;
  weeklyPrice: number | null;
  discountedWeeklyPrice: number | null;
  monthlyPrice: number | null;
  discountedMonthlyPrice: number | null;

  deposite : number | null;
  available: boolean;
  type: CarType;
  gearbox: GearboxType
  aircon: boolean
  image?: string
  seats: number
  doors: number
  mileage: number
  cancellation: number
  theftProtection: number
  additionalDriver: AdditionalDriver | string  
  multimedia: string[]
  rating?: number
  comingSoon?: boolean
  paymentMethod: PaymentMethod  
}
