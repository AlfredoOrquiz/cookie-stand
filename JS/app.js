'use strict'

console.log("hello world!");
let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  totalCookies: 0,
  hours: ['6 am',
          '7 am',
          '8 am',
          '9 am',
          '10 am',
          '11 am',
          '12 am',
          '1 pm',
          '2 pm',
          '3 pm',
          '4 pm',
          '5 pm',
          '6 pm',
          '7 pm',
         ],
  randomCustomers: function() {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
      for (let i = 0; i < this.hours.length; i++) {
        let hourlyCookie = Math.ceil(this.randomCustomers() * this.avgCookies);
        this.hourly.push(`${this.hours[i]}: ${hourlyCookie} cookies.`);
        this.totalCookies += hourlyCookie;
        console.log(hourlyCookie);
      }
      this.hourly.push(`Total cookies: ${this.totalCookies} cookies.`);
      console.log(this.totalCookies);
    console.log(this.cookiesPerHour);
  },
  hourly: [
    
  ],
};
seattle.randomCustomers();
seattle.cookiesPerHour();
seattle.hourly;
console.log(seattle.hourly)

let seattleBody = document.querySelector('body');
let seattleH3 = document.createElement('h3');
seattleH3.textContent = seattle.name;
seattleBody.appendChild(seattleH3);
let seattleList = document.createElement('ul');
for (let i = 0; i < seattle.hourly.length; i++) {
  let li = document.createElement('li');
  li.textContent = `${seattle.hourly[i]}`;
  seattleList.appendChild(li);
};
seattleBody.appendChild(seattleList);

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookies: 6.3,
  totalCookies: 0,
  hours: ['6 am',
          '7 am',
          '8 am',
          '9 am',
          '10 am',
          '11 am',
          '12 am',
          '1 pm',
          '2 pm',
          '3 pm',
          '4 pm',
          '5 pm',
          '6 pm',
          '7 pm',
         ],
  randomCustomers: function(){
    return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
    for (let i = 0; i < this.hours.length; i++) {
      let hourlyCookie = Math.ceil(this.randomCustomers() * this.avgCookies);
      this.hourly.push(`${this.hours[i]}: ${hourlyCookie} cookies`);
      this.totalCookies += hourlyCookie;
      console.log(hourlyCookie);
    }
    this.hourly.push(`Total cookies: ${this.totalCookies} cookies.`);
    console.log(this.totalCookies);
    console.log(this.cookiesPerHour);
  },
  hourly: [

  ],
};

tokyo.randomCustomers();
tokyo.cookiesPerHour();
tokyo.hourly;
console.log(tokyo.hourly);

let tokyoBody = document.querySelector('body');
let tokyoH3 = document.createElement('h3');
tokyoH3.textContent = tokyo.name;
tokyoBody.appendChild(tokyoH3);
let tokyoList = document.createElement('ul');
for (let i = 0; i < tokyo.hourly.length; i++) {
  let li = document.createElement('li');
  li.textContent = `${tokyo.hourly[i]}`;
  tokyoList.appendChild(li);
};
tokyoBody.appendChild(tokyoList);





let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookies: 6.3,
  totalCookies: 0,
  hours: ['6 am',
          '7 am',
          '8 am',
          '9 am',
          '10 am',
          '11 am',
          '12 am',
          '1 pm',
          '2 pm',
          '3 pm',
          '4 pm',
          '5 pm',
          '6 pm',
          '7 pm',
         ],
  randomCustomers: function(){
    return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
    for (let i = 0; i < this.hours.length; i++) {
      let hourlyCookie = Math.ceil(this.randomCustomers() * this.avgCookies);
      this.hourly.push(`${this.hours[i]}: ${hourlyCookie} cookies`);
      this.totalCookies += hourlyCookie;
      console.log(hourlyCookie);
    }
    this.hourly.push(`Total cookies: ${this.totalCookies} cookies.`);
    console.log(this.totalCookies);
    console.log(this.cookiesPerHour);
  },
  hourly: [

  ],
};

dubai.randomCustomers();
dubai.cookiesPerHour();
dubai.hourly;
console.log(dubai.hourly);

let dubaiBody = document.querySelector('body');
let dubaiH3 = document.createElement('h3');
dubaiH3.textContent = dubai.name;
dubaiBody.appendChild(dubaiH3);
let dubaiList = document.createElement('ul');
for (let i = 0; i < dubai.hourly.length; i++) {
  let li = document.createElement('li');
  li.textContent = `${dubai.hourly[i]}`;
  dubaiList.appendChild(li);
};
dubaiBody.appendChild(dubaiList);

let paris = {
  name: 'Paris',
  minCust: 3,
  maxCust: 24,
  avgCookies: 6.3,
  totalCookies: 0,
  hours: ['6 am',
          '7 am',
          '8 am',
          '9 am',
          '10 am',
          '11 am',
          '12 am',
          '1 pm',
          '2 pm',
          '3 pm',
          '4 pm',
          '5 pm',
          '6 pm',
          '7 pm',
         ],
  randomCustomers: function(){
    return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
    for (let i = 0; i < this.hours.length; i++) {
      let hourlyCookie = Math.ceil(this.randomCustomers() * this.avgCookies);
      this.hourly.push(`${this.hours[i]}: ${hourlyCookie} cookies`);
      this.totalCookies += hourlyCookie;
      console.log(hourlyCookie);
    }
    this.hourly.push(`Total cookies: ${this.totalCookies} cookies.`);
    console.log(this.totalCookies);
    console.log(this.cookiesPerHour);
  },
  hourly: [

  ],
};

paris.randomCustomers();
paris.cookiesPerHour();
paris.hourly;
console.log(paris.hourly);

let parisBody = document.querySelector('body');
let parisH3 = document.createElement('h3');
parisH3.textContent = paris.name;
parisBody.appendChild(parisH3);
let parisList = document.createElement('ul');
for (let i = 0; i < paris.hourly.length; i++) {
  let li = document.createElement('li');
  li.textContent = `${paris.hourly[i]}`;
  parisList.appendChild(li);
};
parisBody.appendChild(parisList);

let lima = {
  name: 'Lima',
  minCust: 3,
  maxCust: 24,
  avgCookies: 6.3,
  totalCookies: 0,
  hours: ['6 am',
          '7 am',
          '8 am',
          '9 am',
          '10 am',
          '11 am',
          '12 am',
          '1 pm',
          '2 pm',
          '3 pm',
          '4 pm',
          '5 pm',
          '6 pm',
          '7 pm',
         ],
  randomCustomers: function(){
    return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
    for (let i = 0; i < this.hours.length; i++) {
      let hourlyCookie = Math.ceil(this.randomCustomers() * this.avgCookies);
      this.hourly.push(`${this.hours[i]}: ${hourlyCookie} cookies`);
      this.totalCookies += hourlyCookie;
      console.log(hourlyCookie);
    }
    this.hourly.push(`Total cookies: ${this.totalCookies} cookies.`);
    console.log(this.totalCookies);
    console.log(this.cookiesPerHour);
  },
  hourly: [

  ],
};

lima.randomCustomers();
lima.cookiesPerHour();
lima.hourly;
console.log(lima.hourly);

let limaBody = document.querySelector('body');
let limaH3 = document.createElement('h3');
limaH3.textContent = lima.name;
limaBody.appendChild(limaH3);
let limaList = document.createElement('ul');
for (let i = 0; i < lima.hourly.length; i++) {
  let li = document.createElement('li');
  li.textContent = `${lima.hourly[i]}`;
  limaList.appendChild(li);
};
limaBody.appendChild(limaList);

