console.log("Hello world")

function sayHello()
{
    let fName = "Robbie"
    console.log("Hello" + fName + "!")

}
sayHello()

function calculate(x, y)
{
    //declare varibles for function
    // call functions nested within variables
    let addition = sum (x,y)
    //takes addition as parameter, saves answer in result
    let result = divideByTwo(addition)
    //return saved values in result 
    return result
}

//create sum functions
function sum (x,y)
{ //return dynamic arguments back, saved in addition
    return x + y
}

// create divide byTwoFunction
function divideByTwo(i)
{
    console.log(i / 2)
    // save result in variable called result
    return i / 2 
}

// create function to start the chain off
function log()
{
    console.log(calculate(10, 20))
    
}
// call log function 

