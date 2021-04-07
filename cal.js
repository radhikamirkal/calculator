function gethistory(){
    return document.getElementById("historyvalue").innerText;
}


function printhistory(num){
    document.getElementById("historyvalue").innerText=num;
}

function getoutput(){
    return document.getElementById("outputvalue").innerText;
}

function printoutput(num){
    if(num==""){
        document.getElementById("outputvalue").innerText=num;
    }
    else{
    document.getElementById("outputvalue").innerText=getFormattedNumber(num);
    }
}

function getFormattedNumber(num){
    var n= Number(num);
    var value = n.toLocaleString("en");
    return value;
}


function reversenumberformat(num){
    return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");
for(var i=0; i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printhistory("");
            printoutput("");
        }
        else if(this.id=="backspace"){
            var output=reversenumberformat(getoutput()).toString();
            if(output){
                output=output.substr(0,output.length-1);
                printoutput(output);
            }
        }
        else{
            var output=getoutput();
            var history=gethistory();
            if(output!=""){
                output=revers00enumberformat(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printoutput(result);
                    printhistory("");
                }
                else{
                    history=histor+this.id;
                    printhistory(history);
                    printoutput("");
                }

            }
        }
            
    });
}

var number = document.getElementsByClassName("number");
for(var i=0; i<number.length;i++){
   number[i].addEventListener('click',function(){
       var output = reversenumberformat(getoutput());
       if (output!=NaN){
           output=output+this.id;
           printoutput(output);
       }
    });
}
