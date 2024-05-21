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

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  return user;
};

export default {
   saveUser,
   selectByEmailAndPassword
}