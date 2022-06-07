DROP TABLE IF EXISTS `Product`;

CREATE TABLE `Product` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) CHARACTER
  SET
    utf8 COLLATE utf8_general_ci DEFAULT NULL,
    `feedback` varchar(64) DEFAULT NULL,
    `review` json DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 7 DEFAULT CHARSET = utf8mb4;


insert into `Product` (`feedback`, `id`, `name`, `review`) values ('ok', 1, 'Periuta de dinti', '{\"price\":5,\"rating\":3}');
insert into `Product` (`feedback`, `id`, `name`, `review`) values ('great sound quality', 2, 'Boxa JBL', '{\"price\":300,\"rating\":3}');
insert into `Product` (`feedback`, `id`, `name`, `review`) values ('expensive but quality', 3, 'Iphone 12', '{\"price\":3000,\"rating\":5}');
insert into `Product` (`feedback`, `id`, `name`, `review`) values ('quality milk', 4, 'Milka', '{\"price\":10,\"rating\":4}');
insert into `Product` (`feedback`, `id`, `name`, `review`) values ('great entertainment', 5, 'Bilet meci', '{\"price\":20,\"rating\":3}');
insert into `Product` (`feedback`, `id`, `name`, `review`) values ('good fabric', 6, 'Camasa', '{\"price\":65,\"rating\":3}');


DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nume` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4;

insert into `Users` (`id`, `nume`, `pass`) values (1, 'Andrei', '1234');
insert into `Users` (`id`, `nume`, `pass`) values (2, 'Flag', 'w3x7UtQL');