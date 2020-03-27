
exports.up = function(knex) {
    return knex.schema.createTable('insidents', function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        //criando chave extarngeira
        table.foreign('ong_id').references('id').inTable('ongs');
    })
};

exports.down = function(knex) {
  return knex.schema.createTable('insidents');
};
