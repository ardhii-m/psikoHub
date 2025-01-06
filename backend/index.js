import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import path from "path";
import DokterRoute from "./src/routes/DokterRoute.js";

const app = express();
mongoose.connect("mongodb://localhost:27017/psikohub_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);

app.use("/images", express.static(path.join(path.resolve(), "images")));
app.use("/images", (req, res, next) => {
  console.log("Request ke /images:", req.path);
  next();
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(DokterRoute);

app.listen(9000, () => console.log("Server Running..."));
