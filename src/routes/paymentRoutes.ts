import { Router } from "express";
import { PaymentController } from "../controllers/paymentController";

const router = Router();
const paymentController = new PaymentController();

router.post("/pagamento", (req, res) =>
  paymentController.createPayment(req, res)
);
router.get("/pagamento", (req, res) =>
  paymentController.getAllPayments(req, res)
);
router.get("/pagamento/:id", (req, res) =>
  paymentController.getPaymentById(req, res)
);
router.put("/pagamento/:id", (req, res) =>
  paymentController.updatePayment(req, res)
);
router.delete("/pagamento/:id", (req, res) =>
  paymentController.deletePayment(req, res)
);

export default router;
