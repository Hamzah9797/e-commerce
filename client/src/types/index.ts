export type Product = {
  _id: string;
  title: string;
  description: string;
  img: string;
  categories: string[];
  size: string[];
  color: string[];
  price: number;
  inStock: boolean;
};

export type Category = {
  _id: string;
  img: string;
  title: string;
  category: string;
};
