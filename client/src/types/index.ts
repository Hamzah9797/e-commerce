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

export type User = {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  password: string;
};
