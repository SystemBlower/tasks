const workers = [
  { name: "John", salary: 500 },
  { name: "Mike", salary: 1300 },
  { name: "Linda", salary: 1500 },
  { name: "Ronda", salary: 1800 },
  { name: "John", salary: 1450 },
  { name: "Bill", salary: 1200 }
  
];

const getWorthyWorkers = (workersArr) => {
  const worthyWorkers = [];

  // for (let i = 0; i < workersArr.length; i++) {
  //   const currentWorker = workersArr[i];

  //   if (currentWorker.salary > 1000) {
  //     worthyWorkers.push(currentWorker.name);
  //   }
  // }
  
  workersArr.forEach(currentWorker => {
    if (currentWorker.salary > 1000) {
      worthyWorkers.push(currentWorker.name)
    }
  })

  return worthyWorkers;
};

console.log(getWorthyWorkers(workers));