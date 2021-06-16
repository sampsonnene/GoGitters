'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.articles.hasMany(
        models.comments,
        {
          foreignKey: "articleID"
        }
      
      )
    }
  };
  articles.init({
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'articles',
  });
  return articles;
};