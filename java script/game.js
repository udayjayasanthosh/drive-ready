var i=0;
var j=0;

function main()
{

var starting=document.getElementById("start");
document.body.removeChild(starting);

size=window.prompt("enter the grid size");

var grid=document.createElement("table");
for(var a=0;a<size;a++)
{
    var row=document.createElement("tr");
    row.id=a;
    for(var b=0;b<size;b++)
    {
        var cell=document.createElement("td");
        cell.style="background-color:orange;";
        cell.id=a+"_"+b;
        console.log(cell.id);
        row.appendChild(cell);
    }
    grid.appendChild(row);
}
document.body.appendChild(grid);
display(i,j);

var operation=document.createElement("div");
operation.setAttribute("id","operation");
document.body.appendChild(operation);

var left=document.createElement("button");
left.innerHTML="left";
left.setAttribute("onclick",`lefting()`);
operation.appendChild(left);

var right=document.createElement("button");
right.innerHTML="right";
right.setAttribute("onclick",`righting()`);
operation.appendChild(right);

var top=document.createElement("button");
top.innerHTML="top";
top.setAttribute("onclick",`toping()`);
operation.appendChild(top);

var bottom=document.createElement("button");
bottom.innerHTML="down";
bottom.setAttribute("onclick",`downing()`);
operation.appendChild(bottom);

}
function undisplay(x,y)
{
    var ids=x+"_"+y;
    var pos=document.getElementById(ids);
    pos.style="background-color:orange";
}
function righting()
{
    if(j+1>=size)
    {
        alert("Out of bounds");
    }
    else
    {
        undisplay(i,j);
        display(i,j+1);
        j=j+1;
    }
}
function lefting()
{
    if(j-1<0)
    {
        alert("Out of bounds");
    }
    else
    {
        undisplay(i,j);
        display(i,j-1);
        j=j-1;
    }
}
function toping()
{
    if(i-1<0)
    {
        alert("out of bounds");
    }
    else{
        undisplay(i,j);
        display(i-1,j);
        i=i-1;
    }
}
function downing()
{
    if(i+1>=size)
    {
        alert("out of bounds");
    }
    else
    {
        undisplay(i,j);
        display(i+1,j);
        i=i+1;
    }
}

function display(m,n)
{
    var c=m+"_"+n;
    var d=document.getElementById(c);
    d.style="background-color:black";
}