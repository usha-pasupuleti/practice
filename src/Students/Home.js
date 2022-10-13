import React, { useEffect } from 'react'
import { students } from "./Main";
import { useParams } from "react-router-dom";


export default function Home() {
    const params = useParams();
  const [Students, setStudents] = useState();

  useEffect(()=>{
    for(var i=0;i<students.length;i++){
        if(params.id==""){
            
        }
    }
  })

  return (
    <div>
       <h1>student details</h1>
    </div>
  )
}

