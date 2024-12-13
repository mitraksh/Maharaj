const { Sequelize, DataTypes, Model, INTEGER, Op } = require('sequelize');
const sequelize = require('../db/connect');

class Photos extends Model {}

Photos.init({
  photoName: {type: DataTypes.STRING, unique:true},
  photoDescription: DataTypes.STRING,
  photoFile: {type: DataTypes.BLOB, unique:true},
  photoSize: DataTypes.FLOAT
}, {
  sequelize,
  modelName: 'Photos',
});

module.exports.getAllPhotos = async () => {
  const allPhotos = await Photos.findAll();
  return allPhotos;
}