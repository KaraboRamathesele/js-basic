
// Speed limit = 70 ==> \ Okay
// 5 -> 1 point for every 5 over the limit
// Use Math.floor()
// 12 > points -> suspended


checkSpeed(130);


function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) 
      return "Okay";
    else {
       const points = Math.floor((speed - speedLimit) / kmPerPoint);
       if (points >= 12)
         console.log("License suspended");
       else
         console.log("Points", points)
    }

}



