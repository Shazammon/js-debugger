console.log("Hello Debuggers!")

document.addEventListener('DOMContentLoaded', function() {
  //added "e" above - not sure if this is right
  console.log("Let's learn how to debug.");

  let x = 2;
  let result = Math.pow(x, x); //expects 2^2 equals 4
  console.log("Got", result, "Expected 4");

  let y = 4;
  let result2 = y + x; //expect 4 + 2 equals 6
  console.log("Got", result2, "Expected 6");

  let z = { width: 5, height: 7};
  console.log("z is ", z.width, "inches wide."); //expect "z is 5 inches wide"
//changed from .getWidth()

  let q = 100;
  if(q > 50) {
    console.log("q is a big number") //this is what should print to the console
  } else{
    console.log("q is less than 50 dawg")
  };

  let amount = 13;
  console.log(amount + 13); //should print out 26

  const num = 37;
  if(num === 5){
    console.log("My num is", num); //This should not get printed since num is "37"
  }

  let jackson = "dope dude";
  if(typeof jackson === 'string'){
    console.log("jackson is a", jackson);//should print "jackson is a dope dude", which is true
  }

  let actorOfTheCentury = "Nicolas Cage";
  console.log(actorOfTheCentury, "is a God of excellence and beauty"); //should print "Nicolas Cage is a God of excellence and beauty" which is also true.

  let bestMovieEver = 'American Treasure';
  console.log(bestMovieEver);//should print "American Treasure"


  document.getElementById("finish").innerText = "YOU'RE ALL DONE!!";
});
