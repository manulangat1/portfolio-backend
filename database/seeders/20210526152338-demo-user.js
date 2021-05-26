'use strict';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const genHash = (password) => {
  return bcrypt.hashSync(password,'10')
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'emmanuelthedeveloper@gmail.com',
      password:genHash('3050manu'),
      isActive:true,
      isAdmin:true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});
  }
};
