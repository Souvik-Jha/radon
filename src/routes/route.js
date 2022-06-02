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


// router.get("/sol1", function (req, res) {
//     console.log("assaassa")
//     //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
//     let arr= [1,2,3,5,6,7]
//     let sum = 0
//     for(i = 0; i<arr.length ; i++){
//          sum += arr[i]
//     }
//     console.log(sum)

//     let n = arr[arr.length-1]
//     console.log(n)
//     let totalSum = (n.n+1)/2
//     console.log(totalSum)
//     // let missingNumber = n.n+1/2 - sum
//     // console.log(missingNumber)


//     ///LOGIC WILL GO HERE no
//     res.send("missingNumber");
// });


module.exports = router;
// adding this comment for no reason