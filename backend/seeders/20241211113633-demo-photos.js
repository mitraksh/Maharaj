'use strict';

const photos = require('../models/photos');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Photos', [{
          photoName: 'nys1',
          photoDescription: 'maharaj at udhampur',
          photoFile: /Users/mitraksh/Documents/images/Screenshots/backinstockEmail.png,
          photoSize: '29.00',
          createdAt: '2025-12-11',
          updatedAt: '2025-12-11',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
