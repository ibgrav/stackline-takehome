export interface ProductReview {
  customer: string;
  review: string;
  score: number;
}

export interface ProductSale {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

export interface Product {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: Array<ProductReview>;
  retailer: string;
  details: Array<string>;
  tags: Array<string>;
  sales: Array<ProductSale>;
}
