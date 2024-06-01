import EventUser from "../schemas/EventUserSchema";
import database from "../database";

const saveEventUser = async (queryUser) => {
    if(!database.connect()) return false;

    const newEventUser = new EventUser(queryUser);

    return await newEventUser.save();
};

const deleteEventUserByIds = async (eventId, userId) => {
    if (!database.connect()) return false;

    const result = await EventUser.deleteOne({ eventId, userId });
    return result.deletedCount > 0;
};

export default {
    saveEventUser,
    deleteEventUserByIds
};
