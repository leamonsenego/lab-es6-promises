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

const boilWater = (param1, param2, param3, param4) => {
  setTimeout(() => {
    createPotatoesItem(mashedPotatoes[0]);
    param1(param2, param3, param4);
  }, 1000);
};

const openBagAndMixFunc = (param1, param2, param3) => {
  setTimeout(() => {
    createPotatoesItem(mashedPotatoes[1]);
    param1(param2, param3);
  }, 1000);
};

const pourWater = (param1, param2) => {
  setTimeout(() => {
    createPotatoesItem(mashedPotatoes[2]);
    param1(param2);
  }, 1000);
};

const mix = (param1) => {
  setTimeout(() => {
    createPotatoesItem(mashedPotatoes[3]);
    param1();
  }, 1000);
};

const enjoy = () => {
  setTimeout(() => {
    createPotatoesItem(mashedPotatoes[4]);
  }, 1000);
};

const areReady = () => {
  setTimeout(() => {
    createPotatoesItem("The mashed potatoes are ready!");
  }, 1000);
};

const makeMashedPotatoes = (param1, param2, param3, param4, param5) => {
  param1(param2, param3, param4, param5);
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

obtainInstruction = (steak) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!steak[steak]) reject("No steak left. Error. Help. I'm hungry");
      else {
        createSteakItem(steak[steak]);
        resolve();
      }
    }, 1000);
  });
};

obtainInstruction(0)
  .then(() => obtainInstruction(1))
  .then(() => obtainInstruction(2))
  .then(() => obtainInstruction(3))
  .then(() => obtainInstruction(4))
  .then(() => obtainInstruction(5))
  .then(() => obtainInstruction(6))
  .then(() => obtainInstruction(7))
  .then(() => obtainInstruction(8))
  .then(() => console.log("The steak is ready!"))
  .catch((err) => console.log(err));

// Iteration 3 using async/await

// Function to create broccoli steps:

const broccoliList = document.getElementById("broccoli");

const createBroccoliItem = (param1) => {
  const item = document.createElement("li");
  item.innerHTML = param1;

  broccoliList.appendChild(item);
};

function obtainInstruction(broccoli) {
  return new Promise((resolve, reject) => {
    if (!broccoli[broccoli]) reject("Help. No broccoli. So sad.");
    else {
      createBroccoliItem(broccoli[broccoli]);
      resolve();
    }
  });
}

async function makeBroccoli() {
  await obtainInstruction(0);
  await obtainInstruction(1);
  await obtainInstruction(2);
  await obtainInstruction(3);
  await obtainInstruction(4);
  await obtainInstruction(5);
  await obtainInstruction(6);
  console.log("The broccoli is ready!");
}

makeBroccoli();

// Bonus 2 - Promise all
// ...
