import mongoose, {Schema} from "mongoose";


const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,  
      ref: "User"
    },

    items: [{
      product: {
        type: Schema.Types.ObjectId,  
        ref: "Product"
      },
      name:{
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
    }]
  },
  {
    timestamps: true
  }
);

export const Cart = mongoose.model("Cart", cartSchema);


