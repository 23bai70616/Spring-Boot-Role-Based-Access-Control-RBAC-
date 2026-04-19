-- Test Accounts:
-- 1. admin1 / password
-- 2. user1 / password
-- 3. admin / admin
-- 4. user / user

INSERT INTO users (username, password, role) VALUES
('admin1', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ROLE_ADMIN'),
('user1', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ROLE_USER'),
('admin', '$2a$10$hKDVYxLefVhv/Ltu6zHwZOfJj.9fuLsjLdogmJy1OTnknwMUX80DW', 'ROLE_ADMIN'),
('user', '$2a$10$E2UPv7arXmp3q66zV63F7OTKI/ot9BCnLpz9Yf.WkMWU6yY35H48W', 'ROLE_USER');

