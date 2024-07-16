var i=0;
var j=0;

var ri;
var rj;

var size;
function randow()
{
    ri=Math.floor(Math.random() * (size));
    rj=Math.floor(Math.random() * (size));
    var posi=ri+"_"+rj;
    console.log(posi);
    var idd=document.getElementById(posi);
    idd.style.backgroundColor="red";
}
function main()
{

var starting=document.getElementById("start");
document.body.removeChild(starting);

size=window.prompt("enter the grid size");

var grid=document.createElement("table");
for(var a=0;a<size;a++)
{
    var row=document.createElement("tr");
    for(var b=0;b<size;b++)
    {
        var cell=document.createElement("td");
        cell.style="background-color:orange;";
        cell.id=a+"_"+b;
        row.appendChild(cell);
    }
    grid.appendChild(row);
}
document.body.appendChild(grid);
display(i,j);

var score=document.createElement("div");
score.id="score";
score.innerHTML=0;
score.style="background-color:orange;width:50px;height:50px;color:black;text-align:center;display:flex;flex-direction:column;";
document.body.appendChild(score);

randow();
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
        if(i==ri && j+1==rj)
        {
            var scoring=document.getElementById("score");
            scoring.innerHTML=parseInt(scoring.innerHTML)+1;
            undisplay(ri,rj);
            randow();
        }
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
        if(i==ri && j-1==rj)
            {
                var scoring=document.getElementById("score");
                scoring.innerHTML=parseInt(scoring.innerHTML)+1;
                undisplay(ri,rj);
                randow();
            }
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

        if(i-1==ri && j==rj)
            {
                var scoring=document.getElementById("score");
                scoring.innerHTML=parseInt(scoring.innerHTML)+1;
                undisplay(ri,rj);
                randow();
            }

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
        if(i+1==ri && j==rj)
            {
                randow();
                var scoring=document.getElementById("score");
                scoring.innerHTML=parseInt(scoring.innerHTML)+1;
            }  
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

function keyoperation(event)
{
    if(event.code=="ArrowUp")
    {
        toping();
    }
    else if(event.code=="ArrowDown")
    {
        downing();
    }
    else if(event.code=="ArrowRight")
    {
        righting();
    }
    else if(event.code=="ArrowLeft")
    {
        lefting();
    }
}