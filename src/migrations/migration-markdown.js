//dung doc lap them s:
//Tao ra bang:THEM XOA TRUONG DU LIEU
"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("markdowns", {
      // address: DataTypes.STRING,
      // description: DataTypes.TEXT,
      // image: DataTypes.STRING
      id: {
        allowNull: false,
        autoIncrement: true,
        //Tu tang theo so
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // contentHTML:DataTypes.TEXT('long'),
      // contentMarkdown: DataTypes.TEXT('long'),
      // description:DataTypes.TEXT('long'),
      // doctorId: DataTypes.INTEGER,
      // specialtyId:DataTypes.INTEGER,
      // clinicId:DataTypes.INTEGER,

      contentHTML: {
        allowNull: false,
        type: Sequelize.TEXT("long"),
      },
      contentMarkdown: {
        allowNull: false,
        type: Sequelize.TEXT("long"),
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT("long"),
      },
      doctorId: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      specialtyId: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      clinicId: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("markdowns");
  },
};
