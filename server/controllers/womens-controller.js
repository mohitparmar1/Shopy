import { WomensModel } from "../models/Womens-model.js";

const Womens=WomensModel;

//Returns all the Items
const getAllItems = async (req, res) => {
    try {
      const AllItems = await Womens.find();
      res.status(200).json({
        AllItems,
      });
    } catch (err) {
      res.status(500).json({
        message:err.message,
      });
    }
  };
  
  //create a new item
  const createItem = async (req, res) => {
    try {
      const newItem = await Womens.create(req.body);
      res.status(201).json({
        newItem,
      });
    } catch (err) {
      res.status(500).json({
        message:err.message,
      });
    }
  };
  
  //returns a particular item
  const getItemById = async (req, res) => {
    try {
      const ItemById = await Womens.findById(req.params.id);
      res.status(200).json({
        ItemById,
      });
    } catch (err) {
      res.status(500).json({
        message:err.message,
      });
    }
  };
  
  //Updates The Item Details
  const UpdateItem = async (req, res) => {
    try {
      const UpdateItemById = await Womens.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json({
        UpdateItemById,
      });
    } catch (err) {
      res.status(500).json({
        message:err.message,
      });
    }
  };
  
  //Delete a Particular Item
  const DeleteItem = async (req, res) => {
    try {
      const DeleteAItem = await Womens.findByIdAndDelete(req.params.id);
      res.status(204).json({
        DeleteAItem,
      });
    } catch (err) {
      res.status(500).json({
        message:err.message,
      });
    }
  };
  
  export { getAllItems, createItem, getItemById, UpdateItem, DeleteItem };
  