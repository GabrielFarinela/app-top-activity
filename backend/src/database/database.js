import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const dbName = "mongoapp";

const url = `mongodb+srv://gabifarinela:${process.env.DB_PWD}@cluster0.cl8fmby.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    // Envie uma resposta de erro (por exemplo, status 500)
    throw error; // Repasse o erro para ser tratado na rota
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
