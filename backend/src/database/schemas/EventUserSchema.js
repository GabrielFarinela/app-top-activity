import { ObjectId } from "mongodb";
import { Schema, model, models } from "mongoose";

const EventUserSchema = new Schema({
  eventId: { type: String, required: true },
  userId: { type: String, required: true },
});

const EventUser = models.EventUser || model("EventUser", EventUserSchema);

export default EventUser;
