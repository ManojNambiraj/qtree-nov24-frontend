// Promise

// async function demo() {
//   const myPromise = new Promise(function (resolve, reject) {
//     let x = 50;

//     if (x == 0) {
//       resolve("Okay");
//     } else {
//       reject("Something went wrong");
//     }
//   });

//   let result = await myPromise
//     .then((data) => {
//       return data;
//     })
//     .catch((err) => {
//       return err;
//     });

//     console.log(result);
// }

// demo()

// Event Listeners:

// onclick
// onchange

let your_bank_balance = 0;
let temp;

function handleChange(event) {
  temp = event.target.value;
}

const handleDeposite = () => {
  your_bank_balance += Number(temp);

  document.getElementsByTagName("h1")[0].innerText = your_bank_balance;
};

const handleWithdraw = () => {
  your_bank_balance -= Number(temp);

  document.getElementsByTagName("h1")[0].innerText = your_bank_balance;
};
