import readline from "node:readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//import archivo ordenador.js
import sortArray from "./ordenador.js";

//validación
const validCoordinates = (lat, lon) => {
  return lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
};

const areValidNumbers = (lat, lon) => {
  return !isNaN(lat) && !isNaN(lon);
};

// convierte input de readline a número
const convertToNumber = (latInput, lonInput) => {
  return {
    lat: parseFloat(latInput),
    lon: parseFloat(lonInput),
  };
};

//procesar la entrada y mostrar resultado
const showResult = (isValid) => {
  console.log(isValid ? "Valid coordinates" : "Invalid coordinates");
};

//arreglo vacio para guardar coordenadas
let coordinatesArray = [];
// contador para cantidas de coordenadas
let count = 0;
const maxCount = 5;

const handleInput = (latInput, lonInput) => {
  const { lat, lon } = convertToNumber(latInput, lonInput);

  if (!areValidNumbers(lat, lon)) {
    console.log("Please enter valid numbers.");
  } else {
    showResult(validCoordinates(lat, lon));
    coordinatesArray.push({ lat, lon });
  }
  count++;
  if (count < maxCount) {
    getCoordinates();
  } else {
    rl.close();
    const sorted = sortArray(coordinatesArray);
    console.log("Sorted coordinates:", sorted);
  }
};

// Solo pide los datos
const getCoordinates = () => {
  rl.question("Enter latitude: ", (latInput) => {
    rl.question("Enter longitude: ", (lonInput) => {
      handleInput(latInput, lonInput);
    });
  });
};

//ejecución
getCoordinates();
