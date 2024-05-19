import User from "../schemas/userSchema";
import database from "../database";

const saveUser = async (queryUser) => {
   if(!database.connect()) return false

   const newUser = new User(queryUser)

   return await newUser.save()

   database.disconnect()
}

export default {
   saveUser
}