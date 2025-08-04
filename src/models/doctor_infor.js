//Tao cac gia tri cho bang:

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor_Infor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //Định nghĩa mối quan hệ của 2 table:
    static associate(models) {
      // define association here
      Doctor_Infor.belongsTo(models.User, {
        foreignKey: "doctorId",
      });
      Doctor_Infor.belongsTo(models.Allcode, {
        foreignKey: "priceId",
        targetKey: "keyMap",
        as: "priceTypeData",
      });
      Doctor_Infor.belongsTo(models.Allcode, {
        foreignKey: "paymentId",
        targetKey: "keyMap",
        as: "paymentTypeData",
      });
      Doctor_Infor.belongsTo(models.Allcode, {
        foreignKey: "provinceId",
        targetKey: "keyMap",
        as: "provinceTypeData",
      });
    }
  }
  //     id
  // doctorId
  // priceId
  // provinceId
  // paymentId
  // addressClinic
  // nameClinic
  // note
  // count
  //them truong du lieu nguoi dung o trang nay:
  Doctor_Infor.init(
    {
      // id: DataTypes.INTEGER,
      doctorId: DataTypes.INTEGER,
      specialtyId: DataTypes.INTEGER,
      clinicId: DataTypes.INTEGER,
      priceId: DataTypes.STRING,
      provinceId: DataTypes.STRING,
      paymentId: DataTypes.STRING,
      addressClinic: DataTypes.STRING,
      nameClinic: DataTypes.STRING,
      note: DataTypes.STRING,
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Doctor_Infor",
      //lấy đúng tên table
      freezeTableName: true,
    }
  );
  return Doctor_Infor;
};
