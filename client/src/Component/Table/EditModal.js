import React, { useRef } from 'react';
import axios from 'axios';
import './ModalForm.css'
import SuccessToast from '../../Reusable/ToastMessage';
import { Slide, toast } from "react-toastify"


const EditModal = ({ show, handleClose,formData,edittask ,Key}) => {
  // const FormComponent = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const cityRef = useRef();
  
    const handleSubmitB = (e,Key) => {
      e.preventDefault();
  
      const formData = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        city: cityRef.current.value,
      };
    
     
        // const edittask = id => {
            // axios.put(`http://localhost:8000/api/tasks/${id}`, formData)
            //         .then(res => {
                    
            //     }).catch(err => console.log(err))
            //   }
        
          }
    
    // console.log(Key)
  return (
    <div className={`modal ${show ? 'd-block' : ''}`}>
      
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal Form</h5>
            <button
              type="button"
              className="close"
              onClick={handleClose}
            >
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">

          <form className="form-container" onSubmit={handleSubmitB}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameRef} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailRef} required />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" ref={phoneRef} required />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input type="text" id="city" ref={cityRef} required />
      </div>
      <button type="Submit">SaveEdit</button>
    </form>
      </div>
      
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Close
            </button>
            

          </div>
        </div>
      </div>
      
    </div>
  );
}

export default EditModal;

