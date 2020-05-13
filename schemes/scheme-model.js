const db = require("../data/db-config.js");

module.exports = {
  findAll,
  findById,
  findSteps,
  add,
  update,
  remove,
};
function findAll() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where("id", id).first();
}

function findSteps(id) {
    return db('schemes as sc')
      .join('steps as s', 's.scheme_id', '=', 'sc.id')
      .select('sc.scheme_name', 's.step_number', 's.instructions')
      .where('sc.id', '=', id)
      .orderBy('s.step_number')
  }

//return db("steps").where("scheme_id", "=", id)

function add(scheme) {
  return db("schemes")
    .insert(scheme, "id")
    .then(ids => {
      return findById(ids[0]);
    });
}
/*
db('schemes') => a promise that resolves to a schemes
findById  => a promise that resolves to a schemes
add  => a promise that resolves to a schemes
post
*/
function update(changes, id) {
  return db("schemes").where({id}).update(changes);
}
function remove(id) {
  return db("schemes").where({id}).del();
}