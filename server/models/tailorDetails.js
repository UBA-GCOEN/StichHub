import mongoose, { mongo } from "mongoose";

const tailorListSchema = mongoose.Schema(
  {
    // contact: String,
    // country: String,
    // state: String,
    // city: String,
    // pincode: String,
    // passport: String,
    // aadhar: String,
    // proffesionalDoc: String,
    // address: String,
    // address2: String,
    // bio: String,
    // prizerange: [String],
    // types: [String],
    // creator: String,
    // name: String,
    // rating: String,
    // avaliable: Boolean,
    //   tailorID: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "TailorUsers",
    //   },
    contact: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    passport: {
      type: String,
    },
    aadhar: {
      type: Number,
    },
    proffesionalDoc: {
      type: Number,
    },
    address: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
    },
    bio: {
      type: String,
      required: true,
    },
    priceRange: {
      type: String,
      required: true,
    },
    types: [
      {
        type: String,
        //   required: true,
      },
    ],
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TailorUsers",
    },
    name: {
      type: String,
      // required: true,
    },
    rating: {
      type: Number,
    },
    Availability: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

var TailorList = mongoose.model("TailorList", tailorListSchema);

export default TailorList;
