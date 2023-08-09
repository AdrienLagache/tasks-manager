-- Adminer 4.7.6 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1,	'vintage',	'2023-06-15 14:11:08',	NULL),
(2,	'detente',	'2023-06-15 14:11:25',	NULL),
(3,	'au travail',	'2023-06-15 14:11:35',	NULL),
(7,	'talons aiguille',	'2023-06-16 09:39:40',	'2023-06-16 09:40:39');

DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `tags` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1,	'pokemon',	'2023-06-15 14:14:04',	NULL),
(2,	'vacances',	'2023-06-15 14:14:28',	NULL),
(4,	'space',	'2023-06-16 11:44:42',	'2023-06-16 09:44:42');

DROP TABLE IF EXISTS `tag_task`;
CREATE TABLE `tag_task` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tag_id` int(10) unsigned NOT NULL,
  `task_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `tag_task` (`id`, `tag_id`, `task_id`, `created_at`, `updated_at`) VALUES
(1,	2,	1,	'2023-06-21 14:26:24',	NULL),
(2,	4,	1,	'2023-06-21 14:26:24',	NULL);

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `category_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `category` (`category_id`),
  CONSTRAINT `category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `tasks` (`id`, `title`, `status`, `category_id`, `created_at`, `updated_at`) VALUES
(1,	'acheter du wisky',	0,	1,	'2023-06-20 15:26:24',	NULL),
(11,	'se servir un verre',	0,	3,	'2023-06-22 07:08:10',	NULL),
(12,	'boire le verre',	0,	3,	'2023-06-22 07:08:22',	NULL);

-- 2023-06-22 07:10:32