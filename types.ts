export interface SalesData {
  month: string;
  sales: number;
}

export interface UsersData {
  day: string;
  orders: number;
}

export interface CategoryData {
  name: string;
  value: number;
  // FIX: Add an index signature to satisfy the data prop type for the recharts Pie component.
  [key: string]: string | number;
}

export interface RevenueData {
  itemsSold: number;
  revenue: number;
  profit: number;
}

export interface SuperstoreOrder {
  'Row ID': number;
  'Order ID': string;
  'Order Date': string;
  'Ship Date': string;
  'Ship Mode': string;
  'Customer ID': string;
  'Customer Name': string;
  'Segment': string;
  'Country': string;
  'City': string;
  'State': string;
  'Postal Code': number;
  'Region': string;
  'Product ID': string;
  'Category': string;
  'Sub-Category': string;
  'Product Name': string;
  'Sales': number;
  'Quantity': number;
  'Discount': number;
  'Profit': number;
}