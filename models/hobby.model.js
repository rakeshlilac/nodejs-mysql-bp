
const Sequelize1 = require("sequelize");

const sequelize = new Sequelize1("test", "root", "", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = function User() {
    var Sequelize = sequelize.constructor;
    

    var ret = sequelize.define('hobby', {
        name: {
          type: Sequelize.STRING,
          defaultValue:""
        },
        year: {
          type: Sequelize.INTEGER,
          defaultValue:""
        },
        status: {
          type: Sequelize.INTEGER,
          defaultValue:1
        }
        
  
      }, {
        tableName: 'hobby',
        timestamps: false
  
      });
      
  
    return ret;
  }