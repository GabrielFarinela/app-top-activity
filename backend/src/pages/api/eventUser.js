import EventUserController from "@/database/controller/EventUserController";

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    switch (req.method) {
        case 'GET':
            break;
        case 'POST':
            try {
                const { userId, eventId } = req.body;

                const result = await EventUserController.saveEventUser({ userId, eventId });

                if (result) {
                    res.status(200).json({ message: 'Dados inseridos com sucesso' });
                } else {
                    res.status(500).json({ message: 'Erro ao inserir dados' });
                }
            } catch (error) {
                res.status(500).json({ message: 'Erro interno do servidor' });
            }
            break;
        case 'DELETE':
            try {
                const { userId, eventId } = req.body;

                const result = await EventUserController.deleteEventUserByIds(eventId, userId);

                if (result) {
                    res.status(200).json({ message: 'Dados removidos com sucesso' });
                } else {
                    res.status(404).json({ message: 'Dados não encontrados' });
                }
            } catch (error) {
                res.status(500).json({ message: 'Erro interno do servidor' });
            }
            break;
        case 'PUT':
            break;
        default:
            res.status(405).json({ message: 'Método não permitido' });
    }
}
