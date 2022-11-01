function sum(a, b)
{
    return a + b;
}


module.exports = {
    sum,
    subtract, //TODO: uncomment this line to make the subtract function available in other files
    divide
};

function subtract(a, b)
{
    return a - b;
}

function divide(a,b){
    return (a / b);
}