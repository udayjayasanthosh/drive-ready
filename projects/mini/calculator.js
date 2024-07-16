var amount=parseInt(0);
var operating="";
var storing=parseInt(0);
var total=0;
var key="";
var operand=parseInt(0);

function number(event)
{
    if(operating=="")
    {
    amount=(amount*10)+parseInt(event.target.innerHTML);
    var current=document.getElementById("current");
    current.innerHTML=amount;
    }
    else
    {
        operand=operand*10+parseInt(event.target.innerHTML);
        var current=document.getElementById("current");
        
    }
}
function operation(event)
{
    if(operating=="")
    {
        operating=event.target.innerHTML;
        var prev=document.getElementById("previous");
        prev.innerHTML=amount;
        var current=document.getElementById("current");
        current.innerHTML=amount+operating;
    }
    else
    {
        alert("invalid operation");
    }
}