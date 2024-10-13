const express = require('express');
const path = require('path');
const fs = require('fs');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;
const crypto = require('crypto');

// Use Helmet to help secure Express apps with various HTTP headers
app.use(helmet());

// Rate limiting to prevent DDoS attacks
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Data sanitization against XSS
app.use(xss());

// Prevent HTTP Parameter Pollution
app.use(hpp());

// Enable CORS
app.use(cors({
    origin: 'https://thcavendordirectory.thsite.top', // Allow only specific origin
    methods: ['GET', 'POST'], // Allow only specific methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow only specific headers
}));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the vendor.html file
app.get('/vendor', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'vendor.html'));
});

// Serve vendor data from best_weed.txt
app.get('/api/vendors', (req, res) => {
    fs.readFile(path.join(__dirname, 'best_weed.txt'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading vendor data');
            return;
        }
        const vendors = data.split('\n').filter(line => line.trim() !== '');
        res.json(vendors);
    });
});

// Update Content Security Policy to include 'unsafe-eval' in script-src
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; frame-src 'self' https://thcavendordirectory.thsite.top; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';");
    next();
});

// Function to generate a secure token
function generateRememberMeToken() {
    return crypto.randomBytes(64).toString('hex');
}

// Function to hash the token
function hashToken(token) {
    return crypto.createHash('sha256').update(token).digest('hex');
}

// Example of setting a secure cookie
function setRememberMeCookie(res, token) {
    res.cookie('rememberMe', token, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: true,
        secure: true, // Ensure this is true in production
        sameSite: 'Strict'
    });
}

// Example of verifying the token
function verifyRememberMeToken(req, db) {
    const token = req.cookies.rememberMe;
    if (!token) return false;

    const hashedToken = hashToken(token);
    // Check the hashed token against the database
    return db.findUserByRememberMeToken(hashedToken);
}

// Example of invalidating the token
function invalidateRememberMeToken(userId, db) {
    db.removeRememberMeToken(userId);
}

// Usage
app.post('/login', (req, res) => {
    const user = authenticateUser(req.body.username, req.body.password);
    if (user) {
        const token = generateRememberMeToken();
        const hashedToken = hashToken(token);
        db.saveRememberMeToken(user.id, hashedToken);
        setRememberMeCookie(res, token);
        res.redirect('/dashboard');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Use app.listen instead of http.listen
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});