type Grupo ={
    nombre: string;
    ano: number;
    activo: boolean;
    genero: string;
};

const POP_ROCK = "Pop Rock";
const ROCK = "Rock";
const HARD_ROCK = "Hard Rock";
const CLASICA = "Clásica";

const theBeatles = {
  nombre: "The Beatles",
  ano: 1960,
  activo: true,
  genero: POP_ROCK,
};

const queen = {
  nombre: "Queen",
  ano: 1970,
  activo: false,
  genero: ROCK,
};

const acdc = {
  nombre: "AC DC",
  ano: 1973,
  activo: true,
  genero: HARD_ROCK,
};

const beethoven = {
  nombre: "Ludwig van Beethoven",
  ano: 1770,
  activo: false,
  genero: CLASICA,
};

const rollingStones = {
  nombre: "The Rolling Stones",
  ano: 1962,
  activo: true,
  genero: ROCK,
};

const grupos = [theBeatles, queen, acdc, beethoven, rollingStones];

function imprimirGrupo(grupo: Grupo) {

  const estiloNombre = "color: red; font-size: 18px; font-style: italic;";

  console.log("%c" + grupo.nombre, estiloNombre);
  console.log(`Año de fundación: ${grupo.ano}`);
  console.log(`Activo: ${grupo.activo}`);
  console.log(`Género: ${grupo.genero}`);
  console.log("— — —"); 
}

grupos.forEach(imprimirGrupo);
