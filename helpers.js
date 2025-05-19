"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promedio = promedio;
exports.promedioMejorado = promedioMejorado;
function promedio(archivo) {
    var _a;
    var suma = 0;
    var cantidad = 0;
    for (var _i = 0, _b = archivo.split('\n'); _i < _b.length; _i++) {
        var linea = _b[_i];
        if (linea.trim() === '')
            continue;
        var partes = linea.split(',');
        var nota = Number((_a = partes[1]) === null || _a === void 0 ? void 0 : _a.trim());
        if (!isNaN(nota)) {
            suma += nota;
            cantidad++;
        }
    }
    return cantidad > 0 ? suma / cantidad : 0;
}
function promedioMejorado(archivo) {
    var linea = archivo
        .split('\n')
        .filter(function (linea) { return linea.trim() !== ''; });
    var suma = 0;
    var estudiante = [];
    for (var _i = 0, linea_1 = linea; _i < linea_1.length; _i++) {
        var lineas = linea_1[_i];
        var _a = lineas.split(','), nombre = _a[0], notaStr = _a[1];
        var nota = Number(notaStr === null || notaStr === void 0 ? void 0 : notaStr.trim());
        if (!isNaN(nota)) {
            estudiante.push(nombre.trim());
            suma += nota;
        }
    }
    return {
        promedio: estudiante.length > 0 ? suma / estudiante.length : 0,
        estudiantes: estudiante,
        cantidadEstudiantes: estudiante.length
    };
}
