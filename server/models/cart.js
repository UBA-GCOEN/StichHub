import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  customerId: { type: String, required: true },
  orders: [
    {
      orderData: {
        type: {
          category: String,
          clothDetails: {
            sleeve: String,
            collar: String,
            backDetails: String,
            cuffs: String,
            color: String,
            fabric: String,
          },
          measurements: {
            height: String,
            weight: String,
            shoeSize: String,
            age: String,
            gender: String,
            neckSize: String,
            chestSize: String,
            shoulderSize: String,
            waistSize: String,
            armLength: String,
            inseam: String,
          },
          fabricMode: String,
        },
        required: true,
      },
    },
  ],
});

var CartList = mongoose.model("CartList", cartSchema);

export default CartList;
