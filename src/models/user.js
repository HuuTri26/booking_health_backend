//Tao cac gia tri cho bang:

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //Định nghĩa quan hệ csdl:
    static associate(models) {
      User.belongsTo(models.Allcode, {
        foreignKey: "positionId",
        targetKey: "keyMap",
        as: "positionData",
      });
      User.belongsTo(models.Allcode, {
        foreignKey: "gender",
        targetKey: "keyMap",
        as: "genderData",
      });
      User.hasOne(models.Markdown, {
        foreignKey: "doctorId",
      });
      User.hasOne(models.Doctor_Infor, {
        foreignKey: "doctorId",
      });
      User.hasMany(models.Schedule, {
        foreignKey: "doctorId",
        as: "doctorData",
      });

      User.hasMany(models.Booking, {
        foreignKey: "patientId",
        as: "patientData",
      });

      // define association here
    }
  }
  //them truong du lieu nguoi dung o trang nay:
  User.init(
    {
      // id: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      // email: DataTypes.STRING,
      address: DataTypes.STRING,
      phonenumber: DataTypes.STRING,
      gender: DataTypes.STRING,
      // roleId: DataTypes.STRING,
      image: DataTypes.STRING,
      roleId: DataTypes.STRING,

      positionId: DataTypes.STRING,
      
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
