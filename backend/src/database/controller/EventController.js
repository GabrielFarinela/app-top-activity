import Event from "../schemas/EventSchema";
import database from "../database";

const saveEvents = async (events) => {
  if (!database.connect()) return false;

  return await Event.insertMany(events);
}

const getShuffledEvents = async (limit = 10) => {
  if (!database.connect()) return [];
  return await Event.aggregate([{ $sample: { size: limit } }]);
};

export default {
  saveEvents,
  getShuffledEvents
};
