-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 23 mars 2021 à 23:46
-- Version du serveur :  10.4.14-MariaDB
-- Version de PHP : 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `processcontrol_db_dev`
--

-- --------------------------------------------------------

--
-- Structure de la table `areas`
--

CREATE TABLE `areas` (
  `id` int(11) NOT NULL,
  `idNode` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `menuWeb` varchar(255) DEFAULT NULL,
  `idFactory` varchar(255) DEFAULT NULL,
  `idArea` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `computers`
--

CREATE TABLE `computers` (
  `id` int(11) NOT NULL,
  `idNode` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  `isServer_Main` tinyint(1) DEFAULT NULL,
  `isServer_Local` tinyint(1) DEFAULT NULL,
  `isComputer_Local` tinyint(1) DEFAULT NULL,
  `isComputer_Carto` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `difficulties`
--

CREATE TABLE `difficulties` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `dsfsdfsdfds`
--

CREATE TABLE `dsfsdfsdfds` (
  `sdfsd` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `emptyingto_tankareas`
--

CREATE TABLE `emptyingto_tankareas` (
  `id` int(11) NOT NULL,
  `idNode` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  `idTankArea` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `fillingfrom_tankareas`
--

CREATE TABLE `fillingfrom_tankareas` (
  `id` int(11) NOT NULL,
  `idNode` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  `idTankArea` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `fonctions`
--

CREATE TABLE `fonctions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `IdAreaSource` varchar(255) DEFAULT NULL,
  `IdAreaDest` varchar(255) DEFAULT NULL,
  `freqCheck` int(11) DEFAULT NULL,
  `freqDelay` int(11) DEFAULT NULL,
  `IdProject` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `measures`
--

CREATE TABLE `measures` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `measure1` float DEFAULT NULL,
  `measure2` float DEFAULT NULL,
  `measure3` float DEFAULT NULL,
  `ts1` float DEFAULT NULL,
  `ts2` float DEFAULT NULL,
  `ts3` float DEFAULT NULL,
  `IdFunction` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `priorities`
--

CREATE TABLE `priorities` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  `totalSolid` float DEFAULT NULL,
  `price` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20210218185626-create-user.js'),
('20210218221330-create-user.js'),
('20210218221428-create-computer.js'),
('20210218221437-create-factory.js'),
('20210218221446-create-area.js'),
('20210218221508-create-tank-area.js'),
('20210218221517-create-filling-from-tank-area.js'),
('20210218221528-create-emptying-to-tank-area.js'),
('20210218221550-create-priority.js'),
('20210218221558-create-difficulty.js'),
('20210218221606-create-product.js'),
('20210218221651-create-function.js'),
('20210218221700-create-measure.js'),
('20210218222050-create-fonction.js'),
('20210218222317-create-fonction.js');

-- --------------------------------------------------------

--
-- Structure de la table `tankareas`
--

CREATE TABLE `tankareas` (
  `id` int(11) NOT NULL,
  `idNode` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  `idArea` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `position` int(11) NOT NULL,
  `IdFactory` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `isManager` tinyint(1) DEFAULT NULL,
  `isOperator` tinyint(1) DEFAULT NULL,
  `isVisitor` tinyint(1) NOT NULL,
  `isActif` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`, `position`, `IdFactory`, `isAdmin`, `isManager`, `isOperator`, `isVisitor`, `isActif`, `createdAt`, `updatedAt`) VALUES
(13, 'Admin@free.com', 'Aadmin', '$2b$05$TkUl.VD8sGtJPIEwFUqcEOyAenyAmlLkZxkuUp5MyqdkwUhsewqKq', 0, '1', 1, 0, 0, 0, 1, '2021-03-02 17:23:35', '2021-03-19 22:49:22'),
(14, 'toto', 'Manager', '$2b$05$1YfzI92.Fp/7YDNxD86H9.xtdGLC921n9hRP331SACxtX61Mmey3K', 0, '1', 0, 1, 0, 0, 1, '2021-03-02 17:24:21', '2021-03-19 16:58:30'),
(15, 'Operator@free.fr', 'Operator', '$2b$05$BcjdsKf1kokx/g8HI7E0SOJYkxWXYCw9/p.mw/d/9yId8Qv1ofX72', 0, '1', 0, 0, 1, 0, 1, '2021-03-02 17:24:51', '2021-03-19 16:58:30'),
(16, 'Visitor@free.frr', 'Visitor', '$2b$05$sA4nJ4uMTB4A2ycSKv9B3OZ18smDjMcZjaDSAWFE8B/YopzIYsI5O', 0, '1', 0, 0, 0, 1, 1, '2021-03-02 17:27:00', '2021-03-22 19:20:00'),
(17, 'Manager@free.fr', 'Manager', '$2b$05$1YfzI92.Fp/7YDNxD86H9.xtdGLC921n9hRP331SACxtX61Mmey3K', 0, '2', 0, 1, 0, 0, 1, '2021-03-02 17:24:21', '2021-03-19 16:58:32'),
(18, 'cca8@cca.fr', 'CC6555cc', '$2b$05$R2FphfXIQmYHJaxx1JaZk.e6iXe28bQ8GcBcAG5WdMs..ajo0M0Ji', 0, '2', 1, 0, 0, 0, 1, '2021-03-03 08:06:11', '2021-03-19 16:58:32'),
(19, 'east_christ@hotmail.com', 'east_christ', '$2b$05$luDabzXUAfQieNLkZmvg7Oc5VfMHfBEsNQ/u.qQ..szQUGUcPpX/m', 0, '2', 1, 0, 0, 0, 1, '2021-03-03 14:27:00', '2021-03-19 16:58:33'),
(20, 'Admin@cca.fr', 'Admin', '$2b$05$O1U9bPrpLKCB0n9oCuZkWewDMGhCCMusTxn/.dCWayoXGgNcfw8Oi', 0, '2', 1, 0, 0, 0, 1, '2021-03-18 13:17:18', '2021-03-19 16:58:34'),
(41, ',bn,bn', 'bn,bn,nb', NULL, 0, 'Exemple', 0, 0, 0, 0, 0, '2021-03-23 14:41:45', '2021-03-23 14:41:45');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `areas`
--
ALTER TABLE `areas`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `computers`
--
ALTER TABLE `computers`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `difficulties`
--
ALTER TABLE `difficulties`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `emptyingto_tankareas`
--
ALTER TABLE `emptyingto_tankareas`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `fillingfrom_tankareas`
--
ALTER TABLE `fillingfrom_tankareas`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `fonctions`
--
ALTER TABLE `fonctions`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `measures`
--
ALTER TABLE `measures`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `priorities`
--
ALTER TABLE `priorities`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `tankareas`
--
ALTER TABLE `tankareas`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `areas`
--
ALTER TABLE `areas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `computers`
--
ALTER TABLE `computers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `difficulties`
--
ALTER TABLE `difficulties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `emptyingto_tankareas`
--
ALTER TABLE `emptyingto_tankareas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `fillingfrom_tankareas`
--
ALTER TABLE `fillingfrom_tankareas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `fonctions`
--
ALTER TABLE `fonctions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `measures`
--
ALTER TABLE `measures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `priorities`
--
ALTER TABLE `priorities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tankareas`
--
ALTER TABLE `tankareas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
