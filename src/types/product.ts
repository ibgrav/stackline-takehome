// isolated types for the product data
// if a node.js backend environment is created, isolating these types allows easy sharing between the frontend and backend

export interface ProductDataReview {
  customer: string;
  review: string;
  score: number;
}

export interface ProductDataSale {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

// this was separated out to use within the left-rail component
export interface ProductDetailsData {
  title: string;
  image: string;
  subtitle: string;
  tags: string[];
}

export interface ProductData extends ProductDetailsData {
  id: string;
  brand: string;
  reviews: ProductDataReview[];
  retailer: string;
  details: string[];
  sales: ProductDataSale[];
}
