
//Tao ra bang:
'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('specialties', {
            //     description: DataTypes.TEXT,
            // image: DataTypes.STRING,
            id: {
                allowNull: false,
                autoIncrement: true,
                //Tu tang theo so
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            descriptionHTML: {
                type: Sequelize.TEXT
            },
            descriptionMarkdown: {
                type: Sequelize.TEXT
            },
            image: {
                type: Sequelize.Sequelize.BLOB("long"),
            },
            name: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('specialties');
    }
};