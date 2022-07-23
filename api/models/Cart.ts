import mongoose from "mongoose";

interface CartAttrs {
  userId: string;
  products: { productId: string; quantity: number }[];
}

interface CartModel extends mongoose.Model<CartDoc> {
  build(attrs: CartAttrs): CartDoc;
}

interface CartDoc extends mongoose.Document {
  userId: string;
  products: { productId: string; quantity: number }[];
}

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

// custom function built into our model
cartSchema.statics.build = (attrs: CartAttrs) => {
  return new Cart(attrs);
};

const Cart = mongoose.model<CartDoc, CartModel>("Cart", cartSchema);

export { Cart };
