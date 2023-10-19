alert("Hi! happy to see you here! let's go to the questions ...")

// -----------1)Temperature------------

var temperature = prompt("1- please write the temperature here : ");
alert("you can see the result in the console! ")

if (temperature > 30) {
  console.log("It's a hot day!");
} else {
  console.log("It isn't too hot today!");
}

// -----------2)Grade range------------
var grade = prompt("2- What was your last grade in Math?");

if (grade >= 90) {
  console.log("You got an A!");
} else if (grade >= 80) {
  console.log("You got a B!");
}else if (grade >= 65){
     console.log("You got a C!");
} else {
  console.log("You got a grade below C :'(");
}

// -----------3)able to vote------------

var age = prompt("3- How old are you?");
var allowed = (age >= 18) ? "You can vote this year :) " : "You cannot vote this year :(";
console.log(allowed);

// -----------4)Say good ... ------------

var hour = prompt("4- What time is it?");

if (hour >= 6 && hour < 12) {
   console.log("%cGood morning!", "color:blue;");
} else if (hour >= 12 && hour < 17) {
   console.log("%cGood afternoon!", "color:red;");
} else if (hour >= 17 && hour < 20) {
   console.log("%cGood evening!", "color:orange;");
} else if (hour >= 20 && hour <= 24) {
   console.log("%cGood night!", "color:gray;");
} else if (hour >= 1 && hour < 6) {
   console.log("%cYou should go to bed and sleep!", "color:purple;");
} else {
   console.log("not available :(");
}

// -----------5)weater condition------------

var sunnyInput = prompt("5-a- Is it sunny today? (true or false)");
var windyInput = prompt("5-b- Is it windy today? (true or false)");

var isSunny = sunnyInput === "true";
var isWindy = windyInput === "true";

if (isSunny && !isWindy) {
  console.log("It's a great day for going out and enjoy! ^^");
} else if (isSunny && isWindy) {
  console.log("It's sunny but windy. Be careful! ~.~");
} else {
  console.log("Sorry! The weather isn't suitable for going out. :(");
}

// -----------6)fruit------------

var fruit = prompt("6- Which one? apple or banana ?");

if (fruit === "banana") {
  console.log("It's good for you especially if you on a diet!");
} else if (fruit === "apple") {
  console.log("Many doctors said that eat at least one apple in the morning!");
} else {
  console.log("Wrong answer!");
}

// -----------7)Is it weekend?------------

alert("7- Check the console to see today is weekend or not?!")
var today = new Date();
var dayOfWeek = today.getDay();

if (dayOfWeek === 0 || dayOfWeek === 6) {
  console.log("Finally! It's the weekend.");
} else {
  console.log("Uh... not weekend yet! Keep working :)))");
}

// -----------8)check the password------------

var userInput = prompt("8- Enter a password:");

if (userInput.length >= 6 && userInput.match(/\d/)) {
  console.log("Valid password format.");
} else {
  console.log("Invalid password format. your passwords must be at least 6 characters and contain at least one number.");
}

// -----------9)valid lenght of pass------------

var password = prompt("9- Enter another password:");
var strength = (password.length >= 8) ? "Strong" : "Weak";
console.log(strength);

// -----------10)valid email------------
var email = prompt("Enter your email address:");
var isValidEmail = (email.includes("@") && email.includes(".")) ? "Valid email" : "Invalid email";
alert(isValidEmail);

// --------------------------------------------------
// -------------------Switch-------------------------
// --------------------------------------------------

alert("Are you ready for ten more questions? ^^")

// -----------1)Animal------------

var animal = prompt("1- Which one is your favorite (cat, dog , bird) ?");

switch (animal) {
  case "cat":
  case "dog":
  case "bird":
    console.log("It's so lovely!*-* ");
    break;
  default:
    console.log("Not found.");
}

// -----------2)Animal------------

var score = prompt("2- What was your last grade in Art?");

switch (true) {
  case score >= 18:
    console.log("You got an A!");
    break;
  case score >= 16:
    console.log("You got a B!");
    break;
  default:
    console.log("You got a grade below B.");
}

// -----------3)browser------------

var browser = prompt("3- What is your browser? ");

switch (browser) {
  case "Chrome":
  case "Firefox":
  case "Safari":
    console.log("This website supports your browser.");
    break;
  default:
    console.log("Your browser is not fully supported.");
}

// -----------4)day of week------------
alert("4- Check the consol to see what day is today!")
let dayOfWeek = new Date().getDay();

switch (dayOfWeek) {
  case 0:
    console.log("It's Sunday.");
    break;
  case 6:
    console.log("It's Saturday.");
    break;
  default:
    console.log("It's a weekday.");
}

// -----------5)role------------

var userRole = prompt("5- Who are you? admin, manager or user?");

switch (userRole) {
  case "admin":
    console.log("You have full access to the system.");
    break;
  case "manager":
    console.log("You have limited access as a manager.");
    break;
  case "user":
    console.log("You have basic access as a regular user.");
    break;
  default:
    console.log("Your role is not recognized.");
}

// -----------6)student check------------

var age = prompt("6- How old are you?");
var isStudent = false;

switch (true) {
  case age >= 18 && age <= 24:
    if (isStudent) {
      console.log("You're a student between 18 and 24 years old.");
    } else {
      console.log("You're not a student, but you're in the 18-24 age group.");
    }
    break;
  case age > 24:
    console.log("You're older than 24.");
    break;
  default:
    console.log("You're under 18.");
}

// -----------7)favorite season------------

var season = prompt("7- What is your favorite season?");

season = season.toLowerCase();

switch (season) {
  case "fall":
    alert("fall is passionate.");
    break;
  case "winter":
    alert("winter is calming.");
    break;
  case "summer":
    alert("summer is the beauty of nature.");
    break;
  case "spring":
    alert("spring is cheerful");
    break;
  default:
    alert("I'm not familiar with that season!");
}

// -----------8)language------------

let userLanguage = prompt("8- Choose a language (en for English, per for persion):");

switch (userLanguage) {
  case "en":
    alert("You've selected English.");
    break;
  case "per":
    alert("Has seleccionado persion.");
    break;
  default:
    alert("Language not supported.");
}

// -----------9)language------------

var buttonPressed = prompt("9- Enter a media control (play, pause, stop):");

switch (buttonPressed) {
  case "play":
    alert("Play button pressed.");
    break;
  case "pause":
    alert("Pause button pressed.");
    break;
  case "stop":
    alert("Stop button pressed.");
    break;
  default:
    alert("Invalid button pressed.");
}

// -----------10)language------------

var grade1 = prompt("10- Enter your grade (A+, A, B+, B, C, ...):");

switch (grade1) {
  case "A+":
  case "A":
    alert("Excellent!");
    break;
  case "B+":
  case "B":
    alert("Good job.");
    break;
  case "C":
    alert("You passed, but there's room for improvement.");
    break;
  default:
    alert("You didn't meet the minimum requirements.");
}

alert("Thank you so much! check the console to see your answer result. ^^")












