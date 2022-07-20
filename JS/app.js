'use strict'

console.log("hello world!");

// 1.- Create a function constructor that will call the variables on each city
// 2.- Crete keys values for each variable
// 3.- Create a method (a method is a function within an object)
// 4.- Create a body of a city with a table, with a table row, with a table data.



// Create a body with a city
// Create a method (a method is a function within a body).
// Create a Table and throw it into the body
// Create a TR (Table Row) and throw it into the table
// Create TD (Table Data's) and throw it into the TR
let seattleBody = document.querySelector('body');
let seattleMainList = document.getElementById('SeattleSales');

let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am',
'12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

function City(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.totalCookies = 0;

  this.randomCustomers = function() {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };

  this.cookiesPerHour = function() {
      for (let i = 0; i < hours.length; i++) {
        let hourlyCookie = Math.ceil(this.randomCustomers() * this.avgCookies);
        this.hourly.push(hourlyCookie);
        this.totalCookies += hourlyCookie;
        console.log(hourlyCookie);
      }
      this.hourly.push(`Total cookies: ${this.totalCookies} cookies.`);
      console.log(this.totalCookies);
    console.log(this.cookiesPerHour);
  };

  this.hourly = [

  ];

  this.renderTable = function() {
    this.cookiesPerHour();
    let tableBody = document.querySelector('tBody');
    let tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);
    let tableData = document.createElement('td');
    tableData.textContent = this.name;
    tableRow.appendChild(tableData);
    // Make a "for" loop for the hourly
    for (let i = 0; i < hours.length; i++) {
      let hourlyData = document.createElement('td');
      hourlyData.textContent = this.hourly[i];
      tableRow.appendChild(hourlyData);
    }
  };
};

let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);

seattle.renderTable();
tokyo.renderTable();
dubai.renderTable();
paris.renderTable();
lima.renderTable();

seattle.randomCustomers();
seattle.cookiesPerHour();
seattle.hourly;
console.log(seattle.hourly)


// let seattleH3 = document.createElement('h3');
// seattleH3.textContent = seattle.name;
// seattleBody.appendChild(seattleH3);
// let seattleList = document.createElement('ul');
// for (let i = 0; i < seattle.hourly.length; i++) {
//   let li = document.createElement('li');
//   li.textContent = `${seattle.hourly[i]}`;
//   seattleList.appendChild(li);
// };
// seattleBody.appendChild(seattleList);

// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookies: 6.3,
//   totalCookies: 0,
//   hours: ['6 am',
//           '7 am',
//           '8 am',
//           '9 am',
//           '10 am',
//           '11 am',
//           '12 am',
//           '1 pm',
//           '2 pm',
//           '3 pm',
//           '4 pm',
//           '5 pm',
//           '6 pm',
//           '7 pm',
//          ],
//   randomCustomers: function(){
//     return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookiesPerHour: function() {
//     for (let i = 0; i < this.hours.length; i++) {
//       let hourlyCookie = Math.ceil(this.randomCustomers() * this.avgCookies);
//       this.hourly.push(`${this.hours[i]}: ${hourlyCookie} cookies`);
//       this.totalCookies += hourlyCookie;
//       console.log(hourlyCookie);
//     }
//     this.hourly.push(`Total cookies: ${this.totalCookies} cookies.`);
//     console.log(this.totalCookies);
//     console.log(this.cookiesPerHour);
//   },
//   hourly: [

//   ],
// };

// tokyo.randomCustomers();
// tokyo.cookiesPerHour();
// tokyo.hourly;
// console.log(tokyo.hourly);

// let tokyoBody = document.querySelector('body');
// let tokyoH3 = document.createElement('h3');
// tokyoH3.textContent = tokyo.name;
// tokyoBody.appendChild(tokyoH3);
// let tokyoList = document.createElement('ul');
// for (let i = 0; i < tokyo.hourly.length; i++) {
//   let li = document.createElement('li');
//   li.textContent = `${tokyo.hourly[i]}`;
//   tokyoList.appendChild(li);
// };
// tokyoBody.appendChild(tokyoList);





// let dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookies: 6.3,
//   totalCookies: 0,
//   hours: ['6 am',
//           '7 am',
//           '8 am',
//           '9 am',
//           '10 am',
//           '11 am',
//           '12 am',
//           '1 pm',
//           '2 pm',
//           '3 pm',
//           '4 pm',
//           '5 pm',
//           '6 pm',
//           '7 pm',
//          ],
//   randomCustomers: function(){
//     return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookiesPerHour: function() {
//     for (let i = 0; i < this.hours.length; i++) {
//       let hourlyCookie = Math.ceil(this.randomCustomers() * this.avgCookies);
//       this.hourly.push(`${this.hours[i]}: ${hourlyCookie} cookies`);
//       this.totalCookies += hourlyCookie;
//       console.log(hourlyCookie);
//     }
//     this.hourly.push(`Total cookies: ${this.totalCookies} cookies.`);
//     console.log(this.totalCookies);
//     console.log(this.cookiesPerHour);
//   },
//   hourly: [

//   ],
// };

// dubai.randomCustomers();
// dubai.cookiesPerHour();
// dubai.hourly;
// console.log(dubai.hourly);

// let dubaiBody = document.querySelector('body');
// let dubaiH3 = document.createElement('h3');
// dubaiH3.textContent = dubai.name;
// dubaiBody.appendChild(dubaiH3);
// let dubaiList = document.createElement('ul');
// for (let i = 0; i < dubai.hourly.length; i++) {
//   let li = document.createElement('li');
//   li.textContent = `${dubai.hourly[i]}`;
//   dubaiList.appendChild(li);
// };
// dubaiBody.appendChild(dubaiList);

// let paris = {
//   name: 'Paris',
//   minCust: 3,
//   maxCust: 24,
//   avgCookies: 6.3,
//   totalCookies: 0,
//   hours: ['6 am',
//           '7 am',
//           '8 am',
//           '9 am',
//           '10 am',
//           '11 am',
//           '12 am',
//           '1 pm',
//           '2 pm',
//           '3 pm',
//           '4 pm',
//           '5 pm',
//           '6 pm',
//           '7 pm',
//          ],
//   randomCustomers: function(){
//     return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookiesPerHour: function() {
//     for (let i = 0; i < this.hours.length; i++) {
//       let hourlyCookie = Math.ceil(this.randomCustomers() * this.avgCookies);
//       this.hourly.push(`${this.hours[i]}: ${hourlyCookie} cookies`);
//       this.totalCookies += hourlyCookie;
//       console.log(hourlyCookie);
//     }
//     this.hourly.push(`Total cookies: ${this.totalCookies} cookies.`);
//     console.log(this.totalCookies);
//     console.log(this.cookiesPerHour);
//   },
//   hourly: [

//   ],
// };

// paris.randomCustomers();
// paris.cookiesPerHour();
// paris.hourly;
// console.log(paris.hourly);

// let parisBody = document.querySelector('body');
// let parisH3 = document.createElement('h3');
// parisH3.textContent = paris.name;
// parisBody.appendChild(parisH3);
// let parisList = document.createElement('ul');
// for (let i = 0; i < paris.hourly.length; i++) {
//   let li = document.createElement('li');
//   li.textContent = `${paris.hourly[i]}`;
//   parisList.appendChild(li);
// };
// parisBody.appendChild(parisList);

// let lima = {
//   name: 'Lima',
//   minCust: 3,
//   maxCust: 24,
//   avgCookies: 6.3,
//   totalCookies: 0,
//   hours: ['6 am',
//           '7 am',
//           '8 am',
//           '9 am',
//           '10 am',
//           '11 am',
//           '12 am',
//           '1 pm',
//           '2 pm',
//           '3 pm',
//           '4 pm',
//           '5 pm',
//           '6 pm',
//           '7 pm',
//          ],
//   randomCustomers: function(){
//     return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookiesPerHour: function() {
//     for (let i = 0; i < this.hours.length; i++) {
//       let hourlyCookie = Math.ceil(this.randomCustomers() * this.avgCookies);
//       this.hourly.push(`${this.hours[i]}: ${hourlyCookie} cookies`);
//       this.totalCookies += hourlyCookie;
//       console.log(hourlyCookie);
//     }
//     this.hourly.push(`Total cookies: ${this.totalCookies} cookies.`);
//     console.log(this.totalCookies);
//     console.log(this.cookiesPerHour);
//   },
//   hourly: [

//   ],
// };

// lima.randomCustomers();
// lima.cookiesPerHour();
// lima.hourly;
// console.log(lima.hourly);

// let limaBody = document.querySelector('body');
// let limaH3 = document.createElement('h3');
// limaH3.textContent = lima.name;
// limaBody.appendChild(limaH3);
// let limaList = document.createElement('ul');
// for (let i = 0; i < lima.hourly.length; i++) {
//   let li = document.createElement('li');
//   li.textContent = `${lima.hourly[i]}`;
//   limaList.appendChild(li);
// };
// limaBody.appendChild(limaList);



