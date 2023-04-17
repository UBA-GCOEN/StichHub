import mongoose from "mongoose";

const tailorListSchema = mongoose.Schema({
    contact: String,
    country: String,
    state: String,
    city: String,
    pincode: String,
    passport: String,
    aadhar: String,
    proffesionalDoc: String,
    address: String,
    address2: String,
    bio: String,
    prizerange: [String],
    types: [String],
    creator: String,
    name: String,
    rating: String,
    avaliable: Boolean,
})

var TailorList = mongoose.model('TailorList', tailorListSchema);

export default TailorList;