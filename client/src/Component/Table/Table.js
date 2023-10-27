import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Delete, Edit} from 'react-feather'
import './Table.css'
const Table = (props) => {
  
  const [serialNumber, setSerialNumber] = useState(1);
  var i=0;
  const removeTask = id => {
    axios.delete(`http://localhost:8000/api/${id}`).then(res => props.removeTask(res.data)).catch(err => console.log(err))
} 


  return (
    <div className='Table-Container'>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Student Id</th>
          <th>Name</th>
          <th>Teacher Name</th>
          <th>Subject</th>
          <th>Marks</th>
          <th>Edit Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(item => (
          <tr key={item.id}>
            <td>{i=i+1}</td>
            <td>{item.name}</td>
            <td>{item.teacherName}</td>
            <td>{item.subject}</td>
            <td>{item.marks}</td>
            <td>
            
            
            <Edit onClick = {() => {
                   props.handleOpenModalB(item._id)
                }}/>
            <Delete className = 'close' onClick = {() => {
                    removeTask(item._id)
                }}/>

            </td>
          </tr>
          
        ))}
      </tbody>
    </table>
   
    </div>
  );
};

export default Table;