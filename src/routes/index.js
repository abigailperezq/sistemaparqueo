import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Principal" });
});


router.get("/cliente", (req, res) => {
  res.render("cliente", { title: "Cliente" });
});

export default router;