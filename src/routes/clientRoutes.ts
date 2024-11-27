import { Router } from "express";
import { ClientController } from "../controllers/clientController";

const router = Router();
const clientController = new ClientController();

router.post("/cliente", (req, res) => clientController.createClient(req, res));
router.get("/cliente", (req, res) => clientController.getAllClients(req, res));
router.get("/cliente/:id", (req, res) =>
  clientController.getClientById(req, res)
);
router.put("/cliente/:id", (req, res) =>
  clientController.updateClient(req, res)
);
router.delete("/cliente/:id", (req, res) =>
  clientController.deleteClient(req, res)
);

router.get("/cliente/:id/balance", (req, res) =>
  clientController.getClientBalance(req, res)
);

export default router;
