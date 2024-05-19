import database from "@/database/database";

export default async function handler(req, res) {
  try {
    await database.connect();
    res.status(200).json({ message: "Conectado ao MongoDB" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao conectar" });
  }
};
