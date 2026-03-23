import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
    location: { type: String, required: true },
    category: { type: String, required: true },
    totalSeats: {
      type: Number,
      required: true, // ← max attendees
    },
    availableSeats: {
      type: Number,
      required: true,
    },
    ticketPrice: {
      type: Number,
      default: 0, // ← 0 means free
    },

    imageUrl: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

const Event = mongoose.model("Event", eventSchema);
export default Event;
