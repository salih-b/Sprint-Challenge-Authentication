const db = require("./dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  console.log('in find helper');
  return db("users").select("id", "username", "password");
}

function findBy(filter) {
  console.log('in findby helper');
  return db("users").where(filter);
}

async function add(user) {
  console.log('in add helper');
  const [id] = await db("users").insert(user, "id");

  return findById(id);
}

function findById(id) {
  return db("users").where({ id }).first();
}
