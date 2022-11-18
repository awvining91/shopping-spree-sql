const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}


// updated and defined the columns
Category.init(
  {
    

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      
      autoIncrement: true
      },
      category_name: {
      type: DataTypes.STRING,
      }
  },

  {
    sequelize,
    timestamps: false,
    
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
