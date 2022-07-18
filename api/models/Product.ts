import mongoose from "mongoose";

interface ProductsAttrs {
  title: string;
  desc: string;
  img: string;
  categories: string[];
  size: string | void;
  color: string | void;
  price: number;
}

interface ProductModel extends mongoose.Model<ProductDoc> {
  build(attrs: ProductsAttrs): ProductDoc;
}

interface ProductDoc extends mongoose.Document {
  title: string;
  desc: string;
  img: string;
  categories: string;
  size: string | void;
  color: string | void;
  price: number;
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
      type: String,
    },
    color: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
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
