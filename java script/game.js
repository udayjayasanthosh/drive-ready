function main()
{
size=window.prompt("enter the grid size");

var i=0;
var j=0;

function lefting(i,j)
{
    if(this.j-1<0)
    {
        alert("Out of bounds");
    }
    else
    {
        undisplay(this.i,this.j);
        display(this.i,this.j-1);
    }
}

function righting(i,j)
{
    if(j+1>=size)
    {
        alert("Out of bounds");
    }
    else
    {
        undisplay(i,j);
        display(i,j+1);
    }
}
function toping(i,j)
{
    if(i-1<0)
    {
        alert("out of bounds");
    }
    else{
        undisplay(i,j);
        display(i-1,j);
    }
}
function downing(i,j)
{
    if(i+1>=size)
    {
        alert("out of bounds");
    }
    else
    {
        undisplay(i,j);
        display(i+1,j);
    }
}

function display(m,n)
{
    var c=m+"_"+n;
    var d=document.getElementById(c);
    d.style="background-color:white";
}
var operation=document.createElement("div");
operation.setAttribute("id","operation");
document.body.appendChild(operation);

var left=document.createElement("button");
left.innerHTML="left";
left.setAttribute("onclick",`lefting(${i},${j})`);
operation.appendChild(left);

var right=document.createElement("button");
right.innerHTML="right";
right.setAttribute("onclick",`righting(${i},${j})`);
operation.appendChild(right);

var top=document.createElement("button");
top.innerHTML="top";
top.setAttribute("onclick",`toping(${i},${j})`);
operation.appendChild(top);

var bottom=document.createElement("button");
bottom.innerHTML="bottom";
bottom.setAttribute("onclick",`downing(${i},${j})`);
operation.appendChild(bottom);

var grid=document.createElement("table");
for(var a=0;a<size;a++)
{
    var row=document.createElement("tr");
    row.id=a;
    for(var b=0;b<size;b++)
    {
        var cell=document.createElement("td");
        cell.style="background-color:red;border:1px solid black";
        cell.id=a+"_"+b;
        row.appendChild(cell);
    }
    grid.appendChild(row);
}
document.body.appendChild(grid);
display(i,j);


function undisplay(x,y)
{
    var ids=x+"_"+y;
    var pos=document.getElementById(ids);
    pos.style="background-color:red";
}



}
