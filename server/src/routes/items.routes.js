import express from "express";
import itemsController from "../controllers/items.controller";

const router = express.Router();
router.post("/get", async (req, res) => {
  try {
    const result = await itemsController.GetItems();
    console.log(result);
    res.json(result.recordset);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

export default router;
