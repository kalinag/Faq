import React, {useState} from 'react';
import Faq from './Faq';

 const Questions = () => {
    const [data,setData] = useState([
        {
            id:0,
            question: 'Question 1',
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            open:true
        },
        {
            id:1,
            question: 'Question 2',
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            open:false
        },
        {
            id:2,
            question: 'Question 3',
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            open:false
        },
        {
            id:3,
            question: 'Question 4',
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            open:false
        },
        {
            id:4,
            question: 'Question 5',
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            open:false
        },
        {
            id:5,
            question: 'Question 6',
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            open:false
        },
        {
            id:6,
            question: 'Question 7',
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            open:false
        },
        {
            id:7,
            question: 'Question 8',
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            open:false
        },
    ])

    const toggleOpen = (idx) => {
        let updatedFaqs = data.map((faq,i)=>{
            if (i===idx) {
                return {...faq, open:!faq.open};
            } else {
                return {...faq, open:false};
            }
        })

        setData(updatedFaqs)
    }

    return (
               
        <div className='faq-list'>
            {data.map((faq,idx)=>(
            <Faq faq={faq} idx={idx} toggle={toggleOpen} key={faq.id}/>))}
        </div>
     
    )
}

export default Questions;