export interface Product {
  id: number;
  name: string;
  name_en: string;
  weight: string;
  sell_price: string;
  off_price: string;
  quantity: number;
  image: string;
  rate: number;
  discount_percent: number | null;
  cart_quantity?: number;
}
