"use strict";

tryGetRideShare( 20,true, getFundsAvailible());

function getFundsAvailible (){
    let moneyInAccount = prompt ("How much is in the account");
    let creditsInAccount= parseFloat("How much is in the account"));
    return moneyInAccount + creditsInAccount;
}

    /*
    let numbOfRiders;
    if (confirm("Are you splitting the ride with someone else?")){
        numbOfRiders = prompt ("How many additional Riders do you have?");
    }

}


function tryGetRideShare(costOfRide, driverAvailable, totalFundsAvail){
// don't know how much the ride is going to be -done
// don't know if the driver is ready/near -done
// money sources? -
// how much money is available -done

    if (driverAvailable && totalFundsAvail >= costOfRide){
        console.log("Your ride is on the way");
    } else {
        console.log("No drivers are available.");
    }
    if (numbOfRiders){

    }
}

*/