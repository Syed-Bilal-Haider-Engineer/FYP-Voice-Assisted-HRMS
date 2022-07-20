-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 20, 2022 at 09:54 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smarthr`
--

-- --------------------------------------------------------

--
-- Table structure for table `assets`
--

CREATE TABLE `assets` (
  `id` int(11) NOT NULL,
  `assetName` varchar(200) NOT NULL,
  `assetId` varchar(200) NOT NULL,
  `PurchaseDate` date NOT NULL,
  `PurchaseFrom` varchar(200) NOT NULL,
  `Manufacturer` varchar(200) NOT NULL,
  `Model` varchar(200) NOT NULL,
  `Status` int(10) NOT NULL,
  `Supplier` varchar(255) NOT NULL,
  `AssetCondition` varchar(255) NOT NULL,
  `Warranty` varchar(255) NOT NULL,
  `Price` int(255) NOT NULL,
  `AssetUser` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `DateTime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `assets`
--

INSERT INTO `assets` (`id`, `assetName`, `assetId`, `PurchaseDate`, `PurchaseFrom`, `Manufacturer`, `Model`, `Status`, `Supplier`, `AssetCondition`, `Warranty`, `Price`, `AssetUser`, `Description`, `DateTime`) VALUES
(1, 'Macbook Book', '#AST-031256', '2020-09-23', 'Amazon', 'Apple Inc.', '2020', 1, 'Amazon', 'In good shape', '12 Months', 1900, 'Mushe abdul-Hakim', 'This is the description of the laptop', '2020-09-23 23:57:26');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `Catid` int(20) NOT NULL,
  `catname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`Catid`, `catname`) VALUES
(1, 'Development'),
(2, 'Project management '),
(3, 'Quality Assuarance');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `UserName` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(225) NOT NULL,
  `ClientId` varchar(225) NOT NULL,
  `Phone` varchar(20) NOT NULL,
  `Company` varchar(255) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `Status` int(11) NOT NULL,
  `Picture` varchar(225) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `FirstName`, `LastName`, `UserName`, `Email`, `Password`, `ClientId`, `Phone`, `Company`, `Address`, `Status`, `Picture`, `date`) VALUES
(1, 'Yahuza', 'Abdul-Hakim', 'Vendetta', 'musheabdulhakim@protonmail.ch', '$2y$10$xU1zDRigag7ZMGs0Egcqoei0SrtZJRX/p425h4qOi5OMKFz32k0UC', 'CLT-613498', '233209229025', 'Microsoft Inc', 'Live from home', 1, 'd41d8cd98f00b204e9800998ecf8427e1601112041', '2020-09-26'),
(2, 'Vendetta', 'Alkaline', 'alkaline', 'musheabdulhakim99@gmail.com', '$2y$10$qUL2APr762X.vvJuNQvqludvabDa.Y3TRHOa.M/qq8WFoeoh7IaWG', 'CLT-217594', '233209229025', 'Falcon Systems', 'Live from home', 1, 'd41d8cd98f00b204e9800998ecf8427e1601112339', '2020-09-26');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `subject` varchar(25) NOT NULL,
  `msg` varchar(250) NOT NULL,
  `username` varchar(20) NOT NULL,
  `email` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `subject`, `msg`, `username`, `email`) VALUES
(1, 'how to Appli?', 'How to apply for react jobs in Bloctech solutions.', 'Bilal', 'bilalshahbscs@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `Department` varchar(200) NOT NULL,
  `Date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `Department`, `Date`) VALUES
(2, 'Marketing', '2020-09-26'),
(3, 'IT Department', '2020-09-26'),
(4, 'Web Development', '2020-09-27'),
(5, 'Human resource', '2022-07-17'),
(6, 'Project management', '2022-07-20');

-- --------------------------------------------------------

--
-- Table structure for table `designations`
--

CREATE TABLE `designations` (
  `id` int(11) NOT NULL,
  `Designation` varchar(100) NOT NULL,
  `Department` int(20) NOT NULL,
  `Date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `designations`
--

INSERT INTO `designations` (`id`, `Designation`, `Department`, `Date`) VALUES
(4, 'Associate developer', 3, '2022-07-18');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(5) NOT NULL,
  `applicationid` int(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `designations` varchar(255) NOT NULL,
  `DateTime` date NOT NULL,
  `picture` mediumblob NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `applicationid`, `email`, `password`, `department`, `designations`, `DateTime`, `picture`, `role`) VALUES
(3, 17, 'Ikram@gmail.com', '151214bscs', '4', '3', '2022-07-20', 0x313635383332323038342d6176617461722d32362e6a7067, 1);

-- --------------------------------------------------------

--
-- Table structure for table `holidays`
--

CREATE TABLE `holidays` (
  `id` int(11) NOT NULL,
  `Holiday_Name` varchar(200) NOT NULL,
  `Holiday_Date` date NOT NULL,
  `DateTime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `holidays`
--

INSERT INTO `holidays` (`id`, `Holiday_Name`, `Holiday_Date`, `DateTime`) VALUES
(1, 'Christmas', '2020-12-25', '2020-09-26 19:15:02');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `job_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `category` int(255) NOT NULL,
  `no_of_positons` int(11) NOT NULL,
  `job_city` varchar(255) NOT NULL,
  `posting_date` date NOT NULL DEFAULT current_timestamp(),
  `last_date` date NOT NULL,
  `status` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `logo` mediumblob NOT NULL,
  `skills` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`job_id`, `title`, `description`, `category`, `no_of_positons`, `job_city`, `posting_date`, `last_date`, `status`, `user_id`, `logo`, `skills`) VALUES
(4, 'website developer', 'i have a need  of my company one website developer.', 2, 1, 'Lahore', '2022-07-16', '2022-07-14', 0, 1, 0x313635373939363338362d66617669636f6e2e706e67, ''),
(5, 'quality', 'Testing, Unit testing, white box testing and Integration testing.', 3, 1, 'Lahore', '2022-07-17', '2022-07-27', 0, 1, 0x313635383034303136342d6a6f626c6973742e706e67, 'Testing, Unit testing, white box testing and Integration testing.');

-- --------------------------------------------------------

--
-- Table structure for table `leaves`
--

CREATE TABLE `leaves` (
  `id` int(11) NOT NULL,
  `Employee` varchar(200) NOT NULL,
  `Starting_At` date NOT NULL,
  `Ending_On` date NOT NULL,
  `Days` int(200) NOT NULL,
  `Reason` text NOT NULL,
  `Time_Added` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `leaves`
--

INSERT INTO `leaves` (`id`, `Employee`, `Starting_At`, `Ending_On`, `Days`, `Reason`, `Time_Added`) VALUES
(1, 'Goerge Merchason', '2020-09-01', '2020-10-01', 10, 'This is a test to the leaving system', '2020-10-04 01:50:34'),
(2, 'Mushe Abdul-Hakim', '2020-09-01', '2020-10-16', 10, 'this is another reason why he going home for number of days', '2020-10-04 01:53:22');

-- --------------------------------------------------------

--
-- Table structure for table `noticeboard`
--

CREATE TABLE `noticeboard` (
  `id` int(20) NOT NULL,
  `title` varchar(200) NOT NULL,
  `notice_desc` varchar(255) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `project_id` int(20) NOT NULL,
  `pro_name` varchar(20) NOT NULL,
  `pro_desc` mediumtext NOT NULL,
  `pro_summery` varchar(20) NOT NULL,
  `start_date` varchar(20) NOT NULL,
  `pro_type` varchar(20) NOT NULL,
  `pro_status` varchar(20) NOT NULL,
  `team_leader` varchar(20) NOT NULL,
  `team_member` varchar(20) NOT NULL,
  `end_date` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`project_id`, `pro_name`, `pro_desc`, `pro_summery`, `start_date`, `pro_type`, `pro_status`, `team_leader`, `team_member`, `end_date`) VALUES
(1, 'Office management', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin libero vitae est consectetur, a molestie tortor consectetur. Aenean tincidunt interdum ipsum, id pellentesque diam suscipit ut. Vivamus massa mi, fermentum eget neque eget, imperdiet tristique lectus. Proin at purus ut sem pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et pretium ac, hendrerit in felis. Integer scelerisque libero non metus commodo, et hendrerit diam aliquet. Proin tincidunt porttitor ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus nulla id consequat. Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor neque id massa porttitor, a pretium velit vehicula. Morbi volutpat tincidunt urna, vel ullamcorper ligula fermentum at.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin libero vitae est consectetur, a molestie tortor consectetur. Aenean tincidunt interdum ipsum, id pellentesque diam suscipit ut. Vivamus massa mi, fermentum eget neque eget, imperdiet tristique lectus. Proin at purus ut sem pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et pretium ac, hendrerit in felis. Integer scelerisque libero non metus commodo, et hendrerit diam aliquet. Proin tincidunt porttitor ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus nulla id consequat. Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor neque id massa porttitor, a pretium velit vehicula. Morbi volutpat tincidunt urna, vel ullamcorper ligula fermentum at.', '', '', '', 'Active', '', '', '17 Apr 2019'),
(2, 'Office management', 'office management', 'project', '', '', 'InActive', '', '', '17 Apr 2019');

-- --------------------------------------------------------

--
-- Table structure for table `taks`
--

CREATE TABLE `taks` (
  `task_id` int(20) NOT NULL,
  `pro_id` int(20) NOT NULL,
  `task_desc` varchar(20) NOT NULL,
  `task_title` varchar(20) NOT NULL,
  `img` varchar(20) NOT NULL,
  `start_date` varchar(20) NOT NULL,
  `end_date` varchar(20) NOT NULL,
  `type` varchar(20) NOT NULL,
  `id` int(20) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userapplication`
--

CREATE TABLE `userapplication` (
  `id` int(20) NOT NULL,
  `designation` varchar(20) NOT NULL,
  `cname` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `attend` int(2) NOT NULL,
  `degree` varchar(255) NOT NULL,
  `instituename` varchar(255) NOT NULL,
  `totalexp` varchar(255) NOT NULL,
  `cgpa` varchar(255) NOT NULL,
  `degreeyear` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `File` mediumblob NOT NULL,
  `visterId` int(20) NOT NULL,
  `Interview` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userapplication`
--

INSERT INTO `userapplication` (`id`, `designation`, `cname`, `description`, `attend`, `degree`, `instituename`, `totalexp`, `cgpa`, `degreeyear`, `subject`, `File`, `visterId`, `Interview`) VALUES
(1, 'software developer', 'Bloctsolution', 'We ara software designer', 0, 'Bs computer science', 'Gc univeristy', '2', '2.3', '2', 'database', '', 17, 'select'),
(2, 'Blochian developer', 'Bloctsolution', 'We are developer', 0, 'Bs computer science', 'Gc univeristy', '2 month', '2.3', '2', 'database', 0x313635383234353038352d6176617461722d30352e6a7067, 18, 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `UserName` varchar(200) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `uPassword` varchar(200) NOT NULL,
  `Phone` varchar(20) NOT NULL,
  `timeperiod` datetime NOT NULL DEFAULT current_timestamp(),
  `userstatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `UserName`, `Email`, `uPassword`, `Phone`, `timeperiod`, `userstatus`) VALUES
(6, 'bilal', 'bilalshahbscs@gmail.com', '151214bscs', '9876543210', '2020-09-21 19:04:47', 0),
(7, 'zain', 'zainsajjad@gmail.com', '$2y$10$f3acNJ/slpOfQvZy.u6OfOM6GOLTTjz3IYUIbMMQuixXjmgeRQ0Ga', '233209229025', '2020-09-21 19:05:43', 0),
(19, 'Hassan', 'bbilalshahbscs@gmail.com', '11111111', '11111111111111112', '2022-07-13 00:00:00', 1),
(20, 'Hassan', 'Hassanshah@gmail.com', '99999999', '923466929743', '2022-07-13 00:00:00', 1),
(23, 'Hassan', 'Hassanali@gmail.com', '151214bscs', '92345678999', '2022-07-14 00:00:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `visters`
--

CREATE TABLE `visters` (
  `id` int(20) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(22) NOT NULL,
  `password` varchar(30) NOT NULL,
  `address` varchar(255) NOT NULL,
  `role` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `visters`
--

INSERT INTO `visters` (`id`, `fname`, `lname`, `username`, `email`, `phone`, `password`, `address`, `role`) VALUES
(17, 'Ikram', 'Muhammad', 'Ikram', 'Ikram@gmail.com', '+9234678900', '1111111111111', 'Faisalabad', 0),
(20, 'zain', 'sajjad', 'Zain', 'zainsajjad@gmail.com', '+92345678900', '222222222222222', 'jhang', 0),
(21, 'Mubeen', 'Ahmad', 'Mubeen Ahmad', 'Mubeen@gmail.com', '+9234678900', '888888888888888', 'Faisalabad', 0),
(22, 'Hassan', 'ALI', 'hassan', 'Bilalhassan@gmail.com', '+92345678900', '33333333333333', 'Lahore', 0),
(23, 'Mubeen', 'Muhammad', 'mubeen', 'muhammad@gmail.com', '+9234678900', '22222222222', 'Faisalabad', 0),
(24, 'Muhammad', 'Mukthar', 'Mukthar', 'Mukthar@gmail.com', '+9234678900', '111111111111', 'jhang', 0),
(25, 'www', 'www', 'Hassan', 'bilalshahbscs@gmail.com', '+9234678900', '3333333333333333333', 'jhang', 0),
(26, 'Akash', 'Ali', 'Akash', 'Akash@gmail.com', '+92345678900', '222222222222222', 'jhang', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assets`
--
ALTER TABLE `assets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `assetId` (`assetId`),
  ADD UNIQUE KEY `assetId_2` (`assetId`),
  ADD UNIQUE KEY `assetId_3` (`assetId`),
  ADD UNIQUE KEY `assetId_4` (`assetId`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`Catid`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ClientId` (`ClientId`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Department` (`Department`);

--
-- Indexes for table `designations`
--
ALTER TABLE `designations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `holidays`
--
ALTER TABLE `holidays`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`job_id`);

--
-- Indexes for table `leaves`
--
ALTER TABLE `leaves`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `noticeboard`
--
ALTER TABLE `noticeboard`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`project_id`);

--
-- Indexes for table `taks`
--
ALTER TABLE `taks`
  ADD PRIMARY KEY (`task_id`);

--
-- Indexes for table `userapplication`
--
ALTER TABLE `userapplication`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Indexes for table `visters`
--
ALTER TABLE `visters`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assets`
--
ALTER TABLE `assets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `Catid` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `designations`
--
ALTER TABLE `designations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `holidays`
--
ALTER TABLE `holidays`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `leaves`
--
ALTER TABLE `leaves`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `noticeboard`
--
ALTER TABLE `noticeboard`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `project_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `taks`
--
ALTER TABLE `taks`
  MODIFY `task_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userapplication`
--
ALTER TABLE `userapplication`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `visters`
--
ALTER TABLE `visters`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
