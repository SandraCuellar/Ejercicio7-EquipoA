// Devuelve una array con los equipos asignados a personas mayores de esa edad
const equiposMayoresEdad = (equipos, edadComparacion) =>
  equipos.filter((equipo) => equipo.asignado.empleado.edad > edadComparacion);

// Devuelve un array con los equipos asignados a personas de esa provincia
const equiposProvincia = (equipos, provincia) =>
  equipos.filter(
    (equipo) =>
      equipo.asignado.provincia.toLowerCase() === provincia.toLowerCase()
  );

// Devuelve una array de provincias donde haya equipos NO SE REPITEN las provincias
const provincias = (equipos) =>
  Array.from(new Set(equipos.map((equipo) => equipo.asignado.provincia)));

// Devuelve una array de puestos de trabajadores con equipo asignado
const puestos = (equipos) => Array.from (new Set(equipos.map ((equipo) => equipo.asignado.empleado.puesto)));



// Devuelve la media de edad de trabajadores con equipo asignado
const edadMedia = (equipos) => {};

// Devuelve los equipos ordenados por edad de trabajadores con equipo asignado
const equiposPorEdad = (equipos) => {};

// Devuelve los equipos de ese tipo
const equiposTipo = (equipos, tipo) => {};

// Devuelve los trabajadores con equipo del equipo asignado
const trabajadoresTipo = (equipos, tipo) => {};

// Devuelve una array de equipos organizados por tipos y de la forma puesta en el ejercicio (mirar el git del profesor)
const equiposPorTipo = (equipos) => {
  const tipos = Array.from(new Set(equipos.map((equipo) => equipo.tipo)));

  const tiposObjeto = [];

  for (const contador in tipos) {
    tiposObjeto.push({
      tipo: tipos[contador],
      equipos: equipos.filter((equipo) => equipo.tipo === tipos[contador]),
    });
  }

  return tiposObjeto;
};

// devuelve un array de equipos del tipo especificado y asignados a trabajadores de esa provincia
const equiposTipoLocalidad = (equipos, tipo, localidad) =>
  equipos.filter(
    (equipo) =>
      equipo.tipo.toLowerCase() === tipo.toLowerCase() &&
      equipo.asignado.poblacion.toLowerCase() === localidad.toLowerCase()
  );

// Devuelve un array de objetos con la forma especificada (mirar git profesor)
const resumenEquipos = (equipos) => {};
