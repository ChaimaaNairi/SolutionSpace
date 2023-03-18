import { Container, Row, Col } from 'react-bootstrap'
import React, { useState } from 'react'
import FormInput from './components/FormInput'
import QAList from './components/QAList'
import { question } from './data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data, setData] = useState(question)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
