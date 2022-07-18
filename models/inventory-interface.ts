import { Product } from "../models/product-interface";

interface InventoryItem {
  product: Product;
  quantity: number;
}

export { InventoryItem };
