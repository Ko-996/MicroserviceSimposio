
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());

//archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Importar y usar las rutas del microservicio
const alumnoRoutes = require('./routes/alumnoRoutes');
app.use('/alumnos', alumnoRoutes);

// Ruta principal
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
console.log(`Microservicio corriendo en http://localhost:${PORT}`);
});