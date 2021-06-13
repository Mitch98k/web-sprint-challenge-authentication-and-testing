const db = require('../../data/dbConfig');

async function add(user) {
    const [id] = await db('users').insert(user);
    return db('users').where({id});
}

function findBy(filter) {
    return db('users').where({filter}).first();
}


module.exports = {
    add,
    findBy
}