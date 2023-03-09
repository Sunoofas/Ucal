function buttonclick(value1){
    
    document.getElementById("screen").value=document.getElementById("screen").value+value1;
}
function clearDisplay(){
    document.getElementById("screen").value=""
}
function equalClick()
{
    let text=document.getElementById("screen").value;
    let result=eval(text);
    document.getElementById('screen').value=result;
}
