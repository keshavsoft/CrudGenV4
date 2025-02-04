import express from "express";

var router = express.Router();

import { router as Orders } from "./Orders/routes.js";
import { router as BranchWise } from "./BranchWise/routes.js";

router.use("/Orders", Orders);
router.use("/BranchWise", BranchWise);

export { router };
