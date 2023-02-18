//Value from Input
function getValueFromInput(id){
    const mainId = document.getElementById(id);
    const inputValueString = mainId.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}