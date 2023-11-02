import React , {useState , useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Table from './Component/Table/Table';
import Dropdown from './Component/Dropdown/Dropdown';
import ModalForm from './Component/Table/ModalForm';
import SuccessToast from './Reusable/ToastMessage';
import EditModal from './Component/Table/EditModal';
function App({formData,edittask,Key,onCharngeFilter,handleSubmitA}) {
  const [todolist,setTodolist] = useState([])
  const[monitorId,setMonitorid]=useState('tasks')
  
    const FilterChangeHandler=(monitor)=>{
    console.log(monitor)
    setMonitorid(monitor)
  }

  

  useEffect(() => {
    axios.get(`http://localhost:8000/api/tasks`).then(res => {
    // axios.get(`http://localhost:8000/api/tableData/${monitorId}`).then(res => {
      setTodolist(res.data)
    }).catch(err => console.log(err))
  },[formData,monitorId])

// post new row
  useEffect(() => {
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
    }, []);
  
 

  const removeTask = task => {
    const newList = todolist.filter(item => !(item._id === task._id))
    setTodolist(newList)
  }

  const [showModal, setShowModal] = useState(false);
  const [showModalB, setShowModalB] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleOpenModalB = () => {
    setShowModalB(true);
  };

  const handleCloseModalB = () => {
    setShowModalB(false);
  };
  
  return (
    <div className="App">
     <Dropdown onCharngeFilter={FilterChangeHandler}/>
     
     <button onClick={handleOpenModal} className="btn btn-primary">Add</button>
     
      <ModalForm show={showModal} handleClose={handleCloseModal} handleSubmitA={handleSubmitA}/>
      <EditModal show={showModalB} handleClose={handleCloseModalB} key={Key} formData={formData}/>
      <Table data = {todolist}  removeTask = {removeTask} edittask={edittask} handleOpenModalB={handleOpenModalB}/>
      
    </div>
  );
}

export default App;
