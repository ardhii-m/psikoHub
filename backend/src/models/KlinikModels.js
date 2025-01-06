import mongoose from "mongoose";

const Klinik = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  map: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Klinik", Klinik);
