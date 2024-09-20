import mongoose, { Schema, model, models } from "mongoose";

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    parent: {
        type:mongoose.Types.ObjectId,
        ref: "Category",
    },
})

export const Category = models?.Category || model("Category", CategorySchema);