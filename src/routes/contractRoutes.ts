import { Router } from "express";
import { ContractController } from "../controllers/contractController";

const router = Router();
const contractController = new ContractController();

router.post("/contrato", (req, res) =>
  contractController.createContract(req, res)
);
router.get("/contrato", (req, res) =>
  contractController.getAllContracts(req, res)
);
router.get("/contrato/:id", (req, res) =>
  contractController.getContractById(req, res)
);
router.put("/contrato/:id", (req, res) =>
  contractController.updateContract(req, res)
);
router.delete("/contrato/:id", (req, res) =>
  contractController.deleteContract(req, res)
);

export default router;
