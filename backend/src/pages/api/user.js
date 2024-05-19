import UserController from "@/database/controller/UserController";

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Headers', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); 

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  switch (req.method) {
    case 'GET':
      if (!req.params.id) { 
        try {
          const usuarios = await UserController.getAllUsers();
          res.status(200).json(usuarios);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Erro ao buscar usuários' });
        }
      } else { 
        const userId = req.params.id;
        try {
          const usuario = await UserController.getUserById(userId);
          if (!usuario) {
            res.status(404).json({ message: 'Usuário não encontrado' });
            return;
          }
          res.status(200).json(usuario);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Erro ao buscar usuário' });
        }
      }
      break;
    case 'POST':
      try {
        const usuarioSalvo = await UserController.saveUser(req.body);
        res.status(201).json(usuarioSalvo);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor' });
      }
      break;
    default:
      res.status(405).json({ message: 'Método não permitido' });
  }
}
