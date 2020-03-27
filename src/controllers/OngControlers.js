const crypto = require('crypto');//este comando he de criptografia
const connection = require('../database/conection')

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const { nome, email, whatsapp, city, uf } = request.body;//este comando he de criptografia mas sera usado para gerar um id aleatorio
        const id = crypto.randomBytes(4).toString('HEX')

    await connection('ongs').insert({
        id,
        nome,
        email,
        whatsapp,
        city,
        uf,
    }) 

    return response.json({id})
    }
}