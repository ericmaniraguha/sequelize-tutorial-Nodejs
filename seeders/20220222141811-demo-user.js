'use strict';
module.exports={
up:async (queryInterface, Sequelize) =>{
        
 await queryInterface.bulkInsert(
   'user',
   [
     {
       id:1,
       name:'user1',
       email:'user1@gmail.com',
       created_at: new Date(),
       updated_at: new Date(),
     },

     {
      id:2,
      name:'user2',
      email:'user2@gmail.com',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id:3,
      name:'user3',
      email:'user3@gmail.com',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id:4,
      name:'user4',
      email:'user4@gmail.com',
      created_at: new Date(),
      updated_at: new Date(),
    },

   ],
   {}
 );


// channel 
await queryInterface.bulkInsert(
  'channel',
  [
    {
      id:1,
      name:'channel1',
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },

    {
     id:2,
     name:'channel2',
     user_id: 2,
     created_at: new Date(),
     updated_at: new Date(),
   },
   {
     id:3,
     name:'channel3',
     user_id: 3,
     created_at: new Date(),
     updated_at: new Date(),
   },

  ],
  {}
);

// video


// channel 
await queryInterface.bulkInsert(
  'video',
  [
    {
      id:1,
      title:'videoByUser1',
      channel_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },

    {
     id:2,
     title:'videoByUser2',
     channel_id: 2,
     created_at: new Date(),
     updated_at: new Date(),
   },
   {
     id:3,
      title:'videoByUser3',
     channel_id: 3,
     created_at: new Date(),
     updated_at: new Date(),
   },

  ],
  {}
);


},
 down: async (queryInterface, Sequelize) =>{
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
}

}