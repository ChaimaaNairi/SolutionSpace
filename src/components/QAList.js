import React from 'react'
import { Row, Accordion } from 'react-bootstrap';
import { question } from '../data'

const QAList = ({ data, deleteOneItem }) => {
    const dataLocal = JSON.parse(localStorage.getItem("items"))

    //to delete one item from array
    const onDeleteItem = (ID) => {
        if (localStorage.getItem("items") != null) {
            const index = question.findIndex((item) => item.id === ID);
            question.splice(index, 1)
            deleteOneItem(question);
        }
    }

return (
    <div>
      
    </div>
  )
}

export default QAList;
