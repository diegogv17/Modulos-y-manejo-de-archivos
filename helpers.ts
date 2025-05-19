export interface Resultado {
  promedio: number;
  estudiantes: string[];
  cantidadEstudiantes: number;
}

export function promedio(archivo:string): number {
    let suma:number = 0
    let cantidad:number = 0
    for (const linea of archivo.split('\n')) {
      if (linea.trim() === '') continue
      const partes = linea.split(',');
      const nota = Number(partes[1]?.trim())

      if (!isNaN(nota)) {
        suma += nota
        cantidad++
      }
    }
    return cantidad > 0 ? suma / cantidad : 0;
}

export function promedioMejorado(archivo:string): Resultado {
    const linea = archivo
    .split('\n')
    .filter(linea => linea.trim() !== '')
    let suma:number  = 0
    let estudiante: string [] = []

    for (const lineas of linea) {
    const [nombre, notaStr] = lineas.split(',')
    const nota = Number(notaStr?.trim())

    if (!isNaN(nota)) {
      estudiante.push(nombre.trim());
      suma += nota;
    }
}
    return {
      promedio: estudiante.length > 0 ? suma / estudiante.length : 0,
      estudiantes: estudiante,
      cantidadEstudiantes: estudiante.length
    }
}