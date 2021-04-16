# book-collection-service-node
Sample Service using Node.js, Express, and Sequelize ORM with MySQL database

## Database design
Data Model was created using MySQL Workbench and is located in file: design/book-collection-data-model.mwb

<img src="design/book-collection-data-model.png">

One option to generate the database schema is that you can Forward Engineer the data model to create the database from MySQL Workbench.

The database create sql script file is also included in the design folder with the name db-create.sql

## SQL commands to create the configured database user and grant permissions

 create user 'reader'@'localhost' identified by 'password';

 grant all on book_collection.* to 'reader'@'localhost';

 // see config/config.json

 ## Override Sequalize timestamp audit fields

 The sequalize timestamp audit fields have been disabled in this project.  This is done by placing the following block of code in config.json.
 
     "define": { 
      "timestamps": false
    }

See config.json in this project for example.