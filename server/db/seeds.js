import { Db } from "mongodb";

use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    { name: "Chuck Berry", email:"chuck@berry.com", checkedIn:false},
    { name: "Buddy Holly", email:"buddy@holly.com", checkedIn:false}

]);