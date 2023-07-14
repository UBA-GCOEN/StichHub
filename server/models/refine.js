import mongoose from "mongoose";

const ImproveSchema = mongoose.Schema({
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
          measurementsVarying: {
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
        },
        required: true,
      },
      status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
      },
      order: {
        type: Boolean,
        default: false,
      }
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

var  ImproveList = mongoose.model("ImproveList", ImproveSchema);

export default ImproveList;



