const connection = require('../database/conection')

module.exports = {
    async index(request,response) {
        const ong_id = request.headers.authorization;

        const insidents = await connection('insidents')
        .where('ong_id', ong_id)
        .select('*')

        return response.json(insidents)
    }
}