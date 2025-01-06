import Klinik from "../models/KlinikModels.js";

export const getKliniks = async (req, res) => {
  try {
    const kliniks = await Klinik.find();
    res.json(kliniks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getKlinikById = async (req, res) => {
  try {
    const klinik = await Klinik.findById(req.params.id);
    res.json(klinik);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveKlinik = async (req, res) => {
  try {
    const { name, location, contact, map, date } = req.body;
    const imgUrl = `/images/${req.file.filename}`;

    const newKlinik = await Klinik.create({
      name,
      location,
      contact,
      map,
      imgUrl,
      date,
    });

    res.status(201).json(newKlinik);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateKlinik = async (req, res) => {
  try {
    const updatedKlinik = await Klinik.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedKlinik);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteKlinik = async (req, res) => {
  try {
    const deletedKlinik = await Klinik.deleteOne({ _id: req.params.id });
    res.status(201).json(deletedKlinik);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
