const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) => {
     //return `${name} is ${value} ${measurementUnit} apart from the Sun`
     setTimeout(() => {
         console.log(name, value);
          console.log( `${name} is ${value} ${measurementUnit} apart from the Sun`);
        }, value);//Com return não estava funcionando, O Zezé ficou de me responder
}
   

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 1000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 2000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 3000,
    measurementUnit: "kilometers",
  },
};

planetDistanceFromSun(mars); // A
//console.log(planetDistanceFromSun(venus)); // B
//console.log(planetDistanceFromSun(jupiter)); // C