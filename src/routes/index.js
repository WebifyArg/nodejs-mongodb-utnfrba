const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //res.send('Inicio');
    res.render('index');
});

router.get('/nosotros', (req, res) => {
    //res.send('Nosotros');
    res.render('nosotros');
})

module.exports = router;