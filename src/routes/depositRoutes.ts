import { Router } from "express";
import { DepositController } from "../controllers/depositController";

const router = Router();
const depositController = new DepositController();

router.get("/deposito", (req, res) =>
  depositController.getAllDeposits(req, res)
);
router.get("/deposito/:id", (req, res) =>
  depositController.getDepositById(req, res)
);
router.put("/deposito/:id", (req, res) =>
  depositController.updateDeposit(req, res)
);
router.delete("/deposito/:id", (req, res) =>
  depositController.deleteDeposit(req, res)
);
router.post("/deposito", (req, res) => depositController.makeDeposit(req, res));

export default router;
