// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/* getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  1,
  (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  2,
  (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  3,
  (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  4,
  (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error)
); */

// Iteration 1 - using callbacks

// Function to create the steps:

const mashedPotatoesList = document.getElementById("mashedPotatoes");

const createPotatoesItem = (param1) => {
  const item = document.createElement("li");
  item.innerHTML = param1;

  mashedPotatoesList.appendChild(item);
};

// Nested callbacks to make the mashed potatoes:

const boilWater = (param1, param2, param3, param4, param5) => {
  setTimeout(() => {
    createPotatoesItem(mashedPotatoes[0]);
    param1(param2, param3, param4, param5);
  }, 1000);
};

const openBagAndMixFunc = (param1, param2, param3, param4) => {
  setTimeout(() => {
    createPotatoesItem(mashedPotatoes[1]);
    param1(param2, param3, param4);
  }, 1000);
};

const pourWater = (param1, param2, param3) => {
  setTimeout(() => {
    createPotatoesItem(mashedPotatoes[2]);
    param1(param2, param3);
  }, 1000);
};

const mix = (param1, param2) => {
  setTimeout(() => {
    createPotatoesItem(mashedPotatoes[3]);
    param1(param2);
  }, 1000);
};

const enjoy = (param1) => {
  setTimeout(() => {
    createPotatoesItem(mashedPotatoes[4]);
    param1();
  }, 1000);
};

const areReady = () => {
  setTimeout(() => {
    createPotatoesItem("The mashed potatoes are ready!");
  }, 1000);
};

const makeMashedPotatoes = (param1, param2, param3, param4, param5, param6) => {
  param1(param2, param3, param4, param5, param6);
};

makeMashedPotatoes(
  boilWater,
  openBagAndMixFunc,
  pourWater,
  mix,
  enjoy,
  areReady
);

// Iteration 2 - using promises

// Function to create the steps:

const steakList = document.getElementById("steak");

const createSteakItem = (param1) => {
  const item = document.createElement("li");
  item.innerHTML = param1;

  steakList.appendChild(item);
};

// Promise to make the steak recipe:

obtainInstruction("steak", 0)
  .then((result) => {
    createSteakItem(result);
    return obtainInstruction("steak", 1);
  })
  .then((result) => {
    createSteakItem(result);
    return obtainInstruction("steak", 2);
  })
  .then((result) => {
    createSteakItem(result);
    return obtainInstruction("steak", 3);
  })
  .then((result) => {
    createSteakItem(result);
    return obtainInstruction("steak", 4);
  })
  .then((result) => {
    createSteakItem(result);
    return obtainInstruction("steak", 5);
  })
  .then((result) => {
    createSteakItem(result);
    return obtainInstruction("steak", 6);
  })
  .then((result) => {
    createSteakItem(result);
    return obtainInstruction("steak", 7);
  })
  .then((result) => {
    createSteakItem(result);
    return null;
  })
  .then(() => {
    console.log("test");
    createSteakItem("The steak is ready!");
  })
  .catch((err) => console.log(err));

// Iteration 3 using async/await

// Function to create broccoli steps:

const broccoliList = document.getElementById("broccoli");

const createBroccoliItem = (param1) => {
  const item = document.createElement("li");
  item.innerHTML = param1;

  broccoliList.appendChild(item);
};

async function makeBroccoli() {
  const result1 = await obtainInstruction("broccoli", 0);
  createBroccoliItem(result1);
  const result2 = await obtainInstruction("broccoli", 1);
  createBroccoliItem(result2);
  const result3 = await obtainInstruction("broccoli", 2);
  createBroccoliItem(result3);
  const result4 = await obtainInstruction("broccoli", 3);
  createBroccoliItem(result4);
  const result5 = await obtainInstruction("broccoli", 4);
  createBroccoliItem(result5);
  const result6 = await obtainInstruction("broccoli", 5);
  createBroccoliItem(result6);
  const result7 = await obtainInstruction("broccoli", 6);
  createBroccoliItem(result7);
  createBroccoliItem("The broccoli is ready!");
}

makeBroccoli();

// Bonus 2 - Promise all
// ...
