import { ObjectId } from "mongodb";
import { Schema, model, models } from "mongoose";

const EventUserSchema = new Schema({
  eventId: { type: ObjectId, required: true },
  userId: { type: ObjectId, required: true },
});

const EventUser = models.EventUser || model("EventUser", EventUserSchema);

export default EventUser;
