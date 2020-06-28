// //Task 3 Question 01


// for (i=1;i<=7;i++){
//     for(j=1;j<=i;j++){
//         console.log("#")
//         }
//         console.log("")
//     }

// //Task 3 Question 02
// var strArray= [ "<option>Jazz</option>",
//                 "<option>Blues</option>",
//                 "<option>New Age</option>",
//                 "<option>Classical</option>",
//                 "<option>Opera</option>"
//             ]
      

// for (i=0;i<=4;i++) 
// {console.log(strArray[i])}

// //Task 3 Question 03
// var myarray=[11,22,33,44,55]

// var a = myarray.lastIndexOf(55);

// console.log(a)


// //Task 3 Question : Declare a Empty Array 

// let fruits = []


// //Task 3 Question : Declare a Foods Array add 20 items

// let foods = ["Fruit",
//     "Eggs",
//     "Meat",
//     "Nuts", 
//     "seeds",
//     "Veggies",
//     "Seafood",
//     "Grains",
//     "Bread",
//     "Legumes",
//     "Dairy",
//     "Fats",
//     "oils",
//     "Tubers",
//     "Vinegar",
//     "Chocolate",
//     "Mutoons",
//     "LadyFinger",
//     "Idli",
//     "Dosa"]

//     console.log(foods)
//     console.log(foods[4])
//     console.log(foods.length)

// //Task 3 Question : Change name from mari to munnabhai

// let friends = [
//     "Mari",
//     "MaryJane",
//     "CaptianAmerica",
//     "Munnabai",
//     "Jeff",
//     "AAK chandran"
//     ];

// friends[0] = "MunnaBhai";

// console.log(friends)


//Task 3 Question : Print till Captain America

const friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];

    function dataHandling(input){
        for (var i = 0; i < input.length; i++) {
            if(friends1[2]=='CaptainAmerica'){
                console.log(friends1)
            }
        
        }
        }
        dataHandling(friends1);



// const friends1 = [
//     "Mari",
//     "MaryJane",
//     "CaptianAmerica",
//     "Munnabai",
//     "Jeff",
//     "AAK chandran"
//     ];

//     function dataHandling(input, name){
//         for (var i = 0; i < input.length; i++) {
        
//         }
//         }
//         let found = dataHandling(friends1,"Jeff");
//         console.log(found);
// dataHandling(friends1)