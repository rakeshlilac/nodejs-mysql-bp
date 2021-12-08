
const Sequelize1 = require("sequelize");

const sequelize = new Sequelize1("test", "root", "", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = function User() {
    var Sequelize = sequelize.constructor;
    

    var ret = sequelize.define('user', {
        name: {
          type: Sequelize.STRING,
          defaultValue:""
        },
        email: {
          type: Sequelize.STRING,
          defaultValue:""
        },
        status: {
          type: Sequelize.INTEGER,
          defaultValue:1
        }
        
  
      }, {
        tableName: 'user',
        timestamps: false
  
      });
      
  
    return ret;
  }