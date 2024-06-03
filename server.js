const express = require('express');
const cors = require('cors');


const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());


const mockToken = 'aaf25bf10da57d3abd2a4fb652436327da5cf8ad6c664328'
const mockUser = {
    id: 1,
    name: 'Apirak Ba',
    email: 'admin@admin.com',
};

router.get('/me', (req, res) => {
    // req.headers.authorization // Bearer <TOKEN>

    const headers = req.headers.authorization;
    const token = headers && headers.split(' ')[1]

    if (token === mockToken) {
        return res.json({
            user: mockUser
        })
    } else {
        return res.status(401).json({ message: 'Invalid token'});
    }
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === 'admin@admin.com' && password === '1234') {
        return res.json({
            user: mockUser,
            token: mockToken
        });
    } else {
        return res.status(401).json({ message: 'Invalid password'});
    }
});

app.use('/api', router);

app.listen(3001, () => {
    console.log('Running at port 3001');
});