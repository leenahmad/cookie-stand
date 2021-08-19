'use strict';

let allcookie = [];
let container = document.getElementById('container');
// let myform = document.getElementById('myform');
// myform.addEventListener('submit' , addShop);
let tableEl = document.createElement('table');
container.appendChild(tableEl);
let openingHour = ['6am' , '7am', '8am', '9am', '10am', '11am', '12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


function Cookie(shop , min ,max, avr){
  this.shopName = shop;
  this.minCustPerHour = min;
  this.maxCustPerHour = max;
  this.avrCookisCustPerHour = avr;
  this.CustPerHour = [];
  this.cookiesPerHour = [];
  this.total =0;

  allcookie.push(this);
}
console.log(Cookie);
Cookie.prototype.getrandomNum = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);

};

// function addShop(event){
//   event.preventDefault();
//   let shopName = event.target.shopName.value;
//   let minCustPerHour = event.target.minCustPerHour.value;
//   let maxCustPerHour = event.target.maxCustPerHour.value;
//   let avrCookisCustPerHour = event.target.avrCookisCustPerHour.value;
//   let newShop = new Cookie(shopName,minCustPerHour,maxCustPerHour,avrCookisCustPerHour);
//   newShop.getCookiesPerHour();
//   newShop.render();
// }

// let tableLeg = tableEl.rows.length-1;
// tableEl.deleteRow(tableLeg);

console.log(addShop);
Cookie.prototype.getCookiesPerHour = function(){

  for(let i =0; i <openingHour.length; i++){
    this.CustPerHour.push(this.getrandomNum(this.minCustPerHour,this.maxCustPerHour));
    this.cookiesPerHour.push(Math.ceil(this.CustPerHour[i] * this.avrCookisCustPerHour));
    this.total += this.cookiesPerHour[i];

  }
};

Cookie.prototype.render = function(){
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);


  let tdEl1 = document.createElement('td');
  trEl.appendChild(tdEl1);
  tdEl1.textContent = this.shopName;

  for(let i =0; i <openingHour.length; i++){
    let tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2.textContent = this.cookiesPerHour[i];

  }
  let tdEl3 = document.createElement('td');
  trEl.appendChild(tdEl3);
  tdEl3.textContent = this.total;
};



function createTableHeader(){
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  let thEl1 = document.createElement('th');
  trEl.appendChild(thEl1);
  thEl1.textContent = ' ';

  for(let i =0; i <openingHour.length; i++){
    let thEl2 = document.createElement('th');
    trEl.appendChild(thEl2);
    thEl2.textContent = openingHour[i];

  }

  let thEl6 = document.createElement('th');
  trEl.appendChild(thEl6);
  thEl6.textContent = 'Daily Location Total';
}
// let myform = document.getElementById('myform');
// myform.addEventListener('submit' , addShop);

// function addShop(event){
//   event.preventDefault();
//   let shopName = event.target.shopName.value;
//   let minCustPerHour = event.target.minCustPerHour.value;
//   let maxCustPerHour = event.target.maxCustPerHour.value;
//   let avrCookisCustPerHour = event.target.avrCookisCustPerHour.value;
//   let newShop = new Cookie(shopName,minCustPerHour,maxCustPerHour,avrCookisCustPerHour);

//   tableEl.deleteRow(tableLeg);
//   let tableLeg = tableEl.rows.length-1;
//   newShop.getCookiesPerHour();
//   newShop.render();

// }



function createTableFooter(){
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  let tdEl1 = document.createElement('td');
  trEl.appendChild(tdEl1);
  tdEl1.textContent = 'Total';

  let sumOfDailyTotal =0;
  for(let i =0; i < allcookie.length; i++){
    sumOfDailyTotal += allcookie[i].total;
  }

  for(let i = 0; i < openingHour.length; i++ ){
    let HourlyTotal=0;

    for( let j =0; j < allcookie.length; j++){
      HourlyTotal = HourlyTotal + allcookie[j].cookiesPerHour[i];

    }
    let tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);
    tdEl3.textContent = HourlyTotal;
  }
  let tdEl3 = document.createElement('td');
  trEl.appendChild(tdEl3);
  tdEl3.textContent = sumOfDailyTotal;

}
createTableHeader();

let myform = document.getElementById('myform');
myform.addEventListener('submit' , addShop);

function addShop(event){
  event.preventDefault();
  let shopName = event.target.shopName.value;
  let minCustPerHour = event.target.minCustPerHour.value;
  let maxCustPerHour = event.target.maxCustPerHour.value;
  let avrCookisCustPerHour = event.target.avrCookisCustPerHour.value;
  let newShop = new Cookie(shopName,minCustPerHour,maxCustPerHour,avrCookisCustPerHour);
  let tableLeg = tableEl.rows.length-1;
  tableEl.deleteRow(tableLeg);

  newShop.getCookiesPerHour();
  newShop.render();
  createTableFooter();
}



let Seattle = new Cookie('Seattel' , 23 , 65 , 6.3);
Seattle.getrandomNum(23,56);
Seattle.getCookiesPerHour();
Seattle.render();

let Tokyo = new Cookie('Tokyo', 3 , 42 , 1.3);
Tokyo.getCookiesPerHour();
Tokyo.getrandomNum();
Tokyo.render();

let Dubai = new Cookie('Dubai' , 11, 38, 3.7);
Dubai.getrandomNum(11,38);
Dubai.getCookiesPerHour();
Dubai.render();

let Paris = new Cookie('Paris' , 20, 38, 2.3);
Paris.getrandomNum(11,38);
Paris.getCookiesPerHour();
Paris.render();

let Lima = new Cookie('Lima' , 2, 16, 4.6);
Lima.getrandomNum(11,38);
Lima.getCookiesPerHour();
Lima.render();

 createTableFooter();
console.log(allcookie);

