import { Router } from "express";
import { ContractorController } from "../controllers/contractorController";

const router = Router();
const contractorController = new ContractorController();

router.post("/contratante", (req, res) =>
  contractorController.createContractor(req, res)
);
router.get("/contratante", (req, res) =>
  contractorController.getAllContractors(req, res)
);
router.get("/contratante/:id", (req, res) =>
  contractorController.getContractorById(req, res)
);
router.put("/contratante/:id", (req, res) =>
  contractorController.updateContractor(req, res)
);
router.delete("/contratante/:id", (req, res) =>
  contractorController.deleteContractor(req, res)
);

export default router;
