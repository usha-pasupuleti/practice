import React, { useState } from 'react'
import { useParams } from "react-router-dom";


export default function Header() {

  const params = useParams();
    // const [state, setState] = React.useState();
    const [id,setId]=useState()
    const[data,setData]=useState({})

    const  students=[{id:1231,name:"nani",marks:80,place:"hyd",class:"8th"},
{id:1342,name:"ram",marks:90,place:"hyd",class:"8th"},
{id:1243,name:"santhi",marks:80,place:"bang",class:"9th"},
{id:1254,name:"kalyan",marks:80,place:"hyd",class:"9th"},
{id:1265,name:"geeta",marks:80,place:"hyd",class:"8th"},
{id:1276,name:"sandhya",marks:90,place:"hyd",class:"10th"},
{id:1287,name:"honey",marks:80,place:"hyd",class:"8th"},
{id:1283,name:"alki",marks:70,place:"hyd",class:"8th"},
{id:1294,name:"mahi",marks:95,place:"bang",class:"8th"},
{id:1200,name:"vamshi",marks:95,place:"bang",class:"8th"},
{id:1211,name:"kiran",marks:90,place:"bang",class:"8th"},
{id:1222,name:"mouni",marks:80,place:"bang",class:"9th"},
{id:1233,name:"lavanya",marks:80,place:"bang",class:"9th"},
{id:1244,name:"pavi",marks:80,place:"chenni",class:"9th"},
{id:1255,name:"nani",marks:80,place:"chenni",class:"9th"},
 {id:1266,name:"nani2",marks:90,place:"chenni",class:"9th"},
{id:1277,name:"ram2",marks:90,place:"chenni",class:"9th"},
{id:1288,name:"deepa",marks:80,place:"chenni",class:"10th"},
  {id:1299,name:"vijay",marks:90,place:"hyd",class:"10th"},
{id:1201,name:"nirmala",marks:90,place:"hyd",class:"10th"},
{id:1212,name:"anitha",marks:90,place:"hyd",class:"10th"},
    {id:1223,name:"jyothi",marks:90,place:"hyd",class:"10th"}]; 

    var html = "<table border='0'>"
    
          function All(){
            for(var i=0;i<students.length;i++){
      
         html+='<tr>';
         html+='<td>'+students[i].id+"</td>";
         html+='<td>'+students[i].name+"</td>";
         html+='<td>'+students[i].marks+"</td>";
         html+='<td>'+students[i].place+"</td>";
         html+='<td>'+students[i].class+"</td>";
         html+='</tr>';
    }
    document.getElementById("table").innerHTML=html;
}

function selection(){
  for(var i=0;i<=students.length;i++){
      if(students[i].id==id){
          setData(students[i])
      }
  }
  
}

   return(
    <div>

    <button onClick={All} style={{width:100,marginTop:50,padding:10,color:"red"}}>all students</button>
             <input type="text" style={{marginLeft:30}} id="one" onChange={(e)=>{setId(e.target.value)}}></input>
    <button style={{width:80,marginTop:50,padding:10,color:"red"}} onClick={selection}>Singl student</button>
    <p id="one"></p>
    <div>
        <table id="table" style={{marginTop:40}}></table>
    </div>
   
  
   <p>Id:{data.id}</p>
   <p>name:{data.name}</p>
   <p>marks:{data.marks}</p>
   <p>place:{data.place}</p>
   <p>class:{data.class}</p>
    </div>

   );
}