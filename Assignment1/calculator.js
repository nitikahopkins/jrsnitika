state = {
  firstVal: "",
  secondVal: "",
  operation: undefined
};

function reset() {
  state.firstVal = "";
  state.secondVal = "";
  state.operation = undefined;
  document.getElementById("divToWrite").value = 0;
}

function buttonPressed(newVal) {
  //if newval is the equals symbol, call onEqualPressed()

  if (typeof newVal === "number") {
    if (state.firstVal !== "" && state.operation !== undefined) {
      state.secondVal = Number(newVal);
      document.getElementById("divToWrite").value = state.secondVal;
  
  } else {
     state.firstVal = Number(newVal);
    document.getElementById("divToWrite").value = Number(newVal);

  } 
}
  
  else if (typeof newVal === "string") {
    if (newVal === "=") {
      onEqualPressed();
    }
    else {state.operation = newVal};
  }

  console.log(state);

  //if it is a number or it is a decimal -> update state firstVal or secondVal
}
function arith(operator) {
  const x = Number(document.getElementById("divToWrite").value);
  const y = Number(document.getElementById("divToWrite").value);
  if (operator === "+") {
    alert(x + y);
  } else if (operator === "-") {
    alert(x - y);
  } 
}


function onEqualPressed() {
 
  if (operation = '+') {
  document.getElementById("divToWrite").value = Number(state.firstVal) + Number(state.secondVal);
 }

//else if (operation = '-') {
  //{
   // document.getElementById("divToWrite").value = Number(state.firstVal) - Number(state.secondVal);
   // }
//}
//console.log(parseFloat(state.firstVal) + parseFloat(state.secondVal));

  //if (operation = '+') {
//  display (state.firstval + state.secondval);
//}
  //else if operation is 'x'
  //display state.firstval x state.secondval
  //else if operation is '/'
  //display state.firstval / state.secondval
  //else if operation is '-'
  //display state.firstval - state.secondval
  //else if operation is undefined
  //
}