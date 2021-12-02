// In this assignment you should calculate the area of two 
// triangles and then compare the values of the result to see 
// which one has the biggest area. Code one example for each 
// test data that you are provided. That means one case 
// (code example) for the first test data, one for the second 
// and so on. Use template literals to output the result to the 
// console. You can calculate the area of a triangle using the 
// formula:area = (base * height) / 2
// OBS! In this case you actually have to use the parentheses 
// when doing the area calculation. 
// Answer the question why JavaScript needs the parentheses 
// in this case? You can put your answer as plain text when 
// you hand in the assignment.TEST DATA

// ---------------------------------------------------------------------------------
    // Case1
    // triangleOne: base = 10cm, height = 13cm
    // triangleTwo: base = 16,5cm, height = 20,3cm
    let triangleOne = (10 * 13) / 2;
    // console.log(triangleOne)
    let triangleTwo = (16.5 * 20.3) / 2
    // console.log(triangleTwo)

    if (triangleOne > triangleTwo) {
        console.log(`Triangle One's area is greater than triangle two. Triangle One's area is ${triangleOne}`)
    } else if (triangleTwo > triangleOne) {
        console.log(`Triangle Two's Area is greater than Triangle One. Triangle Two's area is ${triangleTwo}`)
    } else if (triangleOne === triangleTwo) {
        console.log(`Triangle One and Two's area are the same.`)
    } else {
        console.log (`Invalid`)
    }

    // Triangle One has an area of 65 cm2 and Triangle Two 
    // has an area of 167,475 cm2. 
    // The triangle with the biggest area is Triangle Two.


    // Case2
    // triangleThree: base = 16,5cm, height = 20,3cm
    // triangleFour: base = 20,3cm, height = 16,5cm
    let triangleThree = (16.5 * 20.3) / 2
    // console.log (triangleThree)
    let triangleFour = (20.3 * 16.5) / 2
    // console.log(triangleFour)

    if (triangleThree > triangleFour) {
        console.log(`Triangle Three's area is greater than triangle Four. Triangle Three's area is ${triangleThree}`)
    } else if (triangleFour > triangleThree) {
        console.log(`Triangle Four's Area is greater than Triangle Three. Triangle Four's area is ${triangleFour}`)
    } else if (triangleThree === triangleFour) {
        console.log(`Triangle Three and Four's area are the same.`)
    } else {
        console.log (`Invalid`)
    }

    // Triangle Three has an area of 167,475 cm2 and Triangle Four 
    // has an area of 167,475 cm2. 
    // The triangle with the biggest area is neither they are equal.

    // Case3
    // triangleFive: base = 7,8cm, height = 5,6cm
    // triangleSix: base = 9,3cm, height = 12,4cm
    let triangleFive = (7.8 * 5.6) / 2
    // console.log(triangleFive)
    let triangleSix = (9.3 * 12.4) / 2
    // console.log (triangleSix)

    if (triangleFive > triangleSix) {
        console.log(`Triangle Five's area is greater than triangle Six. Triangle Five's area is ${triangleFive}`)
    } else if (triangleSix > triangleFive) {
        console.log(`Triangle Six's Area is greater than Triangle Five. Triangle Six's area is ${triangleSix}`)
    } else if (triangleFive === triangleSix) {
        console.log(`Triangle Five and Six's area are the same.`)
    } else {
        console.log (`Invalid`)
    }

    // Triangle One has an area of 21,84 cm2 and Triangle Five 
    // has an area of 57,66 cm2. 
    // The triangle with the biggest area is Triangle Six.

    // * ANSWER TO THE QUESTION:
    // The reason we need to use parantheses in this case is because of the priority order that goes from left and right
    //  and in this case I didnt' see any difference with parantheses but in bigger equations there might be issues.
// ---------------------------------------------------------------------------------

// Print the total area for each triangle together with the result 
// of which one that has the biggest area. 
// Example:`Triangle One has an area of xx cm2 and Triangle Two 
// has an areaof xx cm2. 
// The triangle with the biggest area is Triangle xx.`
// Code an example for each case of test data.
// Hand in a link to your GitHub repo for your assignment and don't
// forget to answer the question above.

