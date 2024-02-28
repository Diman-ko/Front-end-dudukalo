
const cars = [
    {
        id: 23,
        name: 'Mus',
        year: 1966,
    },
    {
        id: 24,
        name: 'Mazda',
        year: 1956,
    },
    {
        id: 25,
        name: 'Mutsub',
        year: 1976,
    },
]

const carIds = cars.filter((car) => car.year > 1960).map((car) => car.id);
// carIds [23,25]
// ===================================================================================================
const carIds2 = cars.reduce((acc, car) => {
    if ( car.year > 1960) {
        acc.push(car.id)
    }
    return acc;
}, [])
carIds2
// ===================================================================================================
const carIds3 = [];
for (let i = 0; i < cars.length; i ++) {
 if(cars[i].year > 1960) {
     carIds3.push(cars[i].id)
 }
}

carIds3