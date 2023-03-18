import { Container, Row, Col } from 'react-bootstrap'
import React, { useState } from 'react'
import FormInput from './components/FormInput'
import QAList from './components/QAList'
import { question } from './data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data, setData] = useState(question)

   //to add new item
   const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setData([...question])
    notify("  Added successfully", "Success")
  }

  //to delete all data items
  const deleteAllItems = () => {
    localStorage.removeItem("items")
    question.splice(0, question.length);
    setData([])
    notify("   All deleted successfully", "Success")
  }

  //to delete one item from array
  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]));
    setData([...items])
    notify(" Question deleted successfully", "Success")
    if (items.length <= 0) {
      deleteAllItems();
    }
  }

    //to push notifaction 

    const notify = (message, type) => {
      if (type === "Error")
        toast.error(message)
      else if (type === "Success")
        toast.success(message)
    };
  
    return (
      <div className="App">
      </div>
    );
  }
  
  export default App;