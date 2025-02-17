import { Schema, model, models } from "mongoose";

const EventSchema = new Schema({
  titulo: { type: String, required: true },
  tag: { type: String, required: true },
  data: { type: String, required: true },
  local: { type: String, required: true },
  descricao: { type: String, required: true },
  categoria: { type: String, required: true },
  valor: { type: String, required: true },
  termo: { type: String, required: true },
  eventId: { type: String }
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
