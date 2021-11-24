# web-tools-apis
## Sql Tables
- Store- faq search keyword:  CREATE TABLE `supertools`.`faq` ( `id` INT(50) NOT NULL AUTO_INCREMENT , `keyword` VARCHAR(250) NOT NULL , `user_id` VARCHAR(50) NULL , `created_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;