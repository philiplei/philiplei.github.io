DROP TABLE IF EXISTS `task`;
CREATE TABLE IF NOT EXISTS `task` (
  `id` INTEGER PRIMARY KEY,
  `due` TEXT NOT NULL,
  `what` TEXT NOT NULL,
  `category` TEXT NOT NULL,
  `done` INTEGER NOT NULL
);

INSERT INTO `task` (`due`, `what`, `category`, `done`) VALUES
('2016-10-27', 'COMP312 Test 1', 'study', 0),
('2016-10-28', 'Project presentation', 'study', 0),
('2016-10-29', 'Buy bday gift', 'home', 1),
('2016-10-31', 'Mary''s birthday', 'home', 0),
('2016-10-31', 'COMP312 HW 2', 'study', 0);
