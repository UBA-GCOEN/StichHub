import mongoose from "mongoose";

const orderListSchema = mongoose.Schema({
  tailorId: {
    type: String,
    required: false,
  },
  requests: [
    {
      customerId: { type: String, required: true },
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
      status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

var OrderList = mongoose.model("OrderList", orderListSchema);

export default OrderList;
