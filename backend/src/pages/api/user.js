import UserController from "@/database/controller/UserController";

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Headers', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS'); 

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  switch (req.method) {
    case 'GET':
      try {
        const { email, senha } = req.query;
    
        if (!email || !senha) {
          return res.status(400).json({ message: 'Email e Senha são obrigatórios' });
        }

        const user = await UserController.selectByEmailAndPassword(email, senha);
    
        if (!user) {
          return res.status(404).json({ message: 'Usuário não encontrado' });
        }
    
        res.status(200).json(user);

      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor' });
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
    case 'PUT':
      try {
        const { email } = req.body;
        const { nome } = req.body;
        const { senha } = req.body;
        const updateData = req.body;

        if (!email) {
          return res.status(400).json({ message: 'Email é obrigatório para atualização' });
        }
        
        if (!senha) {
          return res.status(400).json({ message: 'Senha é obrigatório para atualização' });
        }

        if (!nome) {
          return res.status(400).json({ message: 'Nome é obrigatório para atualização' });
        }

        const updatedUser = await UserController.updateUser(email, updateData);

        if (!updatedUser) {
          return res.status(404).json({ message: 'Usuário não encontrado ou não atualizado' });
        }

        res.status(200).json(updatedUser);

      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor' });
      }
      break;
    default:
      res.status(405).json({ message: 'Método não permitido' });
  }
}
