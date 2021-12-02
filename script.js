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

    // Triangle One has an area of 167,475 cm2 and Triangle Two 
    // has an area of 167,475 cm2. 
    // The triangle with the biggest area is neither they are equal.

    // Case3
    // triangleFive: base = 7,8cm, height = 5,6cm
    // triangleSix: base = 9,3cm, height = 12,4cm
    let triangleFive = (7.8 * 5.6) / 2
    // console.log(triangleFive)
    let triangleSix = (9.3 * 12.4) / 2
    // console.log (triangleSix)


    // Triangle One has an area of 21,84 cm2 and Triangle Five 
    // has an area of 57,66 cm2. 
    // The triangle with the biggest area is Triangle Six.

    // * ANSWER TO THE QUESTION:
    // The reason we need to use parantheses in this case is because of the priority order. We need to multiply
    // before we divide in these cases and dividing is prioritised before multiplying in JavaScript.
// ---------------------------------------------------------------------------------

// Print the total area for each triangle together with the result 
// of which one that has the biggest area. 
// Example:`Triangle One has an area of xx cm2 and Triangle Two 
// has an areaof xx cm2. 
// The triangle with the biggest area is Triangle xx.`
// Code an example for each case of test data.
// Hand in a link to your GitHub repo for your assignment and don't
// forget to answer the question above.

