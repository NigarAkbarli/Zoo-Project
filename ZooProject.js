var giraffe1 = {
    name: "Tiny",
    age: 2,
    amountOfFood: 3,
    typeName: "giraffe",
    biome: "forest",
    reservoir: true,
    area: 45,
    food: "leaves ",
    isPredator: false
};
var giraffe2 = {
    name: "Munchkin",
    age: 3,
    amountOfFood: 5,
    typeName: "giraffe",
    biome: "forest",
    reservoir: true,
    area: 45,
    food: "leaves ",
    isPredator: false
};
var tiger1 = {
    name: "Amber",
    age: 1,
    amountOfFood: 6,
    typeName: "tiger",
    biome: "forest",
    reservoir: false,
    area: 50,
    food: "meat ",
    isPredator: true
};
var tiger2 = {
    name: "Pearl",
    age: 3,
    amountOfFood: 10,
    typeName: "tiger",
    biome: "forest",
    reservoir: false,
    area: 50,
    food: "meat ",
    isPredator: true
};
var panda = {
    name: "Oreo",
    age: 1,
    amountOfFood: 10,
    typeName: "panda",
    biome: "forest",
    reservoir: true,
    area: 60,
    food: "bamboo ",
    isPredator: false
};
var cageForTiger = {
    animals: [],
    biome: "forest",
    reservior: false,
    capacity: 3,
    IsForPredator: true
};
function checkCageForTiger(animal, cage) {
    var count = 0;
    if (animal.reservoir == cage.reservior &&
        animal.biome == cage.biome &&
        animal.isPredator == cage.IsForPredator) {
        for (var i = 0; i < cage.animals.length; i++) {
            count += 1;
        }
        if (cage.capacity > count) {
            cage.animals.push(animal);
        }
        else {
            console.log("There is no empty space in this cage!");
        }
    }
    else {
        console.log("This cage is not available for  '".concat(animal.name, "'  animal"));
    }
}
function ShowAllNamesInCage(cage) {
    for (var i = 0; i < cage.animals.length; i++) {
        console.log(cage.animals[i].name);
    }
}
checkCageForTiger(giraffe1, cageForTiger);
checkCageForTiger(giraffe2, cageForTiger);
checkCageForTiger(tiger1, cageForTiger);
checkCageForTiger(tiger2, cageForTiger);
checkCageForTiger(panda, cageForTiger);
ShowAllNamesInCage(cageForTiger);
