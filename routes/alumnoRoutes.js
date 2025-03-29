
const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController');

router.post('/', alumnoController.createAlumno);
router.get('/', alumnoController.getAlumnos);

module.exports = router;
