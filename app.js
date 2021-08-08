//cookis per hour = numberOf customerperhour * avrcookiespercustomer
// avrcookiespercustomer == 6.3
// numberOf customerperhour with randomnumber in shihab

// getAge: function (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     this.age = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// },


let cookies = document.getElementById('Cookies');
let Seattle = {
  shopName : 'Seattle' ,
  minCustPerHour : 23 ,
  maxCustPerHour : 65 ,
  avrCookisCustPerHour : 6.3 ,
  openingHour : ['6am' , '7am', '8am', '9am', '10am', '11am', '12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

  total : 0,
  CustPerHour : [],
  cookiesPerHour : [],
  getrandomNum : function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getCookiesPerHour : function(){

    for(let i =0; i <this.openingHour.length; i++){

      this.CustPerHour.push(this.getrandomNum(this.minCustPerHour,this.maxCustPerHour));

      this.cookiesPerHour.push(Math.ceil(this.CustPerHour[i] * this.avrCookisCustPerHour));

      this.total += this.cookiesPerHour[i];

    }

  },

  render: function(){

    let h3El = document.createElement('h3');
    cookies.appendChild(h3El);
    h3El.textContent = this.shopName;
    let ulE = document.createElement('ul');
    cookies.appendChild(ulE);

    for(let i=0; i < this.cookiesPerHour.length; i++){
      let liE = document.createElement('li');
      liE.textContent = this.openingHour[i] + ':' + this.cookiesPerHour[i] + 'cookies';
      ulE.appendChild(liE);

    }
    let LiE = document.createElement('li');
    ulE.appendChild(LiE);
    LiE.textContent = 'total : ' + this.total + 'cookies';



  }
};


Seattle.getCookiesPerHour();
console.log(Seattle);
Seattle.render();



let Tokyo = {
  shopName : 'Tokyo' ,
  minCustPerHour : 3 ,
  maxCustPerHour : 24 ,
  avrCookisCustPerHour : 1.2 ,
  openingHour : ['6am' , '7am', '8am', '9am', '10am', '11am', '12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

  total : 0,
  CustPerHour : [],
  cookiesPerHour : [],

  getrandomNum : function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getCookiesPerHour : function(){

    for(let i =0; i <this.openingHour.length; i++){

      this.CustPerHour.push(this.getrandomNum(this.minCustPerHour,this.maxCustPerHour));

      this.cookiesPerHour.push(Math.ceil(this.CustPerHour[i] * this.avrCookisCustPerHour));

      this.total += this.cookiesPerHour[i];

    }

  },

  render: function(){

    let h3El = document.createElement('h3');
    cookies.appendChild(h3El);
    h3El.textContent = this.shopName;
    let ulE = document.createElement('ul');
    cookies.appendChild(ulE);

    for(let i=0; i < this.cookiesPerHour.length; i++){
      let liE = document.createElement('li');
      liE.textContent = this.openingHour[i] + ':' + this.cookiesPerHour[i] + 'cookies';
      ulE.appendChild(liE);

    }
    let LiE = document.createElement('li');
    ulE.appendChild(LiE);
    LiE.textContent = 'total : ' + this.total + 'cookies';



  }
};


Tokyo.getCookiesPerHour();
console.log(Tokyo);
Tokyo.render();


let Dubai = {
  shopName : 'Dubai' ,
  minCustPerHour :  11,
  maxCustPerHour : 38 ,
  avrCookisCustPerHour : 3.7 ,
  openingHour : ['6am' , '7am', '8am', '9am', '10am', '11am', '12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

  total : 0,
  CustPerHour : [],
  cookiesPerHour : [],

  getrandomNum : function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getCookiesPerHour : function(){

    for(let i =0; i <this.openingHour.length; i++){

      this.CustPerHour.push(this.getrandomNum(this.minCustPerHour,this.maxCustPerHour));

      this.cookiesPerHour.push(Math.ceil(this.CustPerHour[i] * this.avrCookisCustPerHour));

      this.total += this.cookiesPerHour[i];

    }

  },

  render: function(){

    let h3El = document.createElement('h3');
    cookies.appendChild(h3El);
    h3El.textContent = this.shopName;
    let ulE = document.createElement('ul');
    cookies.appendChild(ulE);

    for(let i=0; i < this.cookiesPerHour.length; i++){
      let liE = document.createElement('li');
      liE.textContent = this.openingHour[i] + ':' + this.cookiesPerHour[i] + 'cookies';
      ulE.appendChild(liE);

    }
    let LiE = document.createElement('li');
    ulE.appendChild(LiE);
    LiE.textContent = 'total : ' + this.total + 'cookies';



  }
};


Dubai.getCookiesPerHour();
console.log(Dubai);
Dubai.render();


let Paris = {
  shopName : 'Paris' ,
  minCustPerHour :  20,
  maxCustPerHour :  38,
  avrCookisCustPerHour : 3.7 ,
  openingHour : ['6am' , '7am', '8am', '9am', '10am', '11am', '12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

  total : 0,
  CustPerHour : [],
  cookiesPerHour : [],

  getrandomNum : function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getCookiesPerHour : function(){

    for(let i =0; i <this.openingHour.length; i++){

      this.CustPerHour.push(this.getrandomNum(this.minCustPerHour,this.maxCustPerHour));

      this.cookiesPerHour.push(Math.ceil(this.CustPerHour[i] * this.avrCookisCustPerHour));

      this.total += this.cookiesPerHour[i];

    }

  },

  render: function(){

    let h3El = document.createElement('h3');
    cookies.appendChild(h3El);
    h3El.textContent = this.shopName;
    let ulE = document.createElement('ul');
    cookies.appendChild(ulE);

    for(let i=0; i < this.cookiesPerHour.length; i++){
      let liE = document.createElement('li');
      liE.textContent = this.openingHour[i] + ':' + this.cookiesPerHour[i] + 'cookies';
      ulE.appendChild(liE);

    }
    let LiE = document.createElement('li');
    ulE.appendChild(LiE);
    LiE.textContent = 'total : ' + this.total + 'cookies';



  }
};


Paris.getCookiesPerHour();
console.log(Paris);
Paris.render();


let Lima = {
  shopName : 'Lima' ,
  minCustPerHour :  2,
  maxCustPerHour :  16,
  avrCookisCustPerHour : 4.6,
  openingHour : ['6am' , '7am', '8am', '9am', '10am', '11am', '12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

  total : 0,
  CustPerHour : [],
  cookiesPerHour : [],

  getrandomNum : function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getCookiesPerHour : function(){

    for(let i =0; i <this.openingHour.length; i++){

      this.CustPerHour.push(this.getrandomNum(this.minCustPerHour,this.maxCustPerHour));

      this.cookiesPerHour.push(Math.ceil(this.CustPerHour[i] * this.avrCookisCustPerHour));

      this.total += this.cookiesPerHour[i];

    }

  },

  render: function(){

    let h3El = document.createElement('h3');
    cookies.appendChild(h3El);
    h3El.textContent = this.shopName;
    let ulE = document.createElement('ul');
    cookies.appendChild(ulE);

    for(let i=0; i < this.cookiesPerHour.length; i++){
      let liE = document.createElement('li');
      liE.textContent = this.openingHour[i] + ':' + this.cookiesPerHour[i] + 'cookies';
      ulE.appendChild(liE);

    }
    let LiE = document.createElement('li');
    ulE.appendChild(LiE);
    LiE.textContent = 'total : ' + this.total + 'cookies';



  }
};


Lima.getCookiesPerHour();
console.log(Lima);
Lima.render();


