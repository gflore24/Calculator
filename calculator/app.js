let heldValue = null
let heldOperation = null
let nextValue = null

$('.digits button').click(function()
{
    if(nextValue === null)
    {
        nextValue = 0
    }
    
        nextValue = nextValue + $(this).text()
   
        $('.next-value').text(updateDisplay('.next-value', nextValue))
    
})

function showValue(location, value) {

    if(value === null)
    {
        $(location).text(' ')
    } 
    else
    {
        $(location).text(Number(value))
    }
 
   
}
 
 function updateDisplay() {
    showValue('.held-value', heldValue)
    showValue('.next-value', nextValue)
}

function setHeldOperation(operation) 
{
    if(heldOperation !== null)
    {
        heldValue = heldOperation(heldValue, nextValue)
    }
    else if(nextValue !== null)
    {
        heldValue = nextValue
    }
    
        nextValue=null
        heldOperation=operation
    

}

function add(x,y){
    return (Number(x) + Number(y))
}

$('.add').click(function(){

 setHeldOperation(add)
 $('.next-operation').text('+')
 updateDisplay()
})

function subtract(x,y){
    return (Number(x) - Number(y))
}

$('.subtract').click(function(){
    setHeldOperation(subtract)
    $('.next-operation').text('-')
    updateDisplay()

})


function multiply(x,y){
    return Number(x) * Number(y)
}
$('.multiply').click(function(){
    setHeldOperation(multiply)
    $('.next-operation').text('*')
    updateDisplay()


})

function divide(x,y){
    return Number(x) / Number(y)
}

$('.divide').click(function(){
    setHeldOperation(divide)
    $('.next-operation').text('/')
    updateDisplay()


})

$('.equals').click(function(){
setHeldOperation(null)
$('.next-operation').text(' ')
updateDisplay()

})

$('.clear-all').click(function(){

    $('.next-value').text(nextValue = null);
    $('.held-value').text(heldValue = null);
    $('.next-operation').text(heldOperation = null);
})

$('.clear-entry').click(function(){

    $('.next-value').text(nextValue = null);
})

