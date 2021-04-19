import Controller from "./controller";
import express from "express";
const router = express.Router();

router.post("./create", Controller.create);

module.exports = router;
