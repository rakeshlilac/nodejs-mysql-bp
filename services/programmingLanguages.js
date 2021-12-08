const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const User = require('../models/user.model');
const sequelize = require('sequelize')

async function getCustomQuery(name){
  

  const sq = new sequelize("test", "root", "", {
    dialect: "mysql",
    host: "localhost",
  });
  const query = "SELECT user.email, hobby.year FROM user INNER JOIN hobby ON user.name = hobby.name; "
  const result = await sq(query);
   

  return result
}

async function getMultiple(name){
  // const offset = helper.getOffset(page, config.listPerPage);
  // const rows = await db.query(
  //   `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
  //   FROM programming_languages LIMIT ?,?`, 
  //   [offset, config.listPerPage]
  // );
  // const data = helper.emptyOrRows(rows);
  // const meta = {page};

  // return {
  //   data,
  //   meta
  // }

  const user = new User();
  const result = await user.findAll({
    where: {
        name: name
    }
})
return result
}

async function create(obj){
  // const result = await db.query(
  //   `INSERT INTO programming_languages 
  //   (name, released_year, githut_rank, pypl_rank, tiobe_rank) 
  //   VALUES 
  //   (?, ?, ?, ?, ?)`, 
  //   [
  //     programmingLanguage.name, programmingLanguage.released_year,
  //     programmingLanguage.githut_rank, programmingLanguage.pypl_rank,
  //     programmingLanguage.tiobe_rank
  //   ]
  // );

  // let message = 'Error in creating programming language';

  // if (result.affectedRows) {
  //   message = 'Programming language created successfully';
  // }

  // return {message};

  const object = new User()

  const result = await object.create({name: obj.name, email: obj.email,status:1})

  
}

async function update(id, obj){
  // const result = await db.query(
  //   `UPDATE programming_languages 
  //   SET name=?, released_year=?, githut_rank=?, 
  //   pypl_rank=?, tiobe_rank=? 
  //   WHERE id=?`, 
  //   [
  //     programmingLanguage.name, programmingLanguage.released_year,
  //     programmingLanguage.githut_rank, programmingLanguage.pypl_rank,
  //     programmingLanguage.tiobe_rank, id
  //   ]
  // );

  // let message = 'Error in updating programming language';

  // if (result.affectedRows) {
  //   message = 'Programming language updated successfully';
  // }

  // return {message};

  const object = new User()

  const result = await object.update(
    { email: obj.email },
    { where: { id: id } }
  )
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM programming_languages WHERE id=?`, 
    [id]
  );

  let message = 'Error in deleting programming language';

  if (result.affectedRows) {
    message = 'Programming language deleted successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
  getCustomQuery
}
