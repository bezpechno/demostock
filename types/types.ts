// types/types.ts

export interface Portfolio {
    id: string;
    name: string;
    value: number;
    gain: number;
    type: string;
    data: { date: string; value: number }[];
    creator: string;
    creatorName: string;
    isPublic: boolean;
    assets: Asset[];
    initialValue: number;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Asset {
    symbol: string;
    amount: number;
    initialPrice: number;
    currentPrice: number;
    dateAdded: Date;
    id?: string;
  }
  
  export interface User {
    id: string;
    email: string;
    displayName: string;
    createdAt: Date;
    updatedAt: Date;
  }