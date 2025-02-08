const jwt = require('jsonwebtoken');

const JWT_SECRET = 'b73f1a6d89e03e5c6c74c5d2c30b58b82d3e81e7fae2ff6d16ff805b13e5f9b8';

const admins = [
    { email: 'john.doe@example.com', password: 'hashed_password_1' },
    { email: 'jane.smith@example.com', password: 'hashed_password_2' },
    { email: 'alice.johnson@example.com', password: 'hashed_password_3' },
    { email: 'bob.brown@example.com', password: 'hashed_password_4' },
    { email: 'charlie.white@example.com', password: 'hashed_password_5' },
    { email: 'emily.davis@example.com', password: 'hashed_password_6' },
    { email: 'daniel.wilson@example.com', password: 'hashed_password_7' },
    { email: 'sophia.martinez@example.com', password: 'hashed_password_8' },
    { email: 'ethan.thomas@example.com', password: 'hashed_password_9' },
    { email: 'mia.hernandez@example.com', password: 'BSaNCAd5nmkmP1Uk' }
];

// Generate tokens
admins.forEach(admin => {
    const token = jwt.sign(
        { email: admin.email, password: admin.password },
        JWT_SECRET,
        { expiresIn: '30d' } // 1 month validity
    );

    console.log(`${admin.email} -> Token: ${token}`);
});
