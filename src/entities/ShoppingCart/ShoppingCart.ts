import { create } from 'zustand';

const baseURL = 'http://localhost:8080/api/ShoppingCart';

type Header = {
  LogoImg: string;
  UsedGuid: string;
  UserName: string;
};

type Image = {
  FileName: string;
  FileExtension: string;
  Image: string;
};

type Product = {
  Id: number;
  Name: string;
  Description: string;
  Quantity: number;
  Unit: string;
  Сurrency: string;
  Price: number;
  DiscountedPrice: number;
  Images: Image[];
};

type BasketSummary = {
  TotalProducts: number;
  Discount: number;
  Total: number;
};

export type ShoppingCartStore = {
  header: Header | null;
  products: Product[] | null;
  basketSummary: BasketSummary | null;
  currency: string;
  getHeader: () => void;
  getProducts: () => void;
  getBasketSummary: () => void;
};

const useShoppingCartStore = create<ShoppingCartStore>((set) => ({
  header: null,
  products: null,
  basketSummary: null,
  currency: '',
  getHeader: async () => {
    const response = await fetch(`${baseURL}/header`);
    set({ header: await response.json() });
  },
  getProducts: async () => {
    const response = await fetch(`${baseURL}/products`);
    const products = await response.json();
    set({
      products,
      currency: products[0].Сurrency,
    });
  },
  getBasketSummary: async () => {
    const response = await fetch(`${baseURL}/baskedsummary`);
    set({ basketSummary: await response.json() });
  },
}));

export default useShoppingCartStore;
