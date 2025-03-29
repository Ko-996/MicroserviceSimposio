
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Alumno = sequelize.define('registro_alumnos', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    carnet_carrera: { type: DataTypes.STRING(5), allowNull: false },
    carnet_ano: { type: DataTypes.STRING(2), allowNull: false },
    carnet_serie: { type: DataTypes.STRING(8), allowNull: false },
    primer_nombre: { type: DataTypes.STRING(20), allowNull: false },
    segundo_nombre: { type: DataTypes.STRING(20), allowNull: true },
    primer_apellido: { type: DataTypes.STRING(20), allowNull: false },
    segundo_apellido: { type: DataTypes.STRING(20), allowNull: true },
    telefono: { type: DataTypes.STRING(15), allowNull: true },
    correo_electronico: { type: DataTypes.STRING(100), unique: true, allowNull: false },
    fecha_nacimiento: { type: DataTypes.DATEONLY, allowNull: false },
    fecha_registro: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    timestamps: false,
    freezeTableName: true
});

Alumno.sync()
    .then(() => console.log('Tabla registro_alumnos sincronizada'))
    .catch(err => console.error('Error al sincronizar:', err));

module.exports = Alumno;