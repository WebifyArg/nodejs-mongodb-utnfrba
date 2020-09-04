const express = require('express');
const router = express.Router();

router.get('/usuarios/acceder', (req, res) => {
    res.send('Acceso a Usuarios');
});

router.get('/usuarios/registro', (req, res) => {
    res.send('Registro de Usuarios');
});

module.exports = router;