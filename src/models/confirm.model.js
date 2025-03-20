import mongoose, { Schema } from "mongoose";
const User = require("./User");
const Product = require("./Product");

const confirmSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    confirmItems: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: true
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
        }
    }],
},
    {
        timestamps: true,
    });

module.exports = mongoose.model("Confirm", confirmSchema);
