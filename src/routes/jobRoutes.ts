import { Router } from "express";
import { JobController } from "../controllers/jobController";

const router = Router();
const jobController = new JobController();

router.post("/trabalho", (req, res) => jobController.createJob(req, res));
router.get("/trabalho", (req, res) => jobController.getAllJobs(req, res));
router.get("/trabalho/:id", (req, res) => jobController.getJobById(req, res));
router.put("/trabalho/:id", (req, res) => jobController.updateJob(req, res));
router.delete("/trabalho/:id", (req, res) => jobController.deleteJob(req, res));
router.get("/trabalho/naopago-total", (req, res) =>
  jobController.getUnpaidJobsTotal(req, res)
);

export default router;



