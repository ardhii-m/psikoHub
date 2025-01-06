import express from "express";
import {
  getDokters,
  getDokterById,
  saveDokter,
  updateDokter,
  deleteDokter,
} from "../controllers/DokterController.js";
import {
  getKliniks,
  getKlinikById,
  saveKlinik,
  updateKlinik,
  deleteKlinik,
} from "../controllers/KlinikController.js";

const router = express.Router();

router.get("/dokters", getDokters);
router.get("/dokters/:id", getDokterById);
router.post("/dokters", saveDokter);
router.patch("/dokters/:id", updateDokter);
router.delete("/dokters/:id", deleteDokter);

router.get("/kliniks", getKliniks);
router.get("/kliniks/:id", getKlinikById);
router.post("/kliniks", saveKlinik);
router.patch("/kliniks/:id", updateKlinik);
router.delete("/kliniks/:id", deleteKlinik);

export default router;
