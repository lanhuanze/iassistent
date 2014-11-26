CREATE TABLE `actions` (
  `id` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `action` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `expiretime` timestamp NULL DEFAULT NULL,
  `extra` text COLLATE utf8_unicode_ci,
  `status` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `target` text COLLATE utf8_unicode_ci,
  `createtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
