import React, { useEffect, useState } from "react";
import  students  from "../Task3/studentInfo";
import { useParams } from "react-router-dom";

export default function Studentdetails() {
  const letters = /[a-zA-Z]/g;
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const params = useParams();
  const [Students, setStudents] = useState({});
  //const reg = '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])$/';


  useEffect(() => {
   
    for (var i = 0; i < students.length; i++) {
      if (params.stdid == students[i].id) {
        setStudents(students[i]);
      }else if(params.stdid != 4 ){
  document.getElementById("main").innerHTML="student id contain only four digits";
      }
      else if(letters.test(params.stdid) || specialChars.test(params.stdid)){
        document.getElementById("one").innerHTML="id format is wrong";

      }else{
          document.getElementById("two").innerHTML="data not found";
      }
    }
  });

//   useEffect(()=> {
//     var reg = '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/';
//    // var test = reg.test(pass);
//     if (params.stdid==reg) {
        
//     } 
// });

  return (
    <>
     <h2>student information</h2>
     <h3>student id:{Students.id}</h3>
     <h3>student name:{Students.name}</h3>
     <h3>student marks:{Students.marks}</h3>
     <h3>student place:{Students.place}</h3>

<>

<p id="one"></p>
     <p id="main"></p>
     <p id="two"></p>
</>
    </>
    
  
  );
}
