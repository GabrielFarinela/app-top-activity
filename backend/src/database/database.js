import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const dbName = "tActivity";

const url = `mongodb+srv://ceodaevolucao:${process.env.DB_PWD}@topactivities.qmknr.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=topactivities` 

const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    throw error;
  }
};

const disconnect = async () => {
  await mongoose.disconnect();
};

const database = {
  connect,
  disconnect,
};

export default database;
