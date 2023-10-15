/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('draws', function (table) {
      table.string('id', 100);
      table.integer('hundredDrawn');
      table.string('animalDrawn', 100);
      table.dateTime('drawnAt');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists ('draws')
};
