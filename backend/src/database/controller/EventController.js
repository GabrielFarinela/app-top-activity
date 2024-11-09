import Event from "../schemas/EventSchema";
import EventUser from "../schemas/EventUserSchema";
import database from "../database";

// const saveEvents = async (events) => {
//   if (!database.connect()) return false;

//   return await Event.insertMany(events);
// }

const saveEvents = async (events) => {
  if (!database.connect()) return false;
  
  const eventsWithId = events.map(event => {
    const newEvent = new Event(event);
    newEvent.eventId = newEvent._id.toString();
    return newEvent;
  });
  
  return await Event.insertMany(eventsWithId);
};

const getShuffledEvents = async (category, limit = 10) => {
  if (!database.connect()) return [];

  if(category && category.length > 0){
    return await Event.aggregate([
      { $match: { categoria: category } },
      { $sample: { size: limit } }
    ]);
  }

  return await Event.aggregate([
    { $sample: { size: limit } }
  ]);
};

//rodar se precisar add um campo na coleção
const addEventIdToEvents = async () => {
  if(!database.connect()) return false;

  const events = await Event.find({});

  const updatePromises = events.map(event => {
    return Event.updateOne(
      { titulo: event.titulo, tag: event.tag, data: event.data, local: event.local, data: event.data, termo: event.termo },
      { $set: { eventId: event._id.toString() } }
    );
  });

  await Promise.all(updatePromises);

  return true;
};

const getEventsByUserId = async (userId) => {
  if (!database.connect()) return [];

  const eventUsers = await EventUser.find({ userId });

  const listEvents = await Promise.all(eventUsers.map(async (eventUser) => {
    const event = await Event.findOne({ _id: eventUser.eventId });

    return event;
  }));

  return listEvents;
};

export default {
  saveEvents,
  getShuffledEvents,
  addEventIdToEvents,
  getEventsByUserId
};
