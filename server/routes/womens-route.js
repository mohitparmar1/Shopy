import express from "express";
import {
  getAllItems,
  createItem,
  getItemById,
  UpdateItem,
  DeleteItem,
} from "../controllers/womens-controller.js";

const WomensRouter = express.Router();

WomensRouter.route("/").get(getAllItems).post(createItem);

WomensRouter.route("/:id").get(getItemById).patch(UpdateItem).delete(DeleteItem);

export {WomensRouter};