const express = require('express');
const { fromPairs } = require('lodash');
const lodash = require('lodash');

const externalModule = require('../logger/logger')
const externalModule2 = require('../util/helper')
const externalModule3 = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {

    externalModule.welcome()
    externalModule2.printDate()
    externalModule2.printMonth()
    externalModule2.getBatchInfo()
    externalModule3.trim()
    externalModule3.changetoLowerCase()
    externalModule3.changetoUpperCase()
});

router.get('/hello', function (req, res) {
    // chunk function
    let arr1 = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
    console.log(lodash.chunk(arr1,3))


    // tail function
    let arr2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    console.log(lodash.tail(arr2))


    // union function
    console.log(lodash.union([1, 9, 4, 7], [11, 19, 14, 17], [2, 7, 17, 15], [12, 19, 16, 4], [3, 9, 16, 21]))


    // fromPairs function
    console.log(lodash.fromPairs([["horror", "The Shining"], ["drama","Titanic"],["thriller", "Shutter Island"], ["fantasy", "Pans Labyrinth"]]))
    
    
    
    res.send("4th  assignment")
})



router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
  
    let total = 0;
    for (var i in arr) {
        total = total + arr[i];
    }
  
    let lastDigit= arr.pop()
    let consecutiveSum= lastDigit * (lastDigit+1) / 2
    let missingNumber= consecutiveSum - total
  
    res.send(  { data: missingNumber  }  );
  });

  


router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
   let len= arr.length
 
   let total = 0;
   for (var i in arr) {
       total += arr[i];
   }
 
   let firstDigit= arr[0]
   let lastDigit= arr.pop()
   let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
   let missingNumber= consecutiveSum - total
  
   res.send(  { data: missingNumber  }  );
 });

module.exports = router;
// adding this comment for no reason