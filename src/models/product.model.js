import mongoose, {Schema} from "mongoose";

const productSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    category: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    quantity: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    totalPrice: {
        type: Number,
        required: true
    },

    negotiable: {
        type: String,
        required: true
    },

    images: [
        {
            type: String,
            required: true
        }
    ],

    seller: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
},
{
    timestamps: true
});

export const Product = mongoose.model("Product", productSchema);