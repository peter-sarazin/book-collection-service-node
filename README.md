# book-collection-service-node
Sample Service using Node.js, Express, and Sequelize ORM

## SQL commands to create database user and grant permissions

 create user 'reader'@'localhost' identified by 'password';

 grant all on book_collection.* to 'reader'@'localhost';

 // see config/config.json

 ## Override Sequalize timestamp audit fields

 If you do not want audit fields, or want to implement your own custom auditing, then place the following block in config.json

     "define": { 
      "timestamps": false
    }

See config.json in thia project for example.