const connection = require('../database/conection')

module.exports = {
    async create(request, response) {
        const { id } = request.body;
        
        const ong = await connection('ongs')
        .where('id', id)
        .select('nome')
        .first()

        if (!ong) {
            return response.status(400).json({ error: 'usuario nao logado'});
        }

        return response.json(ong)
    }
}