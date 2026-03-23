import Event from "../models/Event.js";

export const getAllEvents = async (req, res) => {
  try {
    const filters = {}; // start with empty filter = get ALL events

    if (req.query.category) {
      filters.category = req.query.category; // add category filter if provided
    }
    if (req.query.location) {
      filters.location = req.query.location; // add location filter if provided
    }

    const events = await Event.find(filters); // find with whatever filters exist
    return res.status(200).json({
      success: true,
      events,
    });
  } catch (error) {
    console.error("Error in getAllEvents controller:", error);
    res.status(500).json({ message: "Server error" });
  }
};
export const getEventById = async (req, res) => {
  try {
    const id = req.params.id;
    const event = await Event.findById(id);
    if (event) {
      return res.status(200).json({
        success: true,
        event,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Event with specified id not found.",
      });
    }
  } catch (error) {
    console.error("Error in getAllEvents controller:", error);
    res.status(500).json({ message: "Server error" });
  }
};
export const createEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      date,
      location,
      category,
      totalSeats,
      availableSeats,
      imageUrl,
      ticketPrice,
    } = req.body;
    const eventCreated = new Event({
      title,
      description,
      date,
      location,
      category,
      totalSeats,
      availableSeats,
      imageUrl,
      ticketPrice,
      createdBy: req.user._id,
    });
    await eventCreated.save();
    return res.status(201).json({
      success: true,
      eventCreated,
    });
  } catch (error) {
    console.error("Error in event creation:", error);
    res.status(500).json({ message: "Server error" });
  }
};
export const updateEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      date,
      location,
      category,
      totalSeats,
      availableSeats,
      imageUrl,
      ticketPrice,
    } = req.body;

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        date,
        location,
        category,
        totalSeats,
        availableSeats,
        imageUrl,
        ticketPrice,
      },
      { new: true },
    );
    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    return res.status(200).json({
      success: true,
      updatedEvent,
    });
  } catch (error) {
    console.error("Error in updating event. ", error);
    res.status(500).json({ message: "Server error" });
  }
};
export const deleteEvent = async (req, res) => {
  try {
    const eventDeleted = await Event.findByIdAndDelete(req.params.id);
    if (!eventDeleted) {
      return res.status(404).json({
        success: false,
        message: "Error in deleting an event.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Event deleted successfully.",
      eventDeleted,
    });
  } catch (error) {
    console.error("Error in deleting event. ", error);
    res.status(500).json({ message: "Server error" });
  }
};
