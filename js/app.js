//List of hotel names stored in hotels variable
let hotels = ['Sayeman Beach Hotel', 'Hotel Sea Crown', 'Long Beach Hotel',
  'Windy Terrace Boutique Hotel', 'Hotel The Cox Today']
//List of resort names stored in resorts variable
let resorts = ['Royal Tulip Sea Pearl Beach Resort & Spa', 'Mermaid Beach Resort',
'Grace Cox Smart Hotel & Resort', 'Ocean Paradise Hotel & Resort', 'Praasad Paradise Resort & Hotel']


//Welcoming section----
//'guestName' variable stores the data from HTML using 'gName' ID, which is used as for input purposes
const guestName = document.getElementById('gName');
//'guestCountry' variable stores the data from HTML using 'gCountry' ID, which is used for user input purposes
const guestCountry = document.getElementById('gCountry');
//'welcomeButton' variable stores the data from HTML using 'btn3' ID, so I can use it in my script
const welcomeButton = document.getElementById('btn3');

//Created a 'createP2' function, which will execute the following tasks once it's called upon
//'message' in 'createP2' function is a parameter that acts as a placeholder which holds the value passed into the function once it's called
function createP2(message) {
  //'welcomeDiv' variable stores newly crated 'div' element that can be added in the HTML
  let welcomeDiv = document.createElement('div'); //Created a Div
  //'wel-div' is a newly created class to the 'div' element
  //'wel-div' can be used for styling in style.css
  welcomeDiv.classList.add('wel-div');//Div class named wel-div

  //'welcomeP' variable stores newly created 'p' element within 'div' element
  let welcomeP = document.createElement('p');//Created p-tag within Div
  //'welcome' is a newly created class to the 'p' element that can be used for styling in style.css
  welcomeP.classList.add('welcome');//Created a class for p-tag
  //'message' parameter will be entered within the newly created 'welcomeP' element of 'div' as HTML content
  welcomeP.innerHTML = message;
  //Once 'welcomeP' gets the 'message' parameter, it is then added to the 'welcomeDiv', which is a 'div' element
  welcomeDiv.appendChild(welcomeP);
  //Newly created 'welcomeDiv' element needs to be added to the body of the HTML file
  document.body.appendChild(welcomeDiv);
}

//'welcomeButton' will listen to 'btn3' once it is clicked and execute what is inside the callback function
welcomeButton.addEventListener('click', function(){
  //'removeEl3' is a variable that stores a collection of all Div elements with the 'wel-div' class
  let removeEl3 = document.getElementsByClassName('wel-div');
  //Using the spread operator [...], convert the HTML collection into an array
  //Then using the forEach loop, it removes each element from the DOM
  //DOM is the Data Object Model, which, in other words, is a 'map' that JavaScript uses to read or modify the page
  [...removeEl3].forEach(el => el.remove());

  //It's an 'if' clause that checks the given condition, whether it meets the criteria or not
  //If it fulfills the condition, it returns output as stated in 'createP2' function
  //'guestName.value.trim()' and 'guestCountry.value.trim()' take the values from the corresponding text fields 'gName' and 'gCountry'
  //After trimming, if both 'gName' and 'gCountry' are empty, it will send the following prompt
  //'createP2' is a function that processes the request once 'welcomeButton' executes its callback function
  if(!guestName.value.trim() && !guestCountry.value.trim()) { //.trim will eliminate any spaces
    createP2('<b><i>Please ENTER your Name and Country you are from.</i></b>')
  }
  //Else, it returns the below output
  //This returns 'message' parameter to 'createP2' function to execute the request
  else {
    createP2('Welcome <b><i>' + guestName.value + '</i></b>!') //<b><i> are used to make the Bold and Italic
    createP2('We are really thrilled to know that you are coming all the way from <b><i>' + guestCountry.value + '</i></b> to visit our amazing beach!')
    createP2('It’s an honor to have you here.')
    createP2('We sincerely hope you have a pleasant experience.')
  }
})

//Availability of Room section
//'roomAccom' variable stores the size of the room as a list
const roomAccom = [1,2,3,4]
//'numGuests' variable stores the data from HTMl using 'nGuest' ID, which is used input purposes
const numGuests = document.getElementById('nGuest')
//'tNGuest' variable stores the data from HTML using 'btn2' ID, so I can use it in my script
const tNGuest = document.getElementById('btn2')

//Created a 'gQuantity' function, which will execute the following tasks once it's called upon
//'num_val' in 'gQuantity' function is a parameter that acts as a placeholder which holds the value passed into the function once it's called
function gQuantity(num_val) {
  //'Number(num_val)' - 'num-val' parameter will be converted to number and will be stored in 'num1' variable
  let num1 = Number(num_val);
  //'roomFound' variable is used as a Flag for the following 'if' condition
  let roomFound = false; //This is used as a flag to check the condition

  //For loop will run as per the length of 'roomAccom' which was previously declared
  for (let i = 0; i < roomAccom.length; i++) {
    //'if' clause checks if value of 'num1' is less than or equal to value of 'roomAccom' at 'i' position
    if (num1 <= roomAccom[i]) {
      //If condition is fulfilled, following statement will be displayed
      createP1('We have a nice room for - <b><i>' + num_val + '</i></b> - guests')
      //Previously declared 'roomFound' flag will set to 'true' which was initially set as 'false' and then 'break' the loop
      roomFound = true;
      break;
    }
  }
  //If roomFound is false, following message will be displayed
  if(!roomFound){
    createP1('I am afraid, we are unable to accommodate this many guests in a single room.');
  }
}

//Created a 'createP1' function, which will execute the following tasks once it's called upon
//'number' in 'createP1' function is a parameter that acts as a placeholder which holds the value passed into the function once it's called
function createP1(number) {
  //'tGuest' variable stores newly crated 'div' element that can be added in the HTML
  let tGuest = document.createElement('div'); //Created a Div
  //'guest-number' is a newly created class to the 'div' element
  //'guest-number' can be used for styling in style.css
  tGuest.classList.add('guest-number');//guest-number is a class of a created div

  //'totalGuest' variable stores newly created 'p' element within 'div' element
  let totalGuest = document.createElement('p'); //Created p-tag within Div
  //'gsnumber' is a newly created class to the 'p' element that can be used for styling in style.css
  totalGuest.classList.add('gsnumber');//gsnumber is a class of a child paragraph
  //'number' parameter will be entered within the newly created 'totalGuest' element of 'div' as HTML content
  totalGuest.innerHTML = number;
  //Once 'totalGuest' gets the 'message' parameter, it is then added to the 'tGuest', which is a 'div' element
  tGuest.appendChild(totalGuest);
  //Newly created 'tGuest' element needs to be added to the body of the HTML file
  document.body.appendChild(tGuest);
}

//'tNGuest' will listen to 'btn2' once it is clicked and execute what is inside the callback function
tNGuest.addEventListener('click', function(){
  //'removeEl2' is a variable that stores a collection of all Div elements with the 'guest-number' class
  let removeEl2 = document.getElementsByClassName('guest-number');
  //Using the spread operator [...], convert the HTML collection into an array
  //Then using the forEach loop, it removes each element from the DOM
  //DOM is the Data Object Model, which, in other words, is a 'map' that JavaScript uses to read or modify the page
  [...removeEl2].forEach(el => el.remove());

  //I used 'if-else' condition to display correct output
  //!numGuests.value.trim() - it will check if the user entered any input or not
  //trim() removes the spaces
  //Depending on which condition meets the requirement, string in createP1 will be displayed
  if(!numGuests.value.trim()) {
    createP1('<b><i>Please ENTER total number of guests</i></b>')
  }
  else {
    createP1('<b><i><u>Availability of Room</u></i></b>')
    //This returns 'numGuests' parameter to 'gQuantity' function to execute the request
    gQuantity(numGuests.value);
  }
})

//Hotel - Resort Section
//'accomm' variable stores the data from HTMl using 'accom' ID
let accomm = document.getElementById('accom')
//'availPoss' variable stores the number of rooms available as a list
const availPoss = [1,2,3,4,5,6,7,8,9,10,11]
//'hrButton' variable stores the data from HTML using 'btn2' ID, so I can use it in my script
const hrButton = document.getElementById('btn1')

//Created a 'accomAvail' function, which will execute the following tasks once it's called upon
//'accomAvail' function can take parameters ('hCh' and 'rCh') those acts as a placeholder which holds the value passed into the function once it's called
function accomAvail(hCh, rCh) {
  //If there is no parameter given then the following message will be displayed
  //'createP' is a function which will be executed when it is called upon
  if(!hCh && !rCh) {
    createP('Please select an option')
    return;
  }

  //'for loop' will run as per the length of hotels variable. Number of 'hotels' and 'resorts' are sames. Therefore, I choose just hotels length
  for (let i = 0; i < hotels.length; i++) {

    //If both or one of the parameter is given then whichever condition fulfills will display corresponding message.
    //Math.floor(Math.random() * availPoss.length) is used to get random number of available rooms
    if(hCh && rCh) {
      createP(hotels[i] + ' - available rooms - <b><i>' + Math.floor(Math.random() * availPoss.length) + '</i></b>')
      createP(resorts[i] + ' - available rooms - <b><i>' + Math.floor(Math.random() * availPoss.length) + '</i></b>')
    }
    else if(hCh) {
      createP(hotels[i] + ' - available rooms - <b><i>' + Math.floor(Math.random() * availPoss.length) + '</i></b>')
    }
    else {
      createP(resorts[i] + ' - available rooms - <b><i>' + Math.floor(Math.random() * availPoss.length) + '</i></b>')
    }
  }
}

//Created a 'createP' function, which will execute the following tasks once it's called upon
//'string' in 'createP' function is a parameter that acts as a placeholder which holds the value passed into the function once it's called
function createP(string) {
  //'childP' variable stores newly created 'p' element within 'div' element
  let childP = document.createElement('p');
  //'accom-avail' is a newly created class to the 'p' element that can be used for styling in style.css
  childP.classList.add('accom-avail'); //accom-avail is a class of child paragraph
  //'string' parameter will be entered within the newly created 'childP' element of 'div' as HTML content
  childP.innerHTML = string;
  //Once 'childP' gets the 'string' parameter, it is then added to the 'accomm', which is a 'div' element
  accomm.appendChild(childP);
}

//'hrButton' will listen to 'btn1' once it is clicked and execute what is inside the callback function
hrButton.addEventListener('click', function(){
  //'hotelCh' and 'resortCh' are two variables those store values from 'check1' and 'check2' IDs
  //'.checked' - it returns true if it is checked else false
  let hotelCh = document.getElementById('check1').checked;
  let resortCh = document.getElementById('check2').checked;

  //'removeEl1' is a variable that stores a collection of all Div elements with the 'accom-avail' class
  let removeEl1 = document.getElementsByClassName('accom-avail');
  //Using the spread operator [...], convert the HTML collection into an array
  //Then using the 'forEach' loop, it removes each element from the DOM
  //DOM is the Data Object Model, which, in other words, is a 'map' that JavaScript uses to read or modify the page
  [...removeEl1].forEach((el) => el.remove());

  //Once 'btn1' button is clicked 'hrButton' event listener will execute the callback function
  //Within the function, 'createP' and 'accomAvail' functions are called
  //'createP' function will print the below message
  //'accomAvail' function will take the inputs in 'hotelCh' and 'resortCh' and executes
  createP('<b><i><u>Hotel - Resort Section</u></i></b>')
  accomAvail(hotelCh, resortCh);
})
