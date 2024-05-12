import express from "express";
import {
  getAllItems,
  createItem,
  getItemById,
  UpdateItem,
  DeleteItem,
} from "../controllers/kids-controller.js";

const KidsRouter = express.Router();

KidsRouter.route("/").get(getAllItems).post(createItem);

KidsRouter.route("/:id").get(getItemById).patch(UpdateItem).delete(DeleteItem);

export {KidsRouter};