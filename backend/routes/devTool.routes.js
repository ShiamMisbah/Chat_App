import express from "express"
import { deleteAllMessages } from "../controllers/devTools.controllers.js";

const router = express.Router();

router.delete('/delete/all', deleteAllMessages);

export default router;