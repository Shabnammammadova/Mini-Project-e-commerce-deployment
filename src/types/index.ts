import { Cart, CartItem, Favorite, FavoriteItem, Product } from "@prisma/client";


export enum SortOrder {
  PRICE_ASC = 'price_asc',
  PRICE_DESC = 'price_desc',
  DATE_DESC = 'createdAt_desc',
  DATE_ASC = 'createdAt_asc',
}

export type SafeCartItem = CartItem & {
  product: Product;
};
export type SafeCart = Cart & {
  items: SafeCartItem[];
};
export type SafeFavoriteItem = FavoriteItem &{
    product:Product
}
export type SafeFavorite = Favorite &{
    items:SafeFavoriteItem[]
}