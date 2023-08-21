import mongoose from "mongoose";

interface CategoryAttrs {
  img: string;
  title: string;
  category: string;
}

interface CategoryModel extends mongoose.Model<CategoryDoc> {
  build(attrs: CategoryAttrs): CategoryDoc;
}

interface CategoryDoc extends mongoose.Document {
  img: string;
  title: string;
  category: string;
}

const categorySchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

categorySchema.statics.build = (attrs: CategoryAttrs) => {
  return new Category(attrs);
};

const Category = mongoose.model<CategoryDoc, CategoryModel>(
  "Category",
  categorySchema
);

export { Category };
