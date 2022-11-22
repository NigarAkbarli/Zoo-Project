interface IAnimalsType {
  typeName: string;
  biome: string;
  reservoir: boolean;
  area: number;
  food: string;
  isPredator: boolean;
}
interface IAnimals extends IAnimalsType {
  name: string;
  age: number;
  amountOfFood: number;
}
interface ISettlement {
  animals: IAnimals[];
  biome: string;
  reservior: boolean;
  capacity: number;
  IsForPredator: boolean;
}
let giraffe1: IAnimals = {
  name: "Tiny",
  age: 2,
  amountOfFood: 3,
  typeName: "giraffe",
  biome: "forest",
  reservoir: true,
  area: 45,
  food: "leaves ",
  isPredator: false,
};
let giraffe2: IAnimals = {
  name: "Munchkin",
  age: 3,
  amountOfFood: 5,
  typeName: "giraffe",
  biome: "forest",
  reservoir: true,
  area: 45,
  food: "leaves ",
  isPredator: false,
};
let tiger1: IAnimals = {
  name: "Amber",
  age: 1,
  amountOfFood: 6,
  typeName: "tiger",
  biome: "forest",
  reservoir: false,
  area: 50,
  food: "meat ",
  isPredator: true,
};
let tiger2: IAnimals = {
  name: "Pearl",
  age: 3,
  amountOfFood: 10,
  typeName: "tiger",
  biome: "forest",
  reservoir: false,
  area: 50,
  food: "meat ",
  isPredator: true,
};
let panda: IAnimals = {
  name: "Oreo",
  age: 1,
  amountOfFood: 10,
  typeName: "panda",
  biome: "forest",
  reservoir: true,
  area: 60,
  food: "bamboo ",
  isPredator: false,
};

let cageForTiger: ISettlement = {
  animals: [],
  biome: "forest",
  reservior: false,
  capacity: 3,
  IsForPredator: true,
};

function checkCageForTiger(animal: IAnimals, cage: ISettlement) {
  let count: number = 0;
  if (
    animal.reservoir == cage.reservior &&
    animal.biome == cage.biome &&
    animal.isPredator == cage.IsForPredator
  ) {
    for (let i = 0; i < cage.animals.length; i++) {
      count += 1;
      
    }
    if (cage.capacity > count) {
      cage.animals.push(animal);
    } else {
      console.log("There is no empty space in this cage!");
    }
  } else {
    console.log(`This cage is not available for  '${animal.name}'  animal`);
  }
}
function ShowAllNamesInCage(cage: ISettlement) {
  for (let i = 0; i < cage.animals.length; i++) {
    console.log(cage.animals[i].name);
  }
}
checkCageForTiger(giraffe1, cageForTiger);
checkCageForTiger(giraffe2, cageForTiger);
checkCageForTiger(tiger1, cageForTiger);
checkCageForTiger(tiger2, cageForTiger);
checkCageForTiger(panda, cageForTiger);

ShowAllNamesInCage(cageForTiger);
