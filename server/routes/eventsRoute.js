import express from "express";
import {
  getAllEvents,
  createEvent,
  getEventById,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";
const eventRouter = express.Router();

eventRouter.get("/", getAllEvents);
eventRouter.get("/:id", getEventById);
eventRouter.post("/", protect, admin, createEvent);
eventRouter.put("/:id", protect, admin, updateEvent);
eventRouter.delete("/:id", protect, admin, deleteEvent);

export default eventRouter;
