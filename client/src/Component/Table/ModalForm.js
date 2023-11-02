import React, { useRef } from "react";
import axios from "axios";
import "./ModalForm.css";
import SuccessToast from "../../Reusable/ToastMessage";
import { Slide, toast } from "react-toastify";
import { XSquare ,X} from 'react-feather';
const ModalForm = ({ show, handleClose, formData }) => {
  // const FormComponent = () => {
  const nameRef = useRef();
  const teacheRef = useRef();
  const subjectRef = useRef();
  const marksRef = useRef();

  const handleSubmitA = (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      teacher: teacheRef.current.value,
      subject: subjectRef.current.value,
      marks: marksRef.current.value,
    };

    // useEffect(() => {
    axios
      .post("http://localhost:8000/api/tasks", formData)
      .then((res) => {
        // Handle success
        console.log(res);
        // toast.success(<SuccessToast header="Success" body='okkkkkkkkk' />,  { transition: Slide, hideProgressBar: true, autoClose: 2000 })
        <SuccessToast message="Success! Your action was completed." />;
        handleClose = false;
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
    // }, []);
  };

  return (
    <div className={`modal ${show ? "d-block" : ""}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal Form</h5>
            <X size={32} className="close" onClick={handleClose}/>
            {/* <button type="button" className="close" onClick={handleClose}>
              <span>&times;</span>
            </button> */}
          </div>
          <div className="modal-body">
            <form className="form-container" onSubmit={handleSubmitA}>
              <div class="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" ref={nameRef} required />
              </div>
              <div class="form-group">
                <label htmlFor="teacher">Teacher Name:</label>
                <input type="text" id="teacher" ref={teacheRef} required />
              </div>
              <div class="form-group">
                <label htmlFor="subject">Subject:</label>
                <input type="tel" id="subject" ref={subjectRef} required />
              </div>
              <div class="form-group">
                <label htmlFor="marks">Marks:</label>
                <input type="number" id="marks" ref={marksRef} required />
              </div>
              <button type="submit" onClick={handleClose} class="form-submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ModalForm;
