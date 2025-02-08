CREATE TABLE Admin (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()), 
    name VARCHAR(255) NOT NULL,
    profile TEXT,
    email VARCHAR(255) UNIQUE NOT NULL,
    contact BIGINT UNIQUE,
    password VARCHAR(255) NOT NULL,
    type ENUM('SUPER_ADMIN', 'MODERATOR', 'EDITOR', 'VIEWER') NOT NULL,
    token TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL,
    is_super BOOLEAN DEFAULT FALSE
);



INSERT INTO Admin (id, name, profile, email, contact, password, type, token, createdAt, updatedAt, deletedAt, is_super) VALUES
(UUID(), 'John Doe', 'Admin profile', 'john.doe@example.com', 9876543210, 'hashed_password_1', 'SUPER_ADMIN', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIiwicGFzc3dvcmQiOiJoYXNoZWRfcGFzc3dvcmRfMSIsImlhdCI6MTczOTAxMTk5MiwiZXhwIjoxNzQxNjAzOTkyfQ.HpnqtgoxKLBnsIOuSKgcVpcdrQ7BpY7IGJv8yobd_CU', NOW(), NOW(), NULL, TRUE),
(UUID(), 'Jane Smith', 'Moderator profile', 'jane.smith@example.com', 9876543211, 'hashed_password_2', 'MODERATOR', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmUuc21pdGhAZXhhbXBsZS5jb20iLCJwYXNzd29yZCI6Imhhc2hlZF9wYXNzd29yZF8yIiwiaWF0IjoxNzM5MDExOTkyLCJleHAiOjE3NDE2MDM5OTJ9.iuAjreew4SARJ9pj3dmaJaZkmkC5Vkoyotret_OYAsQ', NOW(), NOW(), NULL, FALSE),
(UUID(), 'Alice Johnson', 'Editor profile', 'alice.johnson@example.com', 9876543212, 'hashed_password_3', 'EDITOR', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsaWNlLmpvaG5zb25AZXhhbXBsZS5jb20iLCJwYXNzd29yZCI6Imhhc2hlZF9wYXNzd29yZF8zIiwiaWF0IjoxNzM5MDExOTkyLCJleHAiOjE3NDE2MDM5OTJ9.jBTiWyywhAIbGog5169XWraaneQ-JimesNDnfSWyX-k', NOW(), NOW(), NULL, FALSE),
(UUID(), 'Bob Brown', 'Viewer profile', 'bob.brown@example.com', 9876543213, 'hashed_password_4', 'VIEWER', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvYi5icm93bkBleGFtcGxlLmNvbSIsInBhc3N3b3JkIjoiaGFzaGVkX3Bhc3N3b3JkXzQiLCJpYXQiOjE3MzkwMTE5OTIsImV4cCI6MTc0MTYwMzk5Mn0.dy8QLDjg2JSLSDW37zgBRRMB6EpcNFbUc9sot7A0KM8', NOW(), NOW(), NULL, FALSE),
(UUID(), 'Charlie White', 'Admin profile', 'charlie.white@example.com', 9876543214, 'hashed_password_5', 'SUPER_ADMIN', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoYXJsaWUud2hpdGVAZXhhbXBsZS5jb20iLCJwYXNzd29yZCI6Imhhc2hlZF9wYXNzd29yZF81IiwiaWF0IjoxNzM5MDExOTkyLCJleHAiOjE3NDE2MDM5OTJ9.rAtkJKW5OHemspgulANoe9TOwGF0YhtTPdibOcoGCz0', NOW(), NOW(), NULL, TRUE),
(UUID(), 'Emily Davis', 'Moderator profile', 'emily.davis@example.com', 9876543215, 'hashed_password_6', 'MODERATOR', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtaWx5LmRhdmlzQGV4YW1wbGUuY29tIiwicGFzc3dvcmQiOiJoYXNoZWRfcGFzc3dvcmRfNiIsImlhdCI6MTczOTAxMTk5MiwiZXhwIjoxNzQxNjAzOTkyfQ.q9lWbxV4SLOHOxRlDB95lcNv25KUt-TQ5dHmiAfjRAs', NOW(), NOW(), NULL, FALSE),
(UUID(), 'Daniel Wilson', 'Editor profile', 'daniel.wilson@example.com', 9876543216, 'hashed_password_7', 'EDITOR', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmllbC53aWxzb25AZXhhbXBsZS5jb20iLCJwYXNzd29yZCI6Imhhc2hlZF9wYXNzd29yZF83IiwiaWF0IjoxNzM5MDExOTkyLCJleHAiOjE3NDE2MDM5OTJ9.XVmV8bi0PcSlJk1XWPYQ72VKXerN355WKN-f5uqy7Hc', NOW(), NOW(), NULL, FALSE),
(UUID(), 'Sophia Martinez', 'Viewer profile', 'sophia.martinez@example.com', 9876543217, 'hashed_password_8', 'VIEWER', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvcGhpYS5tYXJ0aW5lekBleGFtcGxlLmNvbSIsInBhc3N3b3JkIjoiaGFzaGVkX3Bhc3N3b3JkXzgiLCJpYXQiOjE3MzkwMTE5OTIsImV4cCI6MTc0MTYwMzk5Mn0.cdPbSGjy_9WO-Wmyu3DxfTpL7b5dFRD2k8ZlCLIZPQg', NOW(), NOW(), NULL, FALSE),
(UUID(), 'Ethan Thomas', 'Admin profile', 'ethan.thomas@example.com', 9876543218, 'hashed_password_9', 'SUPER_ADMIN', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV0aGFuLnRob21hc0BleGFtcGxlLmNvbSIsInBhc3N3b3JkIjoiaGFzaGVkX3Bhc3N3b3JkXzkiLCJpYXQiOjE3MzkwMTE5OTIsImV4cCI6MTc0MTYwMzk5Mn0.INZFmgZTktCbXAWOJvLqWHxQS23zG6slsxiGFRGlNwk', NOW(), NOW(), NULL, TRUE),
(UUID(), 'Mia Hernandez', 'Moderator profile', 'admin@gmail.com', 9876543219, 'BSaNCAd5nmkmP1Uk', 'MODERATOR', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pYS5oZXJuYW5kZXpAZXhhbXBsZS5jb20iLCJwYXNzd29yZCI6IkJTYU5DQWQ1bm1rbVAxVWsiLCJpYXQiOjE3MzkwMTE5OTIsImV4cCI6MTc0MTYwMzk5Mn0.3FSOg0HJ4e0hEF6Tjp6u0OF-LhAGX-vGED_2DFLU3aE', NOW(), NOW(), NULL, TRUE);


CREATE TABLE admin_permissions (
    id CHAR(36) PRIMARY KEY, 
    admin_id CHAR(36) NOT NULL,
    jewelry_read BOOLEAN NOT NULL DEFAULT FALSE,
    jewelry_write BOOLEAN NOT NULL DEFAULT FALSE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL DEFAULT NULL,
    CONSTRAINT fk_admin FOREIGN KEY (admin_id) REFERENCES Admin(id) ON DELETE CASCADE
);




INSERT INTO admin_permissions (id, admin_id, jewelry_read, jewelry_write) VALUES 
(UUID(), 'ad8ebdf7-e60b-11ef-91e0-d0abd5a4f6d2', TRUE, TRUE),
(UUID(), 'ad8ec4be-e60b-11ef-91e0-d0abd5a4f6d2', TRUE, FALSE),
(UUID(), 'ad8ec753-e60b-11ef-91e0-d0abd5a4f6d2', TRUE, FALSE),
(UUID(), 'ad8ec90f-e60b-11ef-91e0-d0abd5a4f6d2', TRUE, FALSE),
(UUID(), 'ad8ecaca-e60b-11ef-91e0-d0abd5a4f6d2', TRUE, TRUE),
(UUID(), 'ad8ecc73-e60b-11ef-91e0-d0abd5a4f6d2', TRUE, FALSE),
(UUID(), 'ad8ece41-e60b-11ef-91e0-d0abd5a4f6d2', TRUE, FALSE),
(UUID(), 'ad8ed13d-e60b-11ef-91e0-d0abd5a4f6d2', TRUE, FALSE),
(UUID(), 'ad8ed311-e60b-11ef-91e0-d0abd5a4f6d2', TRUE, TRUE),
(UUID(), 'ad8ed4d6-e60b-11ef-91e0-d0abd5a4f6d2', TRUE, FALSE);








CREATE TABLE jewelryType (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_by CHAR(36) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL DEFAULT NULL,
    CONSTRAINT fk_admin_jewelryType FOREIGN KEY (created_by) REFERENCES Admin(id) ON DELETE CASCADE
);



INSERT INTO jewelryType (name, created_by) VALUES
('Necklace', 'ad8ebdf7-e60b-11ef-91e0-d0abd5a4f6d2'),
('Bracelet', 'ad8ebdf7-e60b-11ef-91e0-d0abd5a4f6d2'),
('Ring', 'ad8ebdf7-e60b-11ef-91e0-d0abd5a4f6d2'),
('Earrings', 'ad8ebdf7-e60b-11ef-91e0-d0abd5a4f6d2'),
('Pendant', 'ad8ecaca-e60b-11ef-91e0-d0abd5a4f6d2'),
('Bangle', 'ad8ecaca-e60b-11ef-91e0-d0abd5a4f6d2'),
('Anklet', 'ad8ecaca-e60b-11ef-91e0-d0abd5a4f6d2'),
('Brooch', 'ad8ecaca-e60b-11ef-91e0-d0abd5a4f6d2'),
('Cufflinks', 'ad8ed311-e60b-11ef-91e0-d0abd5a4f6d2'),
('Tiara', 'ad8ed311-e60b-11ef-91e0-d0abd5a4f6d2');











CREATE TABLE jewelrySubType (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type INT NOT NULL,
    code VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    concept TEXT,
    created_by CHAR(36) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL DEFAULT NULL,
    CONSTRAINT fk_jewelryType FOREIGN KEY (type) REFERENCES jewelryType(id) ON DELETE CASCADE,
    CONSTRAINT fk_admin_sub_type FOREIGN KEY (created_by) REFERENCES Admin(id) ON DELETE CASCADE
);




INSERT INTO jewelrySubType (type, code, name, concept, created_by) VALUES
(1, 'JWL001', 'Gold Necklace', 'Elegant gold necklace for formal events', 'ad8ebdf7-e60b-11ef-91e0-d0abd5a4f6d2'),
(2, 'JWL002', 'Silver Bracelet', 'Minimalist silver bracelet for daily wear', 'ad8ebdf7-e60b-11ef-91e0-d0abd5a4f6d2'),
(3, 'JWL003', 'Diamond Ring', 'Premium diamond ring for special occasions', 'ad8ebdf7-e60b-11ef-91e0-d0abd5a4f6d2'),
(4, 'JWL004', 'Pearl Earrings', 'Classic pearl earrings for timeless beauty', 'ad8ebdf7-e60b-11ef-91e0-d0abd5a4f6d2'),
(5, 'JWL005', 'Ruby Pendant', 'Ruby gemstone pendant symbolizing passion', 'ad8ecaca-e60b-11ef-91e0-d0abd5a4f6d2'),
(6, 'JWL006', 'Gold Bangle', 'Traditional gold bangle for cultural events', 'ad8ecaca-e60b-11ef-91e0-d0abd5a4f6d2'),
(7, 'JWL007', 'Ankle Chain', 'Delicate ankle chain for a stylish look', 'ad8ecaca-e60b-11ef-91e0-d0abd5a4f6d2'),
(8, 'JWL008', 'Luxury Brooch', 'Designer brooch with intricate detailing', 'ad8ecaca-e60b-11ef-91e0-d0abd5a4f6d2'),
(9, 'JWL009', 'Mens Cufflinks', 'Premium cufflinks for formal attire', 'ad8ed311-e60b-11ef-91e0-d0abd5a4f6d2'),
(10, 'JWL010', 'Royal Tiara', 'Exquisite tiara with embedded gemstones', 'ad8ed311-e60b-11ef-91e0-d0abd5a4f6d2');






CREATE TABLE metals (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL DEFAULT NULL
);

INSERT INTO metals (name) VALUES 
('Gold'),
('Silver'),
('Platinum'),
('Palladium'),
('Titanium');







CREATE TABLE metalPrices (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    metal_id INT NOT NULL,
    type INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL DEFAULT NULL,
    CONSTRAINT fk_metal FOREIGN KEY (metal_id) REFERENCES metals(id) ON DELETE CASCADE
);


INSERT INTO metalPrices (name, price, metal_id, type) VALUES 
('Gold 24K', 65.50, 1, 1),
('Silver 925', 1.25, 2, 2),
('Platinum Premium', 50.00, 3, 3),
('Palladium Pure', 45.80, 4, 4),
('Titanium Standard', 20.30, 5, 5);






CREATE TABLE jewelry (
    id INT PRIMARY KEY AUTO_INCREMENT,
    subtype INT NOT NULL, 
    title VARCHAR(255) NOT NULL,
    description TEXT,
    weight FLOAT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL DEFAULT NULL,
    CONSTRAINT fk_subtype FOREIGN KEY (subtype) REFERENCES jewelrySubType(id) ON DELETE CASCADE
);



INSERT INTO jewelry (subtype, title, description, weight) VALUES 
(1, 'Gold Necklace', 'A beautiful 24K gold necklace.', 15.5),
(2, 'Silver Ring', '925 Silver ring with diamond.', 3.2),
(3, 'Platinum Bracelet', 'Premium platinum bracelet.', 7.8),
(4, 'Palladium Earrings', 'Elegant palladium earrings.', 4.1),
(5, 'Titanium Watch', 'Strong and lightweight titanium watch.', 10.5);







CREATE TABLE jewelryMetaData (
    id INT PRIMARY KEY AUTO_INCREMENT,
    jewelry_id INT NOT NULL,
    image TEXT NOT NULL, -- Stores image URLs as comma-separated values
    natural_price FLOAT NOT NULL,
    lab_price FLOAT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL DEFAULT NULL,
    CONSTRAINT fk_jewelry FOREIGN KEY (jewelry_id) REFERENCES jewelry(id) ON DELETE CASCADE
);



INSERT INTO jewelryMetaData (jewelry_id, image, natural_price, lab_price) VALUES 
(1, '["gold_necklace1.jpg", "gold_necklace2.jpg"]', 2500.00, 1800.00),
(2, '["silver_ring1.jpg", "silver_ring2.jpg"]', 300.00, 200.00),
(3, '["platinum_bracelet1.jpg"]', 1200.00, 900.00),
(4, '["palladium_earrings1.jpg"]', 800.00, 600.00),
(5, '["titanium_watch1.jpg", "titanium_watch2.jpg"]', 1500.00, 1200.00);
