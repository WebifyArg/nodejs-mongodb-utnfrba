const express = require('express');
const router = express.Router();

router.get('/productos', (req, res) => {
    res.send('Productos desde la BD');
})

module.exports = router;