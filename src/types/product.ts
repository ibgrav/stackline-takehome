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
  tags: Array<string>;
}

export interface ProductData extends ProductDetailsData {
  id: string;
  brand: string;
  reviews: Array<ProductDataReview>;
  retailer: string;
  details: Array<string>;
  sales: Array<ProductDataSale>;
}
