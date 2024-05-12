import express from "express";
import {
  getAllItems,
  createItem,
  getItemById,
  UpdateItem,
  DeleteItem,
} from "../controllers/mens-controller.js";

const MensRouter = express.Router();

MensRouter.route("/").get(getAllItems).post(createItem);

MensRouter.route("/:id").get(getItemById).patch(UpdateItem).delete(DeleteItem);

export {MensRouter};