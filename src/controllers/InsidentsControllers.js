const connection = require('../database/conection')

module.exports = {
    async index(request, response) {

        const { page = 1 } = request.query;

        const [count] = await connection('insidents').count()

        console.log(count);

        const insidents = await connection('insidents')
        .join('ongs', 'ongs.id', '=', 'insidents.ong_id' )
        .limit(5)
        .offset(( page - 1)* 5) //esse limit ou paginacao e usado para quando fazer a listagem nao haja subcarga.
        .select(['insidents.*', 'ongs.nome', 
                    'ongs.email', 
                    'ongs.whatsapp', 
                    'ongs.city', 
                    'ongs.uf'])

        response.header('X-Total-Count', count['count(*)'])

        return response.json(insidents)
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('insidents').insert({
            title,
            description,
            value,
            ong_id
        }) 
        return response.json({ id })
    },

    async delete(request, response) {
        const { id } = request.params
        const ong_id = request.headers.authorization;//esta linha pega o id do usuario logado para poder excluir

        //buscando o id no banco de dados

        const insidents = await connection('insidents')
        .where("id",id)
        .select("ong_id")
        .first()

        if (insidents.ong_id != ong_id) {
            return response.status(401).json({error: 'Usuario nao logado'})
        }
        await connection('insidents').where("id", id).delete()

        return response.status(204).send()

    }
}