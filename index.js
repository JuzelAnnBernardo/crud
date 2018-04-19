// function eat(food, person) {
//   person.food = food;
//   console.log(person);
// }

// eat("burger", {
//   name: "Juzel"
// });
// const actions = {
//   async getUsers() {
//     return "test";
//   },
//   async getUser() {
//     return "test";
//   }
// };
// async function dispatch(name, payload) {
//   const action = actions[name];
//   console.log(action, name, payload);
//   return action(payload);
// }

// dispatch("getUsers", {
//   test: "test"
// });

// function addThenSubtract(num1, num2) {
//   const sum = num1 + num2;
//   console.log(sum);
//   const difference = sum - num2;
//   console.log(difference);
//   return difference;
// }

// addThenSubtract(6, 5);

// Function = What to do
// Name ano pangalan
// Arguments or Parameters

// function name(args) {}

// const marketingPerson = {
//   name: "Emman",
//   jobOrders: [
//     {
//       id: 1,
//       jobJacket: {
//         name: "Biogesic",
//         company: "Unilab",
//         film: "data:image",
//         unicode: "123",
//         type: "carton"
//       }
//     }
//   ]
// };
//const QAPerson = {
  //name: "Juzel",
  //jobJackets: []
//};

//function assignJobJacket(targetQA, jobJacket) {
//  console.log(targetQA, jobJacket)
//  targetQA.jobJackets.push(jobJacket)
//  console.log(targetQA, jobJacket)
//}
//const unangJobOrder = marketingPerson.jobOrders[0]
//console.log(unangJobOrder)
//assignJobJacket(QAPerson, unangJobOrder.jobJacket)