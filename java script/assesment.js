var a = true;
var data = [];
var obj1 = {
    "name": "Rahul",
    "age": 20,
    "gender": "M"
};
data.push(obj1);
var obj2 = {
    "name": "uday",
    "age": 21,
    "gender": "M"
};
data.push(obj2);
var obj3 = {
    "name": "jaya",
    "age": 21,
    "gender": "F"
};
data.push(obj3);
var obj4 =
{
    "name": "santhosh",
    "age": 21,
    "gender": "M"
};
data.push(obj4);
var obj5 =
{
    "name": "uday",
    "age": 21,
    "gender": "M"
};
data.push(obj5);

var b=document.getElementsByTagName("body");

var t = document.createElement("table");
b[0].appendChild(t);

var tablerow=document.createElement("tr");
t.appendChild(tablerow);

var n=document.createElement("th");
n.innerHTML="name";

var age=document.createElement("th");
age.innerHTML="age";

var gender=document.createElement("th");
gender.innerHTML="gender";

tablerow.appendChild(n);
tablerow.appendChild(age);
tablerow.appendChild(gender);

display();
function display()
{
    var tablerow=document.createElement("tr");
    t.appendChild(tablerow); 
    for(var i=0;i<data.length;i++)
    {
        var tablerow=document.createElement("tr");
        t.appendChild(tablerow);
        var o=data[i];
        for(let key in o)
        {
            var dat=o[key];
            var td=document.createElement("td");
            td.innerHTML=dat;
            tablerow.appendChild(td);
        }
    }
}

function gettinginput() {
    var obj=
    {
        "name":"",
        "age":0,
        "gender":""
    }
    var hg=document.getElementsByTagName("body");

    var diving=document.createElement("div");
    diving.id="container"
    hg[0].appendChild(diving);

    var a = document.createElement("p");
    a.innerHTML = "name";
    diving.appendChild(a);

    const b = document.createElement("input");
    b.type="text";
    b.id="bb";
    b.addEventListener("change",()=>
    {
        const t=b.value;
        obj["name"]=t;
    }
    )
    diving.appendChild(b);

    var c = document.createElement("p");
    c.innerHTML = "age";
    diving.appendChild(c);

    var d = document.createElement("input");
    d.type="number";
    d.id="dd";
    d.addEventListener("change",()=>
    {
        const t=d.value;
        obj["age"]=t;
    })
    diving.appendChild(d);

    var e = document.createElement("p");
    e.innerHTML = "gender";
    diving.appendChild(e);

    var f = document.createElement("input");
    f.type="text";
    f.id="ff";
    f.addEventListener("change",()=>
    {
        const t=f.value;
        obj["gender"]=t.charAt(0);
    })
    diving.appendChild(f);

    var g = document.createElement("button");
    g.innerHTML = "submit";
    diving.appendChild(g);

    
    g.addEventListener("click",()=> {
        data.push(obj);
        var tarow=document.createElement("tr");
        t.appendChild(tarow);

        var n=document.createElement("td");
        n.innerHTML=obj["name"];
        tarow.appendChild(n);

        var age=document.createElement("td");
        age.innerHTML=obj["age"];
        tarow.appendChild(age);
        
        var gender=document.createElement("td");
        gender.innerHTML=obj["gender"];
        tarow.appendChild(gender);
        my();
        function my()
        {
            hg[0].removeChild(diving);
           /* hg[0].removeChild(b);
            hg[0].removeChild(c);
            hg[0].removeChild(d);
            hg[0].removeChild(e);
            hg[0].removeChild(f);
            hg[0].removeChild(g);*/
        };
    },false)

}
var divs=document.createElement("div");
divs.id="divs";
document.body.appendChild(divs);
var butedit=document.createElement("button");
butedit.innerHTML="edit";
butedit.addEventListener("click",()=>
{
    var row=window.prompt("enter row number");
    var rowdata=document.getElementsByTagName("td");
    var editname=window.prompt("enter name");
    var editage=window.prompt("enter age");
    var editgender=window.prompt("enter gender");
    rowdata[(row*3)-3].innerHTML=editname;
    rowdata[(row*3)-2].innerHTML=editage;
    rowdata[(row*3)-1].innerHTML=editgender;
    var obly=data[row-1];
    obly["name"]=editname;
    obly["age"]=editage;
    obly["gender"]=editgender;
    console.log(data);

},false);
var butdelete=document.createElement("button");
butdelete.innerHTML="delete";
butdelete.addEventListener("click",()=>
{
    var rows=window.prompt("enter row number");
    data.splice(rows-1,rows);
    rows++;
    var tring=document.getElementsByTagName("tr");
    console.log(data);
    var deletingrow=tring[rows];
    console.log(deletingrow);
    t.removeChild(deletingrow);
});
divs.appendChild(butdelete);
divs.appendChild(butedit);

