-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema book_collection
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `book_collection` ;

-- -----------------------------------------------------
-- Schema book_collection
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `book_collection` DEFAULT CHARACTER SET utf8 ;
USE `book_collection` ;

-- -----------------------------------------------------
-- Table `book_collection`.`publishers`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `book_collection`.`publishers` ;

CREATE TABLE IF NOT EXISTS `book_collection`.`publishers` (
  `publisher_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `url` VARCHAR(125) NULL,
  PRIMARY KEY (`publisher_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `book_collection`.`books`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `book_collection`.`books` ;

CREATE TABLE IF NOT EXISTS `book_collection`.`books` (
  `book_id` INT NOT NULL AUTO_INCREMENT,
  `publisher_id` INT NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `subtitle` VARCHAR(45) NULL,
  `isbn_10` VARCHAR(10) NULL,
  `isbn_13` VARCHAR(13) NULL,
  `edition` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`book_id`),
  INDEX `fk_books_publishers1_idx` (`publisher_id` ASC) VISIBLE,
  CONSTRAINT `fk_books_publishers1`
    FOREIGN KEY (`publisher_id`)
    REFERENCES `book_collection`.`publishers` (`publisher_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `book_collection`.`authors`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `book_collection`.`authors` ;

CREATE TABLE IF NOT EXISTS `book_collection`.`authors` (
  `author_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `middle_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `suffix` VARCHAR(25) NULL,
  PRIMARY KEY (`author_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `book_collection`.`book_author`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `book_collection`.`book_author` ;

CREATE TABLE IF NOT EXISTS `book_collection`.`book_author` (
  `book_id` INT NOT NULL,
  `author_id` INT NOT NULL,
  INDEX `fk_book_author_books_idx` (`book_id` ASC) VISIBLE,
  INDEX `fk_book_author_authors1_idx` (`author_id` ASC) VISIBLE,
  CONSTRAINT `fk_book_author_books`
    FOREIGN KEY (`book_id`)
    REFERENCES `book_collection`.`books` (`book_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_book_author_authors1`
    FOREIGN KEY (`author_id`)
    REFERENCES `book_collection`.`authors` (`author_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `book_collection`.`publishers`
-- -----------------------------------------------------
START TRANSACTION;
USE `book_collection`;
INSERT INTO `book_collection`.`publishers` (`publisher_id`, `name`, `url`) VALUES (1, 'The Pragmatic Programmers', 'https://pragprog.com/');
INSERT INTO `book_collection`.`publishers` (`publisher_id`, `name`, `url`) VALUES (2, 'Addison-Wesley', 'https://www.informit.com/aw');
INSERT INTO `book_collection`.`publishers` (`publisher_id`, `name`, `url`) VALUES (3, 'O\'Reilly Media, Inc.', 'https://www.oreilly.com/products/books-videos.html');
INSERT INTO `book_collection`.`publishers` (`publisher_id`, `name`, `url`) VALUES (4, 'Manning Publications Co.', 'https://www.manning.com/');

COMMIT;


-- -----------------------------------------------------
-- Data for table `book_collection`.`books`
-- -----------------------------------------------------
START TRANSACTION;
USE `book_collection`;
INSERT INTO `book_collection`.`books` (`book_id`, `publisher_id`, `title`, `subtitle`, `isbn_10`, `isbn_13`, `edition`) VALUES (1, 2, 'The Pragmatic Programmer', 'from journeyman to master', '020161622X', '', 1);
INSERT INTO `book_collection`.`books` (`book_id`, `publisher_id`, `title`, `subtitle`, `isbn_10`, `isbn_13`, `edition`) VALUES (2, 1, 'Practices of an Agile Developer', NULL, '097451408X', '', 1);
INSERT INTO `book_collection`.`books` (`book_id`, `publisher_id`, `title`, `subtitle`, `isbn_10`, `isbn_13`, `edition`) VALUES (3, 1, 'Programming Groovy 2', 'Dynamic Productivity for the Java Developer', '', '9781937785307', 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `book_collection`.`authors`
-- -----------------------------------------------------
START TRANSACTION;
USE `book_collection`;
INSERT INTO `book_collection`.`authors` (`author_id`, `first_name`, `middle_name`, `last_name`, `suffix`) VALUES (1, 'Craig', NULL, 'Walls', NULL);
INSERT INTO `book_collection`.`authors` (`author_id`, `first_name`, `middle_name`, `last_name`, `suffix`) VALUES (2, 'Thomas', NULL, 'Hunter', 'II');
INSERT INTO `book_collection`.`authors` (`author_id`, `first_name`, `middle_name`, `last_name`, `suffix`) VALUES (3, 'Cay', 'S', 'Horstmann', NULL);
INSERT INTO `book_collection`.`authors` (`author_id`, `first_name`, `middle_name`, `last_name`, `suffix`) VALUES (4, 'Andrew', NULL, 'Hunt', NULL);
INSERT INTO `book_collection`.`authors` (`author_id`, `first_name`, `middle_name`, `last_name`, `suffix`) VALUES (5, 'David', NULL, 'Thomas', NULL);
INSERT INTO `book_collection`.`authors` (`author_id`, `first_name`, `middle_name`, `last_name`, `suffix`) VALUES (6, 'Venkat', NULL, 'Subramaniam', NULL);
INSERT INTO `book_collection`.`authors` (`author_id`, `first_name`, `middle_name`, `last_name`, `suffix`) VALUES (7, 'Ethan', NULL, 'Brown', NULL);
INSERT INTO `book_collection`.`authors` (`author_id`, `first_name`, `middle_name`, `last_name`, `suffix`) VALUES (8, 'Jim', 'R.', 'Wilson', NULL);
INSERT INTO `book_collection`.`authors` (`author_id`, `first_name`, `middle_name`, `last_name`, `suffix`) VALUES (9, 'Scott', NULL, 'Meyers', NULL);
INSERT INTO `book_collection`.`authors` (`author_id`, `first_name`, `middle_name`, `last_name`, `suffix`) VALUES (10, 'Kent', NULL, 'Beck', NULL);
INSERT INTO `book_collection`.`authors` (`author_id`, `first_name`, `middle_name`, `last_name`, `suffix`) VALUES (11, 'Eric', NULL, 'Freeman', NULL);
INSERT INTO `book_collection`.`authors` (`author_id`, `first_name`, `middle_name`, `last_name`, `suffix`) VALUES (12, 'Elisabeth', NULL, 'Robson', NULL);
INSERT INTO `book_collection`.`authors` (`author_id`, `first_name`, `middle_name`, `last_name`, `suffix`) VALUES (13, 'Chris', NULL, 'Richardson', NULL);
INSERT INTO `book_collection`.`authors` (`author_id`, `first_name`, `middle_name`, `last_name`, `suffix`) VALUES (14, 'Neal', NULL, 'Ford', NULL);
INSERT INTO `book_collection`.`authors` (`author_id`, `first_name`, `middle_name`, `last_name`, `suffix`) VALUES (15, 'Travis', NULL, 'Swicegood', NULL);

COMMIT;

