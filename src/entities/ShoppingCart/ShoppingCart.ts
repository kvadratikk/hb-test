import { create } from 'zustand';
import { Product } from '../../shared/types/Product';

const baseURL = 'http://localhost:8080/api/ShoppingCart';

type Header = {
  LogoImg: string;
  UsedGuid: string;
  UserName: string;
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
  setQuantityInc: (id: number) => void;
  setQuantityDec: (id: number) => void;
  deleteProduct: (id: number) => void;
  deleteProducts: () => void;
};

const useShoppingCartStore = create<ShoppingCartStore>((set, get) => ({
  header: null,
  products: null,
  basketSummary: null,
  currency: '',
  getHeader: async () => {
    const response = await fetch(`${baseURL}/header`);
    set({ header: await response.json() });
  },
  getBasketSummary: async () => {
    const response = await fetch(`${baseURL}/baskedsummary`);
    set({ basketSummary: await response.json() });
  },
  getProducts: async () => {
    try {
      const response = await fetch(`${baseURL}/products`);
      const products = await response.json();
      set({
        products,
        currency: products[0].Сurrency,
      });
    } catch (e) {
      set({
        products: [],
      });
    }
    get().getBasketSummary();
  },
  setQuantityInc: async (id: number) => {
    await fetch(`${baseURL}/quantityinc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      body: JSON.stringify({ ProductId: id, UserGuid: get().header?.UsedGuid }),
    });
    get().getProducts();
  },
  setQuantityDec: async (id: number) => {
    const response = await fetch(`${baseURL}/quantitydec`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      body: JSON.stringify({ ProductId: id, UserGuid: get().header?.UsedGuid }),
    });

    const { Name } = await response.json();
    if (Name === 'Bad') return get().deleteProduct(id);

    get().getProducts();
  },
  deleteProduct: async (id: number) => {
    await fetch(`${baseURL}/product`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      body: JSON.stringify({ ProductId: id, UserGuid: get().header?.UsedGuid }),
    });
    get().getProducts();
  },
  deleteProducts: async () => {
    await fetch(`${baseURL}/products`, {
      method: 'DELETE',
    });
    get().getProducts();
  },
}));

export default useShoppingCartStore;
