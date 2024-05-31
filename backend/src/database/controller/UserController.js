import User from "../schemas/userSchema";
import database from "../database";

const saveUser = async (queryUser) => {
   if(!database.connect()) return false

   const newUser = new User(queryUser)

   return await newUser.save()
}

const selectByEmailAndPassword = async (email, password) => {
  if (!database.connect()) return false;

  const user = await User.findOne({ email, password });

  return user;
};

const updateUser = async (email, updateData) => {
  if (!database.connect()) return false;

    const updatedUser = await User.findOneAndUpdate(
      { email: email }, 
      updateData, 
      { new: true } 
    );

    return updatedUser;
};

export default {
   saveUser,
   selectByEmailAndPassword,
   updateUser
}