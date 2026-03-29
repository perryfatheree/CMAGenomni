export interface Property {
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  yearBuilt: number;
  description: string;
  images: string[];
  features: string[];
}

export interface Comparable {
  address: string;
  price: number;
  status: 'Sold' | 'Pending' | 'Active';
  date: string;
  beds: number;
  baths: number;
  sqft: number;
  distance: number;
  image: string;
}

export interface MarketTrend {
  month: string;
  avgPrice: number;
  inventory: number;
}

export interface CMAData {
  subjectProperty: Property;
  comparables: Comparable[];
  marketTrends: MarketTrend[];
  suggestedPriceRange: {
    min: number;
    max: number;
    recommended: number;
  };
}

export type TemplateType = 
  | 'modern' 
  | 'luxury' 
  | 'analyst' 
  | 'storyteller'
  | 'historic'
  | 'farm-ranch'
  | 'urban-chic'
  | 'new-construction'
  | 'land'
  | 'first-time-buyer'
  | 'downsizer';

export type Audience = 'buyer' | 'seller';
