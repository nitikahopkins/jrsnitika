
        function buttonPressed(value){
            document.getElementById("divToWrite").innerHTML = value
        }
        function arith(operator){
            const x = Number(document.getElementById('input1').value)
            const y = Number(document.getElementById('input2').value)
            if(operator === "+"){
                alert(x + y)
            }
            else if(operator === "-"){
                alert(x - y)
            }
        }
        function myAlert(message){
            let alert2 = document.getElementById('input1').value
            document.getElementById("divToWrite").innerHTML = alert2
        }
        console.log("hello, again")
       // document.getElementById("divToWrite").innerHTML = "Text has changed"

    