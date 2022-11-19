// Import stylesheets
import './style.css';

/*************** #1 *************************/
const example1 = () => {
  // let r1 = 0;
  for (var i = 0; i < 3; i++) {
    // r1 += i;
    setTimeout(() => {
      console.log('ex1: ', i);
    }, 1000 + i);
    // return r1;
  }
};

// 3, 3, 3

// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `
//   <div class="hide">${ex1}</div>
// `;

/*************** #2 *************************/
const example2 = () => {
  // let r2 = 0;
  for (let i = 0; i < 3; i++) {
    // r2 += i;
    setTimeout(() => {
      console.log('ex2: ', i);
    }, 1000 + i);
  }
  // return r2;
};

// 0, 1, 2

const ex1 = example1();
const ex2 = example2();

// 3, 3, 3, 0, 1, 2
// 3, 0, 3, 1, 3, 2

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
  <div>${ex1}</div>
  <div>${ex2}</div>
`;
