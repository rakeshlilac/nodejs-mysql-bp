const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const User = require('../models/hobby.model');

async function getMultiple(name){
  const user = new User();
  const result = await user.findAll({
    where: {
        name: name
    }
})
return result
}

async function create(obj){
  const object = new User()
  const result = await object.create({name: obj.name, year: obj.year,status:1})
}

async function update(id, obj){
  const object = new User()
  const result = await object.update(
    { email: obj.email },
    { where: { id: id } }
  )
}

module.exports = {
  getMultiple,
  create,
  update
}
