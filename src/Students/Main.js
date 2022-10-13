
import React from 'react';
import { useState } from 'react';
import './main.css';
import Students from '../Task3/studentInfo';

export default function Main() {
 
    const [state, setState] = React.useState(Students);
    

   
  return (
    <div>
             <h2>students details</h2>
<div>
{/* <table>
      <tr key={"header"}>
        {Object.keys(state[0]).map((key) => (
          <th>{key}</th>
        ))}
      </tr>
      {state.map((item) => (
        <tr key={item.id}>
          {Object.values(item).map((val) => (
            <td>{val}</td>
          ))}
        </tr>
      ))}
    </table> */}
   
    
</div>
    </div>
  )
}
