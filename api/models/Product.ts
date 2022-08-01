import mongoose from "mongoose";

interface ProductsAttrs {
  title: string;
  description: string;
  img: string;
  categories: string[];
  size: [];
  color: [];
  price: number;
  inStock: boolean;
}

interface ProductModel extends mongoose.Model<ProductDoc> {
  build(attrs: ProductsAttrs): ProductDoc;
}

interface ProductDoc extends mongoose.Document {
  title: string;
  description: string;
  img: string;
  categories: string;
  size: [];
  color: [];
  price: number;
  inStock: boolean;
}

const productsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    size: {
      type: Array,
    },
    color: {
      type: Array,
    },
    price: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// custom function built into our model
productsSchema.statics.build = (attrs: ProductsAttrs) => {
  return new Product(attrs);
};

const Product = mongoose.model<ProductDoc, ProductModel>(
  "Product",
  productsSchema
);

export { Product };
