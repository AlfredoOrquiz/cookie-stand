'use strict'

console.log("hello world!");
let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
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
  getRandomCustomers: function(min, max) {
    min = Math.ceil(this.min);
    max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesPerHour: function() {
      for (let i = 0; i < this.hours.length; i++){
        let hourlyCookie = Math.ceil(this.getRandomCustomers() * this.avg);
        this.hourly.push(`${this.hours[i]}: ${hourlyCookie} cookies.`);
        this.totalCookies += hourlyCookie;
        console.log(hourlyCookie);
      }
      this.hourly.push(`Total cookies: ${this.totalCookies}`);
      console.log(this.totalCookies);
    console.log(this.calcCookiesPerHour);
  },
  hourly: [
    
  ],
};
seattle.getRandomCustomers();
seattle.calcCookiesPerHour();
seattle.hourly;
console.log(seattle.hourly)

for (let i = 0; i < seattle.hourly.length; i++) {
  let li = document.createElement('li');
  li.textContent = `${seattle.hourly[i]}`;
  let list = document.createElement('ul');
  list.appendChild(li);
  let body = document.querySelector('body');
  body.textContent = "Seattle";
  body.appendChild(list);
  list.appendChild(li);
};

