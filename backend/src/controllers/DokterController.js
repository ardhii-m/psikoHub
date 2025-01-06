import Dokter from "../models/DokterModels.js";

export const getDokters = async (req, res) => {
  try {
    const dokters = await Dokter.find();
    res.json(dokters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDokterById = async (req, res) => {
  try {
    const dokter = await Dokter.findById(req.params.id);
    res.json(dokter);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveDokter = async (req, res) => {
  try {
    const { name, specialization, rating, location, date } = req.body;
    const imgUrl = `/images/${req.file.filename}`;

    const newDokter = await Dokter.create({
      name,
      specialization,
      rating,
      location,
      imgUrl,
      date,
    });

    res.status(201).json(newDokter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateDokter = async (req, res) => {
  try {
    const updatedDokter = await Dokter.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedDokter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteDokter = async (req, res) => {
  try {
    const deletedDokter = await Dokter.deleteOne({ _id: req.params.id });
    res.status(201).json(deletedDokter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
