let hotels = ['Sayeman Beach Hotel', 'Hotel Sea Crown', 'Long Beach Hotel',
  'Windy Terrace Boutique Hotel', 'Hotel The Cox Today']
let resorts = ['Royal Tulip Sea Pearl Beach Resort & Spa', 'Mermaid Beach Resort',
'Grace Cox Smart Hotel & Resort', 'Ocean Paradise Hotel & Resort', 'Praasad Paradise Resort & Hotel']


//Welcoming section
const guestName = document.getElementById('gName');
const guestCountry = document.getElementById('gCountry');
const welcomeButton = document.getElementById('btn3');

function createP2(message) {
  let welcomeDiv = document.createElement('div'); //Created a Div
  welcomeDiv.classList.add('wel-div');//Div class named wel-div

  let welcomeP = document.createElement('p');//Created p-tag within Div
  welcomeP.classList.add('welcome');//Created a class for p-tag
  welcomeP.innerHTML = message;
  welcomeDiv.appendChild(welcomeP);
  document.body.appendChild(welcomeDiv);
}

welcomeButton.addEventListener('click', function(){
  let removeEl3 = document.getElementsByClassName('wel-div');
  [...removeEl3].forEach(el => el.remove());

  if(!guestName.value.trim() && !guestCountry.value.trim()) { //.trim will eliminate any space
    createP2('<b><i>Please ENTER your Name and Country you are from.</i></b>')
  }
  else {
    createP2('Welcome <b><i>' + guestName.value + '</i></b>!')
    createP2('We are really thrilled to know that you are coming all the way from <b><i>' + guestCountry.value + '</i></b> to visit our amazing beach!')
    createP2('It’s an honor to have you here.')
    createP2('We sincerely hope you have a pleasant experience.')
  }
})

//Availability of Room section
const roomAccom = [1,2,3,4]
const numGuests = document.getElementById('nGuest')
const tNGuest = document.getElementById('btn2')

function gQuantity(num_val) {
  let num1 = Number(num_val);
  let roomFound = false; //This is used as a flag to check the condition

  for(let i = 0; i < roomAccom.length; i++) {
    if(num1 <= roomAccom[i]) {
      createP1('We have a nice room for - <b><i>' +  num_val + '</i></b> - guests')
      roomFound = true;
      break;
    }
  }
  if(!roomFound) {
    createP1('We do not have available room for - <b><i>' +  num_val + '</i></b> - guests')
  }
}

function createP1(number) {
  let tGuest = document.createElement('div');
  tGuest.classList.add('guest-number');//guest-number is a class of a created div

  let totalGuest = document.createElement('p');
  totalGuest.innerHTML = number;
  totalGuest.classList.add('gsnumber');//gsnumber is a class of a child paragraph
  tGuest.appendChild(totalGuest);
  document.body.appendChild(tGuest);
}

tNGuest.addEventListener('click', function(){
  let removeEl2 = document.getElementsByClassName('guest-number');
  [...removeEl2].forEach(el => el.remove());

  if(!numGuests.value.trim()) {
    createP1('<b><i>Please ENTER total number of guests</i></b>')
  }
  else {
    createP1('<b><i><u>Availability of Room</u></i></b>')
    gQuantity(numGuests.value);
  }
})


//Hotel - Resort Section
let accomm = document.getElementById('accom')
const availPoss = [1,2,3,4,5,6,7,8,9,10,11]
const hrButton = document.getElementById('btn1')

function accomAvail(hCh, rCh) {

  if(!hCh && !rCh) {
    createP('Please select an option')
    return;
  }

  for (let i = 0; i < hotels.length; i++) {

    if(hCh && rCh) {
      createP(hotels[i] + ' - available places - <b><i>' + Math.floor(Math.random() * availPoss.length) + '</i></b>')
      createP(resorts[i] + ' - available places - <b><i>' + Math.floor(Math.random() * availPoss.length) + '</i></b>')
    }
    else if(hCh) {
      createP(hotels[i] + ' - available places - <b><i>' + Math.floor(Math.random() * availPoss.length) + '</i></b>')
    }
    else {
      createP(resorts[i] + ' - available places - <b><i>' + Math.floor(Math.random() * availPoss.length) + '</i></b>')
    }
  }
}

function createP(string) {
  let childP = document.createElement('p');
  childP.innerHTML = string;
  childP.classList.add('accom-avail'); //accom-avail is a class of child paragraph
  accomm.appendChild(childP);
}

hrButton.addEventListener('click', function(){
  let hotelCh = document.getElementById('check1').checked;
  let resortCh = document.getElementById('check2').checked;

  let removeEl1 = document.getElementsByClassName('accom-avail');
  [...removeEl1].forEach((el) => el.remove());

  createP('<b><i><u>Hotel - Resort Section</u></i></b>')
  accomAvail(hotelCh, resortCh);
})
