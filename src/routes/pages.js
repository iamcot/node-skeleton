import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('homepage');
});

router.get('/about', (req, res, next) => {
    res.send('about me');
});


export default router;