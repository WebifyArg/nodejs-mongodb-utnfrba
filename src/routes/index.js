const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Inicio');
});

router.get('/nosotros', (req, res) => {
    res.send('Nosotros');
})

module.exports = router;