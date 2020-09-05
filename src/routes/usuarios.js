const express = require('express');
const router = express.Router();

router.get('/usuarios/acceder', (req, res) => {
    //res.send('Acceso a Usuarios');
    res.render('usuarios/login')
});

router.get('/usuarios/registro', (req, res) => {
    //res.send('Registro de Usuarios');
    res.render('usuarios/registro')
});

module.exports = router;