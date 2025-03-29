
const Alumno = require('../models/alumno');

exports.createAlumno = async (req, res) => {
    try {
    const alumno = await Alumno.create(req.body);
    res.status(201).json(alumno);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

exports.getAlumnos = async (req, res) => {
    try {
    const alumnos = await Alumno.findAll();
    res.json(alumnos);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};
