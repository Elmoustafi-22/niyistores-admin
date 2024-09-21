import mongoose, { models, Schema, model } from "mongoose";

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: [{
        type: String
    }],
    colors: {
        type: String,
    },
    details: {
        type: String,
    },
    brand: {
        type: String,
    },
    sizes: {
        type: String,
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    gender: {
        type: String,
    }
})

export const Product = models.Product || model("Product", ProductSchema);