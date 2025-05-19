import { readFileSync } from "fs"
import { promedio, promedioMejorado } from "./helpers"

const archivo = readFileSync('./notas.txt', 'utf-8')

console.log("Promedio simple:", promedio(archivo))

const resultado = promedioMejorado(archivo)

console.log("Promedio mejorado:", resultado.promedio)
console.log("Estudiantes:", resultado.estudiantes)
console.log("Cantidad:", resultado.cantidadEstudiantes) 