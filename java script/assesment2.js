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

var tablerow=document.createElement("tr");
t.appendChild(tablerow);

var n=document.createElement("th");
n.innerHTML="name";

var age=document.createElement("th");
age.innerHTML="age";

var gender=document.createElement("th");
gender.innerHTML="gender";

var editing=document.createElement("th");
editing.innerHTML="edit";

var deleting=document.createElement("th");
deleting.innerHTML="delete";

tablerow.appendChild(n);
tablerow.appendChild(age);
tablerow.appendChild(gender);
tablerow.appendChild(editing);
tablerow.appendChild(deleting);


display();
function display()
{
    for(var i=0;i<data.length;i++)
    {
        var tablerow=document.createElement("tr");
        tablerow.id=i;
        t.appendChild(tablerow);
        var o=data[i];
        for(let key in o)
        {
            var dat=o[key];
            var td=document.createElement("td");
            td.innerHTML=dat;
            tablerow.appendChild(td);
        }
        var edit_td=document.createElement("td");
        var editbut=document.createElement("button");
        editbut.innerHTML="edit";
        edit_td.appendChild(editbut);
        tablerow.appendChild(edit_td);
        editbut.setAttribute("onclick",`edited(${i})`);
    
        var delete_td=document.createElement("td");
        var deletebut=document.createElement("button");
        deletebut.innerHTML="delete";
        delete_td.appendChild(deletebut);
        tablerow.appendChild(delete_td);
        deletebut.setAttribute("onclick",`deleted(${i})`,false);
    }
}
function edited(a)
{
    var h=document.getElementById(a);
    var childs=h.childNodes;
    var objects=data[a];
    childs[0].innerHTML=window.prompt("enter new name");
    childs[1].innerHTML=window.prompt("enter new name");
    childs[2].innerHTML=window.prompt("enter new name");
    objects["name"]=childs[0].innerHTML;
    objects["age"]=childs[1].innerHTML;
    objects["gender"]=childs[2].innerHTML;
}
function deleted(i)
{
    var h=document.getElementById(i);
    console.log(i);
    t.removeChild(h);
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
        tarow.id=data.length;
        t.appendChild(tarow);

        var i=data.length;

        var n=document.createElement("td");
        n.innerHTML=obj["name"];
        tarow.appendChild(n);

        var age=document.createElement("td");
        age.innerHTML=obj["age"];
        tarow.appendChild(age);
        
        var gender=document.createElement("td");
        gender.innerHTML=obj["gender"];
        tarow.appendChild(gender);

        var edit_td=document.createElement("td");
        var editbut=document.createElement("button");
        editbut.innerHTML="edit";
        edit_td.appendChild(editbut);
        tarow.appendChild(edit_td);
        editbut.setAttribute("onclick",`edited(${i})`);
    
        var delete_td=document.createElement("td");
        var deletebut=document.createElement("button");
        deletebut.innerHTML="delete";
        delete_td.appendChild(deletebut);
        tarow.appendChild(delete_td);
        deletebut.setAttribute("onclick",`deleted(${i})`);
        console.log(100000);
        my();
        function my()
        {
            hg[0].removeChild(diving);
        };
    },false)

}

var aa = "true";
function adding()
{
    if(aa=="true")
    {
    b[0].appendChild(t);
    aa="false";
    }
    else
    {
        gettinginput();
        aa="true";
    }
}
