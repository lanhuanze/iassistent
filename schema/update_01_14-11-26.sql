ALTER TABLE `iassistent`.`device`
ADD COLUMN `phonenumber` VARCHAR(45) NULL DEFAULT NULL AFTER `locale`;

ALTER TABLE `iassistent`.`account`
DROP COLUMN `phonenumber`;