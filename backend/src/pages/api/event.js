import EventController from "@/database/controller/EventController";

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  switch (req.method) {
    case 'GET':
      if(req.query.userId && req.query.limit){
        try {
          const category = req.query.category;
          const limit = parseInt(req.query.limit) || 10;
          const events = await EventController.getShuffledEvents(category, limit);
          res.status(200).json(events);
        } catch (error) {
          res.status(500).json({ message: 'Erro interno do servidor' });
        }
      } else {
        try {
          const userId = req.query.userId;
          const eventsByUserId = await EventController.getEventsByUserId(userId);
          res.status(200).json(eventsByUserId);
        } catch (error) {
          res.status(500).json({ message: 'Erro interno do servidor' });
        }
      }
      break;
    case 'POST':
      try {
        const events = req.body;
        const savedEvents = await EventController.saveEvents(events);
        res.status(201).json(savedEvents);
      } catch (error) {
        res.status(500).json({ message: 'Erro interno do servidor' });
      }
      break;
    case 'PUT':
      try {
        const result = await EventController.addEventIdToEvents();
        if (result) {
          res.status(200).json({ message: 'Todos os documentos foram atualizados com sucesso' });
        } else {
          res.status(500).json({ message: 'Erro ao atualizar documentos' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Erro interno do servidor', details: error.message });
      }
      break;
    default:
      res.status(405).json({ message: 'Método não permitido' });
  }
}
