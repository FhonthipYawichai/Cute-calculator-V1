function Caladdition(){
    var a,b,result;
    a =Number(document.getElementById("num1").value);
    b =Number(document.getElementById("num2").value);
    result = a+b;
    document.getElementById("totalresult").innerHTML="Total:"+result;
    
} 

function Calsubtraction(){
    var a,b,result;
    a =Number(document.getElementById("num1").value);
    b =Number(document.getElementById("num2").value);
    result = a-b;
    document.getElementById("totalresult").innerHTML="Total:"+result;
}

function Calmultiplication(){
    var a,b,result;
    a =Number(document.getElementById("num1").value);
    b =Number(document.getElementById("num2").value);
    result = a*b;
    document.getElementById("totalresult").innerHTML="Total:"+result;
}

function Caldivision(){
    var a,b,result;
    a =Number(document.getElementById("num1").value);
    b =Number(document.getElementById("num2").value);
    result = a/b;
    document.getElementById("totalresult").innerHTML="Total:"+result;
}

function Clear(){
    Number(document.getElementById("num1").value="")
    Number(document.getElementById("num2").value="")
    document.getElementById("totalresult").innerHTML=""
}
